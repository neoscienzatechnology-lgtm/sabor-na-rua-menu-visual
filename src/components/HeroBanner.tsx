import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBurger from "@/assets/hero-burger.jpg";

interface HeroBannerProps {
  onViewMenu: () => void;
}

const HeroBanner = ({ onViewMenu }: HeroBannerProps) => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-3xl">
      <img
        src={heroBurger}
        alt="Hambúrguer artesanal delicioso"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8 text-center">
        <h2 className="text-4xl font-bold text-white drop-shadow-lg md:text-5xl">
          Sabores Únicos da Rua
        </h2>
        <p className="max-w-md text-lg text-white/90 drop-shadow-md">
          O melhor hambúrguer artesanal da cidade, feito com amor e ingredientes frescos
        </p>
        <Button
          size="lg"
          onClick={onViewMenu}
          className="gap-2 bg-primary text-lg font-bold text-primary-foreground shadow-xl transition-all hover:scale-105 hover:bg-primary/90"
        >
          Ver Menu
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default HeroBanner;
