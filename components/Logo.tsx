/* SQRD Digital logo — SVG recreation of FIle.psd / FIle.png
   S + orange-square-icon + R + D + "Digital"
   The orange icon replaces the "Q" — thick frame with white cutout + bottom tab */
export default function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const letter  = variant === "light" ? "#FFFFFF" : "#3A5438";
  const hole    = variant === "light" ? "#2C2C2C" : "#F5F0E8";

  return (
    <svg
      viewBox="0 0 178 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SQRD Digital"
    >
      {/* ── S ── */}
      <text
        x="0" y="35"
        fontFamily="'Arial Black', 'Arial Bold', Arial, sans-serif"
        fontWeight="900"
        fontSize="37"
        fill={letter}
      >S</text>

      {/* ── Orange square icon (the "Q") ── */}
      {/* outer orange square */}
      <rect x="25" y="2"  width="23" height="27" fill="#E07A3B" />
      {/* white/bg cutout — upper-right area, asymmetric frame */}
      <rect x="31" y="7"  width="13" height="13" fill={hole} />
      {/* bottom tab extending below-left */}
      <rect x="25" y="30" width="8"  height="8"  fill="#E07A3B" />

      {/* ── R ── */}
      <text
        x="51" y="35"
        fontFamily="'Arial Black', 'Arial Bold', Arial, sans-serif"
        fontWeight="900"
        fontSize="37"
        fill={letter}
      >R</text>

      {/* ── D ── */}
      <text
        x="76" y="35"
        fontFamily="'Arial Black', 'Arial Bold', Arial, sans-serif"
        fontWeight="900"
        fontSize="37"
        fill={letter}
      >D</text>

      {/* ── Digital ── */}
      <text
        x="108" y="33"
        fontFamily="Arial, 'Helvetica Neue', Helvetica, sans-serif"
        fontWeight="400"
        fontSize="24"
        fill={letter}
      >Digital</text>
    </svg>
  );
}
