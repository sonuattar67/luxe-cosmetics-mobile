import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "GlowCart – Login";
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    toast({ title: "Welcome back!", description: "You are now signed in." });
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-md px-4 pt-8">
        <h1 className="text-2xl font-bold mb-6">Sign in</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <Button type="submit" variant="hero" className="w-full">Continue</Button>
        </form>
        <div className="my-4 text-center text-xs text-muted-foreground">Or continue with</div>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="w-full" type="button" aria-label="Continue with Apple">Apple</Button>
          <Button variant="outline" className="w-full" type="button" aria-label="Continue with Google">Google</Button>
        </div>
        <p className="text-sm text-muted-foreground mt-4">Don't have an account? <Link to="/register" className="story-link">Create one</Link></p>
      </main>
    </div>
  );
};

export default Login;
