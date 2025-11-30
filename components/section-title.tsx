interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionTitle({ subtitle, title, description, className = "" }: SectionTitleProps) {
  return (
    <div className={`section-title ${className}`}>
      {subtitle && <span>{subtitle}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
