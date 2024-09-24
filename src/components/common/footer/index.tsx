import Image from "next/image";
import logo_white from "../../../assets/images/Logo 1844x340.png";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

export function Footer() {
  return (
    <footer className="w-full p-4 py-8 flex justify-between px-[15%] max-lg:px-4 max-lg:flex-col items-start gap-20 bg-black text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-2 items-center">
          <Image src={logo_white} alt="pani-tech_logo" className="w-44"></Image>
          <p className="text-sm font-bold">Soluções em Tecnologia</p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            className="p-2 rounded-full bg-white transition-all duration-500 hover:opacity-70"
            href={"https://www.youtube.com/@PaniTech-zf7rb"}
          >
            <Icon
              className="text-red-500"
              icon="mdi:youtube"
              width="20"
              height="20"
            />
          </Link>
          <Link
            className="p-2 rounded-full bg-white transition-all duration-500 hover:opacity-70"
            href={"https://www.instagram.com/panitechoficial/"}
          >
            <Icon
              className="text-pink-500"
              icon="hugeicons:instagram"
              width="20"
              height="20"
            />
          </Link>
          <Link
            className="p-2 rounded-full bg-white transition-all duration-500 hover:opacity-70"
            href={"https://wa.me/5543999877685"}
          >
            <Icon
              className="text-green-500"
              icon="ic:baseline-whatsapp"
              width="20"
              height="20"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-start gap-6 max-lg:flex-col">
        <ul className="flex flex-col gap-1">
          <h2 className="font-bold text-xl">Produtos</h2>
          <li className="text-xs font-medium opacity-85 duration-500 transition-all hover:opacity-100">
            <Link href={"/bom-chat"}>Sistema de multiatendimento</Link>
          </li>
          <li className="text-xs font-medium opacity-85 duration-500 transition-all hover:opacity-100">
            <Link href={"/artificial-intelligence-assistant"}>
              Atendimento com IA
            </Link>
          </li>
          <li className="text-xs font-medium opacity-85 duration-500 transition-all hover:opacity-100">
            <Link href={"/sites"}>Criação de Sites</Link>
          </li>
          <li className="text-xs font-medium opacity-85 duration-500 transition-all hover:opacity-100">
            <Link href={"/crm"}>Painéis de Gestão e CRM</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-1">
          <h2 className="font-bold text-xl">Institucional</h2>
          <li className="text-xs font-medium opacity-85 duration-500 transition-all hover:opacity-100">
            <Link href={"/support"}>Tickets de Suporte</Link>
          </li>
          <li className="text-xs font-medium opacity-85 duration-500 transition-all hover:opacity-100">
            <Link href={"/about-us"}>Quem Somos</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-1">
          <h2 className="font-bold text-xl">Contato</h2>
          <li className="text-xs font-medium opacity-85 duration-500 transition-all hover:opacity-100">
            <Link
              href={"https://wa.me/5543999877685"}
              className="flex items-center gap-2"
            >
              {" "}
              <Icon
                className="text-green-500"
                icon="ic:baseline-whatsapp"
                width="18"
                height="18"
              />
              (43) 99987-7685
            </Link>
          </li>
          <li className="text-xs font-medium opacity-85 duration-500 transition-all hover:opacity-100">
            <Link
              href={"mailto:sac@panitech.com.br"}
              className="flex items-center gap-2"
            >
              {" "}
              <Icon
                className="text-red-400"
                icon="clarity:email-solid"
                width="18"
                height="18"
              />
              sac@panitech.com.br
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
