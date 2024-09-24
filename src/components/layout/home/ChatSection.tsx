import Link from "next/link";
import { Icon } from "@iconify/react";
import { buttonVariants } from "@/components/ui/button";
import { Standard } from "@typebot.io/nextjs";

export function ChatSection() {
  return (
    <section className="w-full py-10 grid grid-cols-2 max-lg:grid-cols-1 gap-2 text-black">
    <div className="flex flex-col gap-4 px-[10%] max-lg:px-2 py-4 order-2 max-lg:order-1">
      <div className="flex items-center gap-2 text-blue-800">
        <Icon
          className="bg-blue-300/50 outline outline-4 outline-blue-300/50 rounded-[6px]"
          icon="fluent:chat-24-regular"
          width="24"
          height="24"
        />
        <p className="text-xl font-extrabold">Bate papo em tempo real</p>
      </div>
      <h2 className="font-extrabold text-4xl">
        Utilize de funções para melhorar o atendimento ao cliente
      </h2>
      <p className="font-bold opacity-75 text-sm">
        Faça integração com inúmeras plataformas, utilize automações
        prontas, chatbots e muito mais.
      </p>
      <div>
        <Link
          href={"/register"}
          className={`${buttonVariants()} py-5 px-6 text-base font-extrabold !bg-blue-600 !cursor-pointer duration-500 transition-transform hover:scale-105 hover:!bg-blue-700 hover:text-white`}
        >
          Realizar teste grátis
        </Link>
      </div>
      <p className="pt-8 font-bold uppercase text-xs opacity-75">Integre com:</p>
      <div className="w-full flex items-center justify-between gap-1">
        <span className="w-[15%] h-[1px] bg-black opacity-10"/>
        <Icon  className="text-green-500" icon="ic:baseline-whatsapp" width="24" height="24" />
        <Icon className="text-pink-500" icon="mdi:instagram" width="24" height="24" />
        <Icon className="text-blue-500" icon="ic:baseline-facebook" width="24" height="24" />
        <Icon className="text-red-500" icon="ic:baseline-email" width="24" height="24" />
        <Icon icon="logos:openai" width="46" height="24" />
        <span className="w-[15%] h-[1px] bg-black opacity-10"/>
      </div>
    </div>
    <div className="w-full bg-zinc-100 rounded-r-2xl min-h-[60vh] outline-[15px] outline outline-blue-400/10 border-r border-t border-b border-solid border-blue-200 overflow-hidden bg-[url('/assets/images/background.png')] max-lg:border-none max-lg:outline-none max-lg:shadow-none max-lg:rounded-none order-1 max-lg:order-2">
      <Standard
        typebot="website-panitech"
        apiHost="https://typebotapi.panitech.com.br"
        style={{ width: "100%", height: "600px" }}
      />
    </div>
  </section>
  );
}
