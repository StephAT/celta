import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import logo from "@/assets/celta-trust-logo-new.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Awards", path: "/awards" },
    { name: "Governance", path: "/governance" },
    { name: "Events", path: "/events" },
    { name: "FAQ", path: "/faq" },
    { name: "Policies", path: "/policies" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Celta Trust Foundation Logo" className="w-28 h-28 object-contain" />
            <div>
              <h1 className="text-xl font-bold text-primary-foreground">Celta Trust</h1>
              <p className="text-xs text-primary-foreground/70">Foundation</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    to="/"
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive("/")
                        ? "text-accent bg-primary-foreground/10"
                        : "text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>

                {/* About Us Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-primary-foreground hover:text-accent hover:bg-primary-foreground/10 data-[state=open]:bg-primary-foreground/10">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-card">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/about"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent/10 focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Our Story</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Learn about our mission and vision
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/governance"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent/10 focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Governance</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Meet our board and leadership team
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Awards Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-primary-foreground hover:text-accent hover:bg-primary-foreground/10 data-[state=open]:bg-primary-foreground/10">
                    Awards
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-card">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/awards"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent/10 focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Awards Overview</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              View all available awards
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/apply"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent/10 focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Apply Now</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Submit your application
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/events"
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive("/events")
                        ? "text-accent bg-primary-foreground/10"
                        : "text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
                    )}
                  >
                    Events
                  </Link>
                </NavigationMenuItem>

                {/* Resources Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-primary-foreground hover:text-accent hover:bg-primary-foreground/10 data-[state=open]:bg-primary-foreground/10">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-card">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/faq"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent/10 focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">FAQ</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Frequently asked questions
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/policies"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent/10 focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Policies</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Our policies and guidelines
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/contact"
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive("/contact")
                        ? "text-accent bg-primary-foreground/10"
                        : "text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
                    )}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/donate">
              <Button className="ml-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                Donate
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-md"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 bg-primary">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-md text-sm font-medium transition-colors",
                  isActive(item.path)
                    ? "text-accent bg-primary-foreground/10"
                    : "text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/donate" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mx-4" style={{ width: 'calc(100% - 2rem)' }}>
                Donate
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
