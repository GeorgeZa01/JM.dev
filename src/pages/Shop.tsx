import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

type Category = "All" | "Phones" | "Laptops" | "Gaming" | "Accessories";
type Condition = "Second hand" | "New" | "Refurbished";

const products: Array<{
  name: string;
  category: Exclude<Category, "All">;
  condition: Condition;
  price: string;
  description: string;
  image: string;
  accent: string;
}> = [
  {
    name: "iPhone 12 128GB",
    category: "Phones",
    condition: "Refurbished",
    price: "R5,499",
    description: "Unlocked, tested and ready to use with a healthy battery.",
    image: "https://images.unsplash.com/photo-1592286927505-2fd0dbeae0d5?w=900&h=700&fit=crop",
    accent: "from-cyan-500/25",
  },
  {
    name: "Samsung Galaxy S21",
    category: "Phones",
    condition: "Second hand",
    price: "R4,299",
    description: "Clean condition with a bright AMOLED display and fast 5G.",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=900&h=700&fit=crop",
    accent: "from-blue-500/25",
  },
  {
    name: "MacBook Air M1",
    category: "Laptops",
    condition: "Refurbished",
    price: "R9,999",
    description: "8GB RAM, 256GB SSD, professionally checked and reset.",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=900&h=700&fit=crop",
    accent: "from-emerald-500/25",
  },
  {
    name: "PlayStation 4 Slim",
    category: "Gaming",
    condition: "Second hand",
    price: "R3,799",
    description: "500GB console, controller included, fully tested before sale.",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=900&h=700&fit=crop",
    accent: "from-violet-500/25",
  },
  {
    name: "USB-C Fast Charge Kit",
    category: "Accessories",
    condition: "New",
    price: "R349",
    description: "Reliable 25W wall charger and braided USB-C cable bundle.",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=900&h=700&fit=crop",
    accent: "from-amber-500/25",
  },
  {
    name: "Wireless Earbuds",
    category: "Accessories",
    condition: "New",
    price: "R499",
    description: "Pocket-sized everyday audio with a compact charging case.",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=900&h=700&fit=crop",
    accent: "from-rose-500/25",
  },
];

const categories: Category[] = ["All", "Phones", "Laptops", "Gaming", "Accessories"];
const conditions: Array<Condition | "All"> = ["All", "Second hand", "New", "Refurbished"];
const whatsappNumber = "27662908976";

function orderLink(productName: string) {
  const message = encodeURIComponent(
    `Hi JMdev, I would like to order the ${productName}. Is it still available?`,
  );
  return `https://wa.me/${whatsappNumber}?text=${message}`;
}

const conditionStyles: Record<Condition, string> = {
  "Second hand": "bg-amber-400/10 text-amber-300 border-amber-400/20",
  New: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
  Refurbished: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
};

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [activeCondition, setActiveCondition] = useState<Condition | "All">("All");

  const filteredProducts = products.filter(
    (product) =>
      (activeCategory === "All" || product.category === activeCategory) &&
      (activeCondition === "All" || product.condition === activeCondition),
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="overflow-hidden">
        <section className="relative pt-36 pb-20 md:pt-44 md:pb-28">
          <div className="absolute inset-0 gradient-bg opacity-70" />
          <div className="absolute top-28 right-[-10rem] h-72 w-72 rounded-full border border-primary/10 bg-primary/5 blur-3xl" />
          <div className="container relative z-10 mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                <Sparkles className="h-4 w-4" />
                JMdev shop
              </div>
              <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] text-foreground md:text-7xl">
                Good tech, <span className="text-gradient">better value.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Second-hand, new and professionally refurbished devices and accessories,
                checked by someone who knows what is inside them.
              </p>
              <div className="mt-10 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2">
                  <ShieldCheck className="h-4 w-4 text-primary" /> Tested before sale
                </span>
                <span className="flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2">
                  <Wrench className="h-4 w-4 text-primary" /> Honest condition notes
                </span>
                <span className="flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2">
                  <MessageCircle className="h-4 w-4 text-primary" /> Order on WhatsApp
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-border/70 bg-secondary/20 py-6">
          <div className="container mx-auto flex flex-col gap-5 px-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card/40 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <span className="mr-1 flex items-center gap-2 text-sm text-muted-foreground">
                <Smartphone className="h-4 w-4" /> Condition
              </span>
              {conditions.map((condition) => (
                <button
                  key={condition}
                  type="button"
                  onClick={() => setActiveCondition(condition)}
                  className={`whitespace-nowrap rounded-full border px-3 py-2 text-xs font-medium transition-colors ${
                    activeCondition === condition
                      ? "border-foreground/40 bg-foreground text-background"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {condition}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20 md:py-28">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="section-heading mb-3">Available now</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Browse the shelf</h2>
            </div>
            <p className="hidden text-sm text-muted-foreground sm:block">
              {filteredProducts.length} {filteredProducts.length === 1 ? "item" : "items"}
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product, index) => (
                <motion.article
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="glass-card group flex flex-col"
                >
                  <div className={`relative aspect-[1.25] overflow-hidden bg-gradient-to-br ${product.accent} to-secondary`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <span className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-xs font-semibold ${conditionStyles[product.condition]}`}>
                      {product.condition}
                    </span>
                    <span className="absolute bottom-4 left-4 text-xs font-medium uppercase tracking-widest text-white/70">
                      {product.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                      <span className="whitespace-nowrap text-lg font-bold text-primary">{product.price}</span>
                    </div>
                    <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{product.description}</p>
                    <Button
                      asChild
                      className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <a href={orderLink(product.name)} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" /> Order on WhatsApp
                        <ArrowUpRight className="ml-auto h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="glass-card p-12 text-center">
              <p className="text-lg text-foreground">No items match those filters.</p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All");
                  setActiveCondition("All");
                }}
                className="mt-4 text-sm text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        <section className="border-t border-border py-20 md:py-24">
          <div className="container mx-auto grid gap-10 px-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="section-heading mb-3">Can&apos;t see what you need?</p>
              <h2 className="max-w-2xl text-3xl font-bold text-foreground md:text-4xl">
                Tell me what you&apos;re looking for and I&apos;ll source it.
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                Stock changes quickly. Send a WhatsApp message for current availability,
                trade-in questions or a device you want me to find.
              </p>
            </div>
            <Button asChild size="lg" className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi JMdev, I am looking for a device or accessory.")}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> Chat to order
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;