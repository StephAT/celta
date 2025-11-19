import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center">
                <span className="text-white font-bold">CT</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground">Celta Trust</h3>
                <p className="text-xs text-muted-foreground">Foundation</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering African scholars through education, leadership, and opportunity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/awards" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Awards
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Mail size={16} className="mt-1 flex-shrink-0 text-primary" />
                <div>
                  <a href="mailto:celtatrust.offices@gmail.com" className="hover:text-primary transition-colors">
                    celtatrust.offices@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Phone size={16} className="mt-1 flex-shrink-0 text-primary" />
                <div>
                  <div>West Africa: +233 243 601 178</div>
                  <div>East Africa: +254 722 417 961</div>
                  <div>USA: +1 917 500 3485</div>
                </div>
              </li>
            </ul>
          </div>

          {/* CELTA Acronym */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">CELTA</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                <span className="font-semibold text-primary">C</span>areer
              </li>
              <li className="text-muted-foreground">
                <span className="font-semibold text-primary">E</span>ducation
              </li>
              <li className="text-muted-foreground">
                <span className="font-semibold text-primary">L</span>eadership
              </li>
              <li className="text-muted-foreground">
                <span className="font-semibold text-primary">T</span>raining
              </li>
              <li className="text-muted-foreground">
                <span className="font-semibold text-primary">A</span>fricans
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Celta Trust Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
