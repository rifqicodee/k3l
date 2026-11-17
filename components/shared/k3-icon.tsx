import { cn } from "@/lib/utils";

/**
 * Icon K3 khas — gir dengan simbol plus di tengah
 * (pengganti HardHat sebagai identitas K3L Hub).
 * Monokrom: mewarisi warna teks via `currentColor`.
 */
export function K3Icon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={cn("size-5", className)}
      {...props}
    >
      {/* gigi gir: 8 rounded rect yang dirotasi di titik tengah */}
      {Array.from({ length: 8 }).map((_, i) => (
        <rect
          key={i}
          x="10.3"
          y="0.9"
          width="3.4"
          height="3.2"
          rx="1"
          fill="currentColor"
          transform={`rotate(${i * 45} 12 12)`}
        />
      ))}
      {/* badan gir (ring luar) */}
      <circle
        cx="12"
        cy="12"
        r="7.6"
        stroke="currentColor"
        strokeWidth="3.6"
        fill="currentColor"
        fillOpacity="0"
      />
      {/* lingkaran dalam rata (bagian dari ring) */}
      <circle cx="12" cy="12" r="6.9" fill="currentColor" fillOpacity="0" />
      {/* plus (simbol kesehatan) */}
      <path
        d="M10.75 6.9h2.5v3.85h3.85v2.5h-3.85v3.85h-2.5v-3.85H6.9v-2.5h3.85z"
        fill="currentColor"
      />
    </svg>
  );
}
