import { Flame } from "lucide-react";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(window.location.hostname);

  const FooterLink = ({ children }: { children: React.ReactNode }) => (
    <span className="hover:text-white transition-colors cursor-pointer">
      {children}
    </span>
  );

  return (
    <footer className="bg-brand-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white font-heading">
                LocalBite
              </span>
            </div>
            <p className="text-sm text-white/60 mb-4">
              Connecting you with the best local restaurants and cafes in your
              neighbourhood.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="X"
              >
                <SiX className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <FooterLink>About Us</FooterLink>
              </li>
              <li>
                <FooterLink>Careers</FooterLink>
              </li>
              <li>
                <FooterLink>Blog</FooterLink>
              </li>
              <li>
                <FooterLink>Press</FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Help</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <FooterLink>FAQ</FooterLink>
              </li>
              <li>
                <FooterLink>Contact Us</FooterLink>
              </li>
              <li>
                <FooterLink>Track Order</FooterLink>
              </li>
              <li>
                <FooterLink>Refunds</FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Partner</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <FooterLink>List Restaurant</FooterLink>
              </li>
              <li>
                <FooterLink>Delivery Partner</FooterLink>
              </li>
              <li>
                <FooterLink>Advertise</FooterLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>
            © {year}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
              className="underline hover:text-white/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex gap-4">
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>Terms of Service</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
