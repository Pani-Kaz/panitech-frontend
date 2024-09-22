import Image from "next/image";
import { Icon } from "@iconify/react";
import Logo from "../../../assets/images/pb500x500.png";
import { useState, useEffect } from "react";
import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleScroll = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full h-16 flex items-center justify-center gap-32 px-2 bg-zinc-50 border-b border-solid border-zinc-200">
      <Link href={"/"}>
        <Image src={Logo} className="h-9" alt="logo"></Image>
      </Link>
      <ul className="flex items-center gap-5">
        <li className="group">
          <p
            className={`text-sm font-bold flex items-center gap-2 text-zinc-600 hover:cursor-pointer duration-500 transition-all hover:text-black ${
              isOpen && "text-black"
            }`}
            onClick={toggleMenu}
          >
            Produtos{" "}
            <Icon
              icon="oui:arrow-up"
              className={`${
                isOpen ? "rotate-0" : "rotate-180"
              } duration-500 transition-all`}
              width="16"
              height="16"
            />
          </p>
          <div
            className={`absolute top-[62px] left-0 h-[70vh] w-full rounded-b-[42px] bg-zinc-50 shadow-xl ${
              isOpen ? "fade-in" : "fade-out"
            }`}
          ></div>
        </li>
        <li className="group">
          <Link
            href="#plans"
            className="text-sm font-bold flex items-center gap-1 text-zinc-600 hover:cursor-pointer duration-500 transition-all hover:text-black"
          >
            Planos
          </Link>
        </li>
        <li className="group">
          <Link
            href="/support"
            className="text-sm font-bold flex items-center gap-1 text-zinc-600 hover:cursor-pointer duration-500 transition-all hover:text-black"
          >
            Central de Ajuda
          </Link>
        </li>
      </ul>
      <ul className="flex items-center gap-2">
      <Link className="duration-300 transition-all font-bold text-sm text-sky-600 hover:bg-zinc-200 hover:text-black py-2 px-4 rounded-[6px]" href={'/login'}>Login</Link>
      <Link className="duration-300 transition-all font-bold text-sm bg-sky-500 hover:bg-sky-700 text-white py-2 px-2 rounded-[6px]" href={'/login'}>Testar Gratuitamente</Link>
      </ul>
    </header>
  );
}
