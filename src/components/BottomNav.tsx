import { Home, Percent, Heart, UserRound } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const items = [
  { to: "/home", label: "Home", icon: Home },
  { to: "/home", label: "Offers", icon: Percent },
  { to: "/home", label: "Wishlist", icon: Heart },
  { to: "/profile", label: "Profile", icon: UserRound },
];

const BottomNav = () => {
  const location = useLocation();
  return (
    <nav className="fixed inset-x-0 bottom-0 bg-background/90 backdrop-blur border-t">
      <ul className="mx-auto max-w-md grid grid-cols-4 py-2">
        {items.map(({ to, label, icon: Icon }) => {
          const active = location.pathname === to;
          return (
            <li key={label} className="flex items-center justify-center">
              <Link to={to} className="flex flex-col items-center text-xs">
                <Icon className={active ? "text-primary" : "text-muted-foreground"} />
                <span className={active ? "text-primary" : "text-muted-foreground"}>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNav;
