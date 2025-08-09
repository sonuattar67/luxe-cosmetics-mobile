import { ArrowLeft, UserRound } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/glow-logo.png";

interface HeaderProps {
  title?: string;
  className?: string;
}

const Header = ({ title, className }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const showBack = location.pathname !== "/home" && location.pathname !== "/";

  return (
    <header className={cn("sticky top-0 z-20 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b", className)}>
      <div className="mx-auto max-w-md px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {showBack ? (
            <button aria-label="Go back" onClick={() => navigate(-1)} className="p-2 rounded-md hover:bg-secondary">
              <ArrowLeft className="text-foreground" />
            </button>
          ) : (
            <Link to="/home" className="flex items-center gap-2">
              <img src={logo} alt="GlowCart logo" className="h-6 w-auto" />
              <span className="sr-only">GlowCart</span>
            </Link>
          )}
        </div>
        {title ? <h1 className="text-sm font-semibold">{title}</h1> : <div />}
        <Link to="/profile" className="p-2 rounded-md hover:bg-secondary" aria-label="Profile">
          <UserRound className="text-foreground" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
