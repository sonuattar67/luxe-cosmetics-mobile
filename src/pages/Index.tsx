import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import hero from "@/assets/glow-hero.jpg";
import logo from "@/assets/glow-logo.png";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "GlowCart – Your Beauty, Delivered";
  }, []);

  return (
    <main className="min-h-screen relative flex items-end justify-center">
      <img src={hero} alt="GlowCart premium beauty hero" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <section className="relative z-10 w-full max-w-md px-6 pb-12 text-center animate-enter">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="GlowCart logo" className="h-10 w-auto" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Your Beauty, Delivered</h1>
        <p className="text-muted-foreground mb-6">Discover premium cosmetics curated for you.</p>
        <Button variant="hero" className="w-full" onClick={() => navigate("/login")}>Get Started</Button>
      </section>
    </main>
  );
};

export default Index;
