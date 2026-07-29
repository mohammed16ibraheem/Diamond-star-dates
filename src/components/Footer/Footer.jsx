import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { brandName } from "@/data/navigation";
import { socialLinks } from "@/data/socialLinks";
import "./Footer.css";

const socialItems = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: socialLinks.linkedin,
    Icon: FaLinkedinIn,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    href: socialLinks.whatsapp,
    Icon: FaWhatsapp,
  },
  {
    key: "youtube",
    label: "YouTube",
    href: socialLinks.youtube,
    Icon: FaYoutube,
  },
];

function isExternalUrl(href) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Image
              src="/images/NiematAltayibat.png"
              alt={`${brandName} logo`}
              width={280}
              height={150}
              sizes="(max-width: 768px) 200px, 260px"
            />
          </Link>
          <p className="footer-tagline">
            Premium Arabian dates — quality you can taste.
          </p>
        </div>

        <div className="footer-details">
          <div className="footer-block">
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <FaMapMarkerAlt aria-hidden="true" />
                <span>Jeddah, Saudi Arabia</span>
              </div>

              <a className="contact-item" href="tel:+966501234567">
                <FaPhoneAlt aria-hidden="true" />
                <span>+966 50 123 4567</span>
              </a>

              <a
                className="contact-item"
                href="mailto:info@neimataltayibat.com"
              >
                <FaEnvelope aria-hidden="true" />
                <span>info@neimataltayibat.com</span>
              </a>
            </div>
          </div>

          <div className="footer-block">
            <h3 className="footer-heading">Follow us</h3>
            <div className="social-links" role="list">
              {socialItems.map(({ key, label, href, Icon }) => (
                <a
                  key={key}
                  role="listitem"
                  href={href}
                  className="social-link"
                  aria-label={label}
                  {...(isExternalUrl(href)
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="social-hint">
              Tap an icon to visit our social pages.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {year} <strong>{brandName}</strong>. All Rights Reserved.
      </div>
    </footer>
  );
}
