import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductCard, { Product } from "@/components/ProductCard";
import Header from "@/components/Header";
import { Search, SlidersHorizontal } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const fetchProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch("/data/products.json");
    const data = await res.json();
    return (data.products as any[])
      .filter((p) => ["beauty", "fragrances"].includes(p.category))
      .map((p) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        rating: p.rating,
        thumbnail: p.thumbnail,
        description: p.description,
        brand: p.brand,
        category: p.category,
      }));
  } catch {
    const res = await fetch("https://dummyjson.com/products/category/beauty?limit=50");
    const data = await res.json();
    return data.products.map((p: any) => ({
      id: p.id,
      title: p.title,
      price: p.price,
      rating: p.rating,
      thumbnail: p.thumbnail,
      description: p.description,
      brand: p.brand,
      category: p.category,
    }));
  }
};

const Home = () => {
  const { data, isLoading } = useQuery({ queryKey: ["products"], queryFn: fetchProducts });
  const [q, setQ] = useState("");

  useEffect(() => {
    document.title = "GlowCart – Beauty";
  }, []);

  const filtered = useMemo(() => {
    if (!data) return [];
    return data.filter((p) => p.title.toLowerCase().includes(q.toLowerCase()));
  }, [data, q]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-md px-4 pt-4 pb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex-1 relative">
            <input
              aria-label="Search products"
              className="w-full h-11 rounded-lg border bg-card px-10 text-sm"
              placeholder="Search beauty..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          </div>
          <button aria-label="Filters" className="h-11 w-11 rounded-lg border flex items-center justify-center hover:bg-secondary">
            <SlidersHorizontal />
          </button>
        </div>

        <section className="mb-3">
          <div className="flex items-baseline justify-between mb-2">
            <h2 className="text-lg font-semibold">Best Products</h2>
            <span className="text-xs text-muted-foreground">{filtered.length} products</span>
          </div>
        </section>

        <section aria-label="Products" className="grid grid-cols-2 gap-4 pb-16">
          {isLoading && (
            <p className="text-sm text-muted-foreground">Loading products…</p>
          )}
          {!isLoading && filtered.map((p) => <ProductCard key={p.id} product={p} />)}
        </section>
      </main>
      <BottomNav />
    </div>
  );
};

export default Home;
