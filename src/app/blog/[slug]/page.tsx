import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import CTASection from '@/components/ui/CTASection';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Organization',
      name: 'STICK Alineadores',
    },
    publisher: {
      '@type': 'Organization',
      name: 'STICK Alineadores',
      logo: {
        '@type': 'ImageObject',
        url: 'https://stickalineadores.com.ar/logo.png',
      },
    },
    datePublished: post.date,
    url: `https://stickalineadores.com.ar/blog/${post.slug}`,
  };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
    alternates: {
      canonical: `https://stickalineadores.com.ar/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: 'https://stickalineadores.com.ar/og-image.jpg',
    author: {
      '@type': 'Organization',
      name: 'STICK Alineadores',
      url: 'https://stickalineadores.com.ar',
    },
    publisher: {
      '@type': 'Organization',
      name: 'STICK Alineadores',
      logo: { '@type': 'ImageObject', url: 'https://stickalineadores.com.ar/logo.png' },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://stickalineadores.com.ar/blog/${post.slug}`,
    },
    url: `https://stickalineadores.com.ar/blog/${post.slug}`,
    inLanguage: 'es-AR',
    about: {
      '@type': 'MedicalCondition',
      name: 'Ortodoncia con alineadores invisibles',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white pt-16 pb-10">
        <Container>
          <div className="max-w-2xl">
            <Link href="/blog" className="text-brand-600 text-sm font-medium hover:underline mb-5 inline-block">
              ← Volver al blog
            </Link>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-brand-50 text-brand-600 px-2.5 py-1 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed mb-5">{post.description}</p>
            <div className="flex items-center gap-4 text-sm text-neutral-400">
              <span>
                {new Date(post.date).toLocaleDateString('es-AR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              {post.readingTime && <span>· {post.readingTime} de lectura</span>}
              {post.author && <span>· {post.author}</span>}
            </div>
          </div>
        </Container>
      </section>

      {/* Article */}
      <section className="bg-white py-10">
        <Container>
          <div className="max-w-2xl mx-auto">
            <article className="prose prose-neutral prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl">
              <MDXRemote source={post.content} />
            </article>

            {/* Tags footer */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-10 pt-8 border-t border-neutral-200">
                <p className="text-sm text-neutral-500 mb-3">Temas:</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-neutral-50 py-16">
        <Container>
          <CTASection
            title="¿Estás pensando en alineadores?"
            description="El primer paso es el escaneo. Sin compromiso, sin moldes. Coordinalo por WhatsApp en minutos."
            context="patient"
            ctaLabel="Coordinar escaneo por WhatsApp"
            secondary={{ label: 'Ver antes y después', href: '/pacientes/antes-y-despues' }}
            className="max-w-3xl mx-auto"
          />
        </Container>
      </section>
    </>
  );
}
