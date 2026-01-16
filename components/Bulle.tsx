import Image from "next/image";

export default function Bulle() {
  return (
    <h1 className="p-4 bg-white rounded-full uppercase gap-8 font-bold text-black flex flex-row items-center justify-center">
      <Image
        src="/images/search.png"
        width={50}
        height={50}
        alt="une bulle"
        className="inline-block"
      />{" "}
      <span className="inline-block">Créer un site web vraiment unique</span>
    </h1>
  );
}
