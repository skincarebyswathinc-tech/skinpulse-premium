interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => (
  <div className="mb-sp-4">
    <h2 className="text-page-title">{title}</h2>
    {subtitle && <p className="text-micro mt-1">{subtitle}</p>}
  </div>
);

export default PageHeader;
