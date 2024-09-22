import { Main } from "@/components/common/main";
import { buttonVariants } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Page() {
  return (
    <Main>
      <section className="w-full min-h-[calc(100vh-63.99px)] flex px-20 max-lg:px-2 justify-center gap-4 flex-col items-center max-lg:items-start text-black">
        <h1 className="text-5xl text-center max-lg:text-start font-extrabold text-zinc-800">
          Atendimento eficiente, ágil e integrado
          <br className="max-lg:hidden" /> para o{" "}
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text animate-gradient font-extrabold">
            sucesso da sua empresa.
          </span>
        </h1>
        <p className="max-w-[70%] max-lg:max-w-[95%] text-center max-lg:text-start text-base font-bold text-zinc-700">
          Conecte todos os seus clientes em um só lugar, com as funções da Pani
          Tech você terá acesso ao melhor sistema de atendimento do mercado,
          construir relacionamentos nunca foi tão fácil.
        </p>
        <style jsx>
          {`
            @keyframes gradient {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
            .animate-gradient {
              background-size: 200% 200%;
              animation: gradient 5s ease infinite;
            }
          `}
        </style>
        <div className="flex items-center gap-4">
          <Link
            href={"/register"}
            className={`${buttonVariants()} py-5 px-6 text-base font-extrabold !bg-blue-600 !cursor-pointer duration-500 transition-transform hover:scale-105 hover:!bg-blue-700 hover:text-white`}
          >
            Realizar um teste grátis
          </Link>
          <Link
            href={"#plans"}
            className={`text-base font-bold text-blue-500 flex items-center gap-2 duration-500 transition-all hover:text-blue-700`}
          >
            Ver valores{" "}
            <Icon icon="gravity-ui:arrow-right" width="18" height="18" />
          </Link>
        </div>
      </section>
      <section className="flex flex-col gap-8 px-[15%] max-lg:px-2 w-full pb-10">
        <h2 className="font-extrabold text-2xl uppercase">
          Com poucos cliques <br />
          você libera:
        </h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-[95%] max-lg:w-[80%]"
        >
          <CarouselContent className="max-lg:gap-2 px-6">
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 mx-1 max-lg:mx-0 min-h-14 rounded-xl border-zinc-200 border border-solid p-0 duration-500 transition-all hover:border-blue-300">
              <Link
                href={"/bom-chat"}
                className="flex p-5 w-full h-full flex-col justify-between gap-3 group"
              >
                <Icon
                  className="bg-blue-600/20 p-2 rounded-full"
                  icon="tabler:message"
                  width="36"
                  height="36"
                />
                <h1 className="duration-300 transition-all font-bold text-base group-hover:text-blue-700">
                  Sistema de Atendimento
                </h1>
                <p className="text-xs font-medium">
                  Integre inúmeras plataformas em uma só ferramenta. Tenha a
                  opção de dividir aréas entre seus funcionários
                </p>
                <Link
                  href={"/bomchat"}
                  className={`text-xs font-bold text-blue-500 flex items-center gap-2 duration-500 transition-all hover:text-blue-700`}
                >
                  Ver valores{" "}
                  <Icon icon="gravity-ui:arrow-right" width="18" height="18" />
                </Link>
              </Link>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 mx-1 max-lg:mx-0 min-h-14 rounded-xl border-zinc-200 border border-solid p-0 duration-500 transition-all hover:border-blue-300">
              <Link
                href={"/artificial-intelligence-assistant"}
                className="flex p-5 w-full h-full flex-col justify-between gap-3 group"
              >
                <Icon
                  className="bg-blue-600/20 p-2 rounded-full"
                  icon="mingcute:ai-fill"
                  width="36"
                  height="36"
                />
                <h1 className="duration-300 transition-all font-bold text-base group-hover:text-blue-700">
                  Atendimento com inteligencia artificial
                </h1>
                <p className="text-xs font-medium">
                  Tenha um atendente 100% treinado para sua empresa. Aumente suas vendas com um atendimento eficaz
                </p>
                <Link
                  href={"/bomchat"}
                  className={`text-xs font-bold text-blue-500 flex items-center gap-2 duration-500 transition-all hover:text-blue-700`}
                >
                  Ver valores{" "}
                  <Icon icon="gravity-ui:arrow-right" width="18" height="18" />
                </Link>
              </Link>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 mx-1 max-lg:mx-0 min-h-14 rounded-xl border-zinc-200 border border-solid p-0 duration-500 transition-all hover:border-blue-300">
              <Link
                href={"/sites"}
                className="flex p-5 w-full h-full flex-col justify-between gap-3 group"
              >
                <Icon
                  className="bg-blue-600/20 p-2 rounded-full"
                  icon="solar:window-frame-broken"
                  width="36"
                  height="36"
                />
                <h1 className="duration-300 transition-all font-bold text-base group-hover:text-blue-700">
                Seu site personalizado
                </h1>
                <p className="text-xs font-medium">
                Adquira o seu próprio site 100% personalizado, feito sob medida para atender todas as necessidades da sua empresa.
                </p>
                <Link
                  href={"/bomchat"}
                  className={`text-xs font-bold text-blue-500 flex items-center gap-2 duration-500 transition-all hover:text-blue-700`}
                >
                  Ver valores{" "}
                  <Icon icon="gravity-ui:arrow-right" width="18" height="18" />
                </Link>
              </Link>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 mx-1 max-lg:mx-0 min-h-14 rounded-xl border-zinc-200 border border-solid p-0 duration-500 transition-all hover:border-blue-300">
              <Link
                href={"/crm"}
                className="flex p-5 w-full h-full flex-col justify-between gap-3 group"
              >
                <Icon
                  className="bg-blue-600/20 p-2 rounded-full"
                  icon="nimbus:money"
                  width="36"
                  height="36"
                />
                <h1 className="duration-300 transition-all font-bold text-base group-hover:text-blue-700">
                Painéis de Gestão e CRM
                </h1>
                <p className="text-xs font-medium">
                Tenha um gerenciamento de relacionamento com o cliente 100% integrado com as demais funções
                </p>
                <Link
                  href={"/bomchat"}
                  className={`text-xs font-bold text-blue-500 flex items-center gap-2 duration-500 transition-all hover:text-blue-700`}
                >
                  Ver valores{" "}
                  <Icon icon="gravity-ui:arrow-right" width="18" height="18" />
                </Link>
              </Link>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </Main>
  );
}
