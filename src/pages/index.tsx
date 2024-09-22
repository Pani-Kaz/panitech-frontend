import { Main } from "@/components/common/main";
import { buttonVariants } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { Standard } from "@typebot.io/nextjs";
import dynamic from "next/dynamic";
const Carousel = dynamic(
  () => import("@/components/ui/carousel").then((mod) => mod.Carousel),
  { ssr: false }
);
const CarouselContent = dynamic(
  () => import("@/components/ui/carousel").then((mod) => mod.CarouselContent),
  { ssr: false }
);
const CarouselItem = dynamic(
  () => import("@/components/ui/carousel").then((mod) => mod.CarouselItem),
  { ssr: false }
);
const CarouselNext = dynamic(
  () => import("@/components/ui/carousel").then((mod) => mod.CarouselNext),
  { ssr: false }
);
const CarouselPrevious = dynamic(
  () => import("@/components/ui/carousel").then((mod) => mod.CarouselPrevious),
  { ssr: false }
);
import { ImagePaginator } from "@/components/common/ImagePaginator";

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
      <section className="flex flex-col gap-8 px-[15%] max-lg:px-2 w-full pb-10 text-black">
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
            <CarouselItem
              key={1}
              className="md:basis-1/2 lg:basis-1/3 mx-1 max-lg:mx-0 min-h-14 rounded-xl border-zinc-200 border border-solid p-0 duration-500 transition-all hover:border-blue-300"
            >
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
            <CarouselItem
              key={2}
              className="md:basis-1/2 lg:basis-1/3 mx-1 max-lg:mx-0 min-h-14 rounded-xl border-zinc-200 border border-solid p-0 duration-500 transition-all hover:border-blue-300"
            >
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
                  Tenha um atendente 100% treinado para sua empresa. Aumente
                  suas vendas com um atendimento eficaz
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
            <CarouselItem
              key={3}
              className="md:basis-1/2 lg:basis-1/3 mx-1 max-lg:mx-0 min-h-14 rounded-xl border-zinc-200 border border-solid p-0 duration-500 transition-all hover:border-blue-300"
            >
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
                  Adquira o seu próprio site 100% personalizado, feito sob
                  medida para atender todas as necessidades da sua empresa.
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
            <CarouselItem
              key={4}
              className="md:basis-1/2 lg:basis-1/3 mx-1 max-lg:mx-0 min-h-14 rounded-xl border-zinc-200 border border-solid p-0 duration-500 transition-all hover:border-blue-300"
            >
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
                  Tenha um gerenciamento de relacionamento com o cliente 100%
                  integrado com as demais funções
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
      <section className="w-full flex flex-col pb-10 items-center gap-4 text-black">
        <div className="flex items-center flex-col gap-2">
          <Icon
            className="text-blue-500"
            icon="carbon:ibm-vsi-on-vpc-for-regulated-industries"
            width="32"
            height="32"
          />
          <h2 className="font-bold text-lg tracking-wide text-center">
            Sua empresa precisa de novas funções
          </h2>
        </div>
        <p className="text-center">
          Veja nossas principais ferramentas atualmente ativas no mercado
        </p>
        <div className="w-[40%] max-lg:w-[95%]">
          <ImagePaginator
            images={["/assets/images/dashboard.svg", "/assets/images/crm.jpg"]}
          />
        </div>
      </section>
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
    </Main>
  );
}
