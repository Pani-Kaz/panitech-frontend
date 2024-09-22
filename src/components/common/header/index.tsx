import Image from "next/image";
import { Icon } from "@iconify/react";
import Logo_mobile from "../../../assets/images/pb500x500.png";
import Logo from "../../../assets/images/full.png";
import { useState, useEffect } from "react";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

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
    <header className="w-full h-16 flex items-center justify-center gap-32 max-lg:gap-2 px-2 bg-zinc-50 border-b border-solid border-zinc-200 max-lg:justify-between text-black">
      <Link href={"/"}>
        <Image src={Logo} className="h-9 max-lg:hidden" alt="logo"></Image>
        <Image
          src={Logo_mobile}
          className="h-9 w-9 hidden max-lg:block"
          alt="logo"
        ></Image>
      </Link>
      <ul className="flex items-center gap-5 max-lg:hidden">
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
              isOpen ? "fade-in" : "hidden"
            }`}
          ></div>
        </li>
        <li>
          <Link
            href="#plans"
            className="text-sm font-bold flex items-center gap-1 text-zinc-600 hover:cursor-pointer duration-500 transition-all hover:text-black"
          >
            Planos
          </Link>
        </li>
        <li>
          <Link
            href="/support"
            className="text-sm font-bold flex items-center gap-1 text-zinc-600 hover:cursor-pointer duration-500 transition-all hover:text-black"
          >
            Central de Ajuda
          </Link>
        </li>
      </ul>
      <ul
        className={`w-full left-0 h-[calc(100vh-63.99px)] absolute top-16 bg-zinc-50 hidden ${
          mobileMenu &&
          "max-lg:flex items-center justify-center gap-6 flex-col"
        }`}
      >
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-none flex items-center justify-center flex-col py-0">
            <AccordionTrigger className="py-0 text-base font-bold">Produtos</AccordionTrigger>
            <AccordionContent>

            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <li>
          <Link
            href="#plans"
            className="text-base font-bold flex items-center gap-1 hover:cursor-pointer duration-500 transition-all hover:text-black"
          >
            Planos
          </Link>
        </li>
        <li>
          <Link
            href="/support"
            className="text-base font-bold flex items-center gap-1 hover:cursor-pointer duration-500 transition-all hover:text-black"
          >
            Central de Ajuda
          </Link>
        </li>
        <Link
          className={`${buttonVariants()} py-5 px-6 text-base font-extrabold !bg-blue-600 !cursor-pointer duration-500 transition-transform hover:scale-105 hover:!bg-blue-700 hover:text-white`}
          href={"/login"}
        >
          Login
        </Link>
      </ul>
      <ul className="flex items-center gap-2">
        <Link
          className="duration-300 transition-all font-bold text-sm text-sky-600 hover:bg-zinc-200 hover:text-black py-2 px-4 rounded-[6px] max-lg:hidden"
          href={"/login"}
        >
          Login
        </Link>
        <Link
          className="duration-300 transition-all font-bold text-sm bg-sky-500 hover:bg-sky-700 text-white py-2 px-2 rounded-[6px]"
          href={"/login"}
        >
          Testar Gratuitamente
        </Link>
        <Icon
          className={`hidden max-lg:${mobileMenu ? "hidden" : "block"}`}
          onClick={() => setMobileMenu(true)}
          icon="mingcute:menu-fill"
          width="24"
          height="24"
        />
        <Icon
          className={`hidden max-lg:${mobileMenu ? "block" : "hidden"}`}
          onClick={() => setMobileMenu(false)}
          icon="ion:close"
          width="24"
          height="24"
        />
      </ul>
    </header>
  );
}
