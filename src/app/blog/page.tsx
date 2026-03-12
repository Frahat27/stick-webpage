import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog de ortodoncia y alineadores invisibles | STICK',
  description:
    'Artículos sobre alineadores invisibles, proceso, comparativas y cuidados. Información clara y honesta para quienes consideran tratamiento ortodóncico.',
  alternates: { canonical: 'https://stickalineadores.com.ar/blog' },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white pt-12 pb-8">
        <Container>
          <div className="max-w-2xl">
            <p className="text-brand-600 text-sm font-semibold tracking-widest uppercase mb-2">Blog</p>
            <h1 className="text-4xl sm:text-5xl font-black text-neutral-900 mb-5 leading-tight">
              Información clara sobre alineadores
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Todo lo que necesitás saber sobre el tratamiento, escrito sin tecnicismos y con evidencia real.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          {posts.length === 0 ? (
            <div className="text-center py-16 text-neutral-400">
              <p className="text-lg mb-2">Los posts del blog se cargan desde MDX.</p>
              <p className="text-sm">Agregá archivos .mdx en <code>src/content/blog/</code></p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-neutral-50 border border-neutral-200 rounded-2xl p-6 hover:border-brand-300 hover:shadow-md transition-all"
                >
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs bg-brand-50 text-brand-600 px-2 py-0.5 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <h2 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-brand-700 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-neutral-600 text-sm leading-relaxed flex-1 mb-4">{post.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-400">
                      {new Date(post.date).toLocaleDateString('es-AR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    {post.readingTime && (
                      <span className="text-xs text-neutral-400">{post.readingTime} de lectura</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
