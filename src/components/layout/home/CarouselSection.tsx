import Link from "next/link";
import { Icon } from "@iconify/react";
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

export function CarouselSection() {
  return (
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
                Integre inúmeras plataformas em uma só ferramenta. Tenha a opção
                de dividir aréas entre seus funcionários
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
                Tenha um atendente 100% treinado para sua empresa. Aumente suas
                vendas com um atendimento eficaz
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
                Adquira o seu próprio site 100% personalizado, feito sob medida
                para atender todas as necessidades da sua empresa.
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
  );
}
