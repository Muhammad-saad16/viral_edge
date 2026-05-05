export default function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="SQRD Digital"
      className={className}
      style={{
        objectFit: "contain",
        filter: variant === "light" ? "brightness(0) invert(1)" : "none",
      }}
    />
  );
}
