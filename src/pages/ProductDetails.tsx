import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { RatingStars } from "@/components/RatingStars";
import { useToast } from "@/hooks/use-toast";

const fetchProduct = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
};

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({ queryKey: ["product", id], queryFn: () => fetchProduct(id as string), enabled: !!id });
  const { toast } = useToast();

  useEffect(() => {
    document.title = data?.title ? `${data.title} – GlowCart` : "GlowCart – Product";
  }, [data?.title]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-md px-4 pb-8">
        {isLoading && <p className="text-sm text-muted-foreground pt-8">Loading…</p>}
        {data && (
          <article className="pt-4 animate-fade-in">
            <div className="rounded-xl overflow-hidden border">
              <img src={data.images?.[0] ?? data.thumbnail} alt={`${data.title} large`} className="w-full h-auto object-cover" />
            </div>
            <div className="py-4 space-y-3">
              <h1 className="text-xl font-bold">{data.title}</h1>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold">${data.price}</span>
                <RatingStars rating={data.rating} />
              </div>
              <p className="text-sm text-muted-foreground">{data.description}</p>
            </div>

            <section className="space-y-2">
              <h2 className="font-semibold">Highlights</h2>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                <li>Brand: {data.brand}</li>
                <li>Category: {data.category}</li>
                <li>In stock: {data.stock}</li>
              </ul>
            </section>

            <section className="space-y-2 pt-4">
              <h2 className="font-semibold">Reviews</h2>
              <div className="rounded-lg border p-3 text-sm text-muted-foreground">
                "Absolutely love the texture and finish. Feels premium!" – Alex
              </div>
            </section>

            <div className="h-16" />
          </article>
        )}
      </main>
      <div className="fixed inset-x-0 bottom-0 border-t bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-md p-4">
          <Button variant="hero" className="w-full" onClick={() => toast({ title: "Added to bag", description: "We saved this item for checkout." })}>
            Add to Bag
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
