import { useRef } from "react";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import burgerImage from "@/assets/burger-artesanal.jpg";
import friesImage from "@/assets/batata-frita.jpg";
import sodaImage from "@/assets/refrigerante.jpg";
import acaiImage from "@/assets/acai.jpg";

const Index = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const lanches = [
    {
      name: "Hambúrguer Artesanal",
      description: "Pão brioche, blend 180g, queijo cheddar, alface, tomate e molho especial",
      price: 18.90,
      image: burgerImage,
    },
    {
      name: "Batata Frita Especial",
      description: "Batatas rústicas crocantes com mix de temperos da casa",
      price: 12.50,
      image: friesImage,
    },
  ];

  const bebidas = [
    {
      name: "Refrigerante Lata",
      description: "Coca-Cola, Guaraná ou Fanta - Gelado",
      price: 5.00,
      image: sodaImage,
    },
  ];

  const sobremesas = [
    {
      name: "Açaí no Copo",
      description: "Açaí cremoso com granola e banana",
      price: 8.90,
      image: acaiImage,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8">
        <HeroBanner onViewMenu={scrollToMenu} />

        <div ref={menuRef} className="mt-12">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-foreground">Nosso Menu</h2>
            <p className="text-muted-foreground">Escolha seus favoritos e aproveite!</p>
          </div>

          <Tabs defaultValue="lanches" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-3 bg-muted">
              <TabsTrigger value="lanches" className="text-base font-semibold">
                Lanches
              </TabsTrigger>
              <TabsTrigger value="bebidas" className="text-base font-semibold">
                Bebidas
              </TabsTrigger>
              <TabsTrigger value="sobremesas" className="text-base font-semibold">
                Sobremesas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="lanches" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {lanches.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bebidas" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {bebidas.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sobremesas" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {sobremesas.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <footer className="mt-16 border-t border-border bg-muted/50 py-8">
        <div className="container px-4 text-center text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">Sabor na Rua - Food Truck</p>
          <p className="mt-1">Siga a gente nas redes sociais!</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
