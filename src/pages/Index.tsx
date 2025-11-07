import { useRef } from "react";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import burgerImage from "@/assets/burger-artesanal.jpg";
import friesImage from "@/assets/batata-frita.jpg";
import sodaImage from "@/assets/refrigerante.jpg";
import acaiImage from "@/assets/acai.jpg";
import hotDogImage from "@/assets/hot-dog.jpg";
import xSaladaImage from "@/assets/x-salada.jpg";
import xBaconImage from "@/assets/x-bacon.jpg";
import xEggImage from "@/assets/x-egg.jpg";
import onionRingsImage from "@/assets/onion-rings.jpg";
import nuggetsImage from "@/assets/nuggets.jpg";
import sucoLaranjaImage from "@/assets/suco-laranja.jpg";
import milkshakeImage from "@/assets/milkshake.jpg";
import aguaImage from "@/assets/agua.jpg";
import brownieImage from "@/assets/brownie.jpg";
import sorveteImage from "@/assets/sorvete.jpg";
import churrosImage from "@/assets/churros.jpg";

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
      name: "X-Salada",
      description: "Hambúrguer, queijo, alface, tomate, milho e maionese",
      price: 15.90,
      image: xSaladaImage,
    },
    {
      name: "X-Bacon",
      description: "Hambúrguer, queijo, bacon crocante, alface e molho barbecue",
      price: 19.90,
      image: xBaconImage,
    },
    {
      name: "X-Egg",
      description: "Hambúrguer, queijo, ovo frito, bacon e maionese temperada",
      price: 17.90,
      image: xEggImage,
    },
    {
      name: "Hot Dog Especial",
      description: "Salsicha artesanal, queijo derretido, bacon, milho e batata palha",
      price: 14.90,
      image: hotDogImage,
    },
    {
      name: "Batata Frita Especial",
      description: "Batatas rústicas crocantes com mix de temperos da casa",
      price: 12.50,
      image: friesImage,
    },
    {
      name: "Onion Rings",
      description: "Anéis de cebola empanados e fritos até ficarem dourados",
      price: 13.90,
      image: onionRingsImage,
    },
    {
      name: "Nuggets de Frango",
      description: "10 unidades de nuggets crocantes com molhos variados",
      price: 16.50,
      image: nuggetsImage,
    },
  ];

  const bebidas = [
    {
      name: "Refrigerante Lata",
      description: "Coca-Cola, Guaraná ou Fanta - Gelado",
      price: 5.00,
      image: sodaImage,
    },
    {
      name: "Suco de Laranja Natural",
      description: "Suco natural de laranja fresquinho, 500ml",
      price: 8.50,
      image: sucoLaranjaImage,
    },
    {
      name: "Milkshake",
      description: "Sabores: Morango, Chocolate ou Baunilha - 400ml",
      price: 12.90,
      image: milkshakeImage,
    },
    {
      name: "Água Mineral",
      description: "Água mineral gelada 500ml",
      price: 3.50,
      image: aguaImage,
    },
  ];

  const sobremesas = [
    {
      name: "Açaí no Copo",
      description: "Açaí cremoso com granola e banana",
      price: 8.90,
      image: acaiImage,
    },
    {
      name: "Brownie de Chocolate",
      description: "Brownie caseiro com calda de chocolate quente",
      price: 9.90,
      image: brownieImage,
    },
    {
      name: "Sorvete Casquinha",
      description: "Sabores variados: Chocolate, Baunilha, Morango",
      price: 7.50,
      image: sorveteImage,
    },
    {
      name: "Churros com Doce de Leite",
      description: "Churros quentinhos com açúcar e canela, acompanha doce de leite",
      price: 11.90,
      image: churrosImage,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8">
        <HeroBanner onViewMenu={scrollToMenu} />

        <div ref={menuRef} className="mt-12">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-4xl font-bold text-foreground">Nosso Menu Completo</h2>
            <p className="text-lg text-muted-foreground">Escolha seus favoritos e aproveite o melhor da comida de rua!</p>
          </div>

          <Tabs defaultValue="lanches" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-3 bg-muted p-1">
              <TabsTrigger value="lanches" className="text-base font-semibold">
                🍔 Lanches
              </TabsTrigger>
              <TabsTrigger value="bebidas" className="text-base font-semibold">
                🥤 Bebidas
              </TabsTrigger>
              <TabsTrigger value="sobremesas" className="text-base font-semibold">
                🍰 Sobremesas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="lanches" className="mt-0">
              <div className="mb-4 text-center">
                <p className="text-sm text-muted-foreground">
                  {lanches.length} opções deliciosas para você
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {lanches.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bebidas" className="mt-0">
              <div className="mb-4 text-center">
                <p className="text-sm text-muted-foreground">
                  {bebidas.length} bebidas refrescantes
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {bebidas.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sobremesas" className="mt-0">
              <div className="mb-4 text-center">
                <p className="text-sm text-muted-foreground">
                  {sobremesas.length} sobremesas irresistíveis
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {sobremesas.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Seção de Destaque */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-primary via-accent to-secondary p-8 text-center">
          <h3 className="mb-3 text-3xl font-bold text-white">
            🔥 Promoção do Dia!
          </h3>
          <p className="mb-4 text-lg text-white/90">
            Combo Completo: Hambúrguer Artesanal + Batata + Refrigerante
          </p>
          <p className="text-4xl font-bold text-white">
            R$ 29,90
          </p>
          <p className="mt-2 text-sm text-white/80">
            Economize R$ 7,50!
          </p>
        </div>
      </main>

      <footer className="mt-16 border-t border-border bg-muted/50 py-8">
        <div className="container px-4 text-center">
          <p className="text-xl font-bold text-foreground">🚚 Sabor na Rua - Food Truck</p>
          <p className="mt-2 text-sm text-muted-foreground">Encontre a gente na praça central de segunda a sábado</p>
          <p className="mt-1 text-sm text-muted-foreground">Horário: 18h às 23h</p>
          <div className="mt-4 flex justify-center gap-4 text-sm font-medium text-foreground">
            <span>📱 (11) 99999-9999</span>
            <span>📍 Praça da República</span>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Siga a gente nas redes sociais! @sabornarua
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
