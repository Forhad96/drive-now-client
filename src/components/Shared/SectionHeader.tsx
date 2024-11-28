interface SectionHeaderProps {
  subtitle: string;
  title: string;
  alignment?: "left" | "center" | "right"; // Optional alignment property
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  alignment = "center",
}) => {
  // Determine the alignment class based on the alignment prop
  const alignmentClass =
    alignment === "left"
      ? "text-left"
      : alignment === "right"
      ? "text-right"
      : "text-center";

  return (
    <div
      className={`${alignmentClass} my-10 sm:my-12 md:my-16 lg:my-20 xl:my-24`}
    >
      {/* Subtitle */}
      <p className="text-primary text-xl font-medium mb-2">
        <span className="text-primaryHover">*</span> {subtitle}
      </p>

      {/* Title */}
      <h2
        className="text-2xl md:text-5xl font-bold text-light-text"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
};

export default SectionHeader;
