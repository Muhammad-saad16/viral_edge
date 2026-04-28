export default function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const letter = variant === "light" ? "#FFFFFF" : "#546b52";
  const hole   = variant === "light" ? "#1a1a1a"  : "#faebd7";

  return (
    <svg
      viewBox="0 0 178 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SQRD Digital"
    >
      <text x="0"   y="35" fontFamily="'Arial Black', Arial, sans-serif" fontWeight="900" fontSize="37" fill={letter}>S</text>
      <rect x="25"  y="2"  width="23" height="27" fill="#ff6400" />
      <rect x="31"  y="7"  width="13" height="13" fill={hole} />
      <rect x="25"  y="30" width="8"  height="8"  fill="#ff6400" />
      <text x="51"  y="35" fontFamily="'Arial Black', Arial, sans-serif" fontWeight="900" fontSize="37" fill={letter}>R</text>
      <text x="76"  y="35" fontFamily="'Arial Black', Arial, sans-serif" fontWeight="900" fontSize="37" fill={letter}>D</text>
      <text x="108" y="33" fontFamily="Arial, 'Helvetica Neue', sans-serif" fontWeight="400" fontSize="24" fill={letter}>Digital</text>
    </svg>
  );
}
