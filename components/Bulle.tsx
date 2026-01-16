import Image from "next/image";

export default function Bulle() {
  return (
    <h1 className="p-4 md:px-8 bg-white rounded-full uppercase gap-8 font-bold text-black flex flex-row items-center justify-center md:text-xl shadow-bulle">
      <Image
        src="/images/search.png"
        width={50}
        height={50}
        alt="une bulle"
        className="inline-block"
      />{" "}
      <span className="inline-block overflow-hidden md:overflow-auto text-nowrap md:text-wrap text-ellipsis">
        Créer un site web <span className="underline">vraiment</span> unique
      </span>
    </h1>
  );
}
