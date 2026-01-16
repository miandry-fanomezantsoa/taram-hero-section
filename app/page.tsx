import Bulle from "@/components/Bulle";
import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark flex justify-center items-center text-white px-4 md:px-10 py-8">
      <div className="flex flex-col items-center gap-10 lg:max-w-2xl">
        <Bulle />
        <p className="text-center text-3xl md:text-5xl font-bold">
          Votre <span className="text-primary">site</span> doit{" "}
          <span className="text-primary">donner envie</span> de{" "}
          <span className="text-primary">rester</span>, pas de{" "}
          <span className="line-through decoration-dark">
            <span className="text-primary">revenir</span> en{" "}
            <span className="text-primary">arrière</span>
          </span>
          .
        </p>
        <p className="text-center text-gray-300 md:text-lg">
          Design moderne, <br className="md:hidden" />
          SEO solide, Suivi complet : <br />
          on construit un site qui retient vos visiteurs et vous apporte des
          résultats.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <div className="relative inline-block">
            <Button className="text-2xl">Prendre RDV</Button>
            <Image
              src="/images/click.png"
              width={100}
              height={100}
              alt="Un petit clique ?"
              className="hidden md:inline-block absolute -left-10 -bottom-7"
            />
          </div>
          <Button variant="secondary">Découvrir nos projets</Button>
        </div>
      </div>
    </div>
  );
}
