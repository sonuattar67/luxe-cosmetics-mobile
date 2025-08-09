import { useEffect } from "react";
import Header from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import BottomNav from "@/components/BottomNav";

const Profile = () => {
  const { user, logout } = useAuth();

  useEffect(() => {
    document.title = "GlowCart – Profile";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header title="Profile" />
      <main className="mx-auto max-w-md px-4 pt-6 pb-16 space-y-6">
        <section className="rounded-xl border p-4">
          <h2 className="text-lg font-bold">{user?.name ?? "Guest"}</h2>
          <p className="text-sm text-muted-foreground">{user?.email ?? "Not signed in"}</p>
        </section>

        <section className="space-y-3">
          <div className="rounded-xl border p-4">
            <h3 className="font-semibold">Settings</h3>
            <p className="text-sm text-muted-foreground">Notifications, preferences</p>
          </div>
          <div className="rounded-xl border p-4">
            <h3 className="font-semibold">Order history</h3>
            <p className="text-sm text-muted-foreground">Track your past orders</p>
          </div>
          <div className="rounded-xl border p-4">
            <h3 className="font-semibold">Help & Support</h3>
            <p className="text-sm text-muted-foreground">FAQs and contact us</p>
          </div>
        </section>

        <Button variant="outline" className="w-full" onClick={logout}>Logout</Button>
      </main>
      <BottomNav />
    </div>
  );
};

export default Profile;
