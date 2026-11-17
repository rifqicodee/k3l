/**
 * Section berupa kartu besar rounded Bergaya Aeline:
 * konten di-wrap kartu putih/krem dengan radius besar dan inset dari tepi layar.
 */
export function SectionCard({
  children,
  className = "",
  tone = "paper",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "white" | "dark" | "lime";
}) {
  const tones: Record<string, string> = {
    paper: "bg-card",
    white: "bg-white",
    dark: "bg-olive-dark text-white",
    lime: "bg-lime-accent text-olive-dark",
  };
  return (
    <section className={`container-k3l ${className}`}>
      <div
        className={`overflow-hidden rounded-4xl px-5 py-10 shadow-sm sm:px-10 md:py-16 ${tones[tone]}`}
      >
        {children}
      </div>
    </section>
  );
}
