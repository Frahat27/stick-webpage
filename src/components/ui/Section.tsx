import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: React.ElementType;
  style?: React.CSSProperties;
}

export default function Section({ children, className, id, as: Tag = 'section', style }: SectionProps) {
  return (
    <Tag id={id} className={cn('py-10 sm:py-14 lg:py-16', className)} style={style}>
      {children}
    </Tag>
  );
}
