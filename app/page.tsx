import Bulle from "@/components/Bulle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark flex justify-center items-center text-white px-4 py-8">
      <div className="flex flex-col items-center gap-8">
        <Bulle />
        <p>
          Votre site doit donner envie de rester, pas de revenir en arrière.
        </p>
        <p>
          Design moderne, SEO solide, Suivi complet : on construit un site qui
          retient vos visiteurs et vous apporte des résultats.
        </p>

        <div>
          <button>Prendre RDV</button>
          <button>Découvrir nos projets</button>
        </div>
      </div>
    </div>
  );
}
