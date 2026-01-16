import Bulle from "@/components/Bulle";
import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark flex justify-center items-center text-white px-4 py-8">
      <div className="flex flex-col items-center gap-10">
        <Bulle />
        <p className="text-center text-3xl font-bold">
          Votre <span className="text-primary">site</span> doit{" "}
          <span className="text-primary">donner envie</span> de{" "}
          <span className="text-primary">rester</span>, pas de{" "}
          <span className="line-through decoration-dark">
            <span className="text-primary">revenir</span> en{" "}
            <span className="text-primary">arrière</span>
          </span>
          .
        </p>
        <p className="text-center text-gray-300">
          Design moderne, <br />
          SEO solide, Suivi complet : <br />
          on construit un site qui retient vos visiteurs et vous apporte des
          résultats.
        </p>

        <div className="flex flex-col gap-4">
          <Button>Prendre RDV</Button>
          <Button variant="secondary">Découvrir nos projets</Button>
        </div>
      </div>
    </div>
  );
}
