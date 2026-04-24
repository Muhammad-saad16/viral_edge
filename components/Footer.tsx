import Link from "next/link";
import Logo from "./Logo";

const quickLinks = [
  { href: "/",               label: "Home"          },
  { href: "/meet-the-squad", label: "Meet The Squad"},
  { href: "/portfolio",      label: "Portfolio"     },
  { href: "/services",       label: "Services"      },
  { href: "/post-for-rent",  label: "Post For Rent" },
  { href: "/contact",        label: "Contact Us"    },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Top border accent */}
      <div className="h-0.5 bg-gradient-to-r from-sage via-orange to-sage opacity-60" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <Logo className="h-9 w-auto mb-5" variant="light" />
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              A digital agency built for brands that refuse to be average.
              Strategy, content, and growth — all under one roof.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { label: "IG", href: "#" },
                { label: "FB", href: "#" },
                { label: "LI", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-xs font-bold text-white/45 hover:border-sage hover:text-sage hover:bg-sage/10 transition-all"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-white/30 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/45 hover:text-sage transition-colors font-medium"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-white/30 mb-6">
              Get In Touch
            </h4>
            <address className="not-italic space-y-3 text-sm text-white/45">
              <p className="leading-relaxed">
                38 26TH Street, Block 4<br />
                Clifton, Karachi City, Sindh 75000
              </p>
              <p>
                <span className="text-white/25 text-xs">Phone</span><br />
                021 35395533
              </p>
              <p>
                <span className="text-white/25 text-xs">Email</span><br />
                info@viraledge.com.pk
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/20">
            © ViralEdge 2024. All rights reserved.
          </p>
          <p className="text-xs text-white/15">
            Karachi, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
