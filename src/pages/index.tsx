import { Main } from "@/components/common/main";
import { CarouselSection } from "@/components/layout/home/CarouselSection";
import { ChatSection } from "@/components/layout/home/ChatSection";
import { HeroSection } from "@/components/layout/home/HeroSection";
import { ImagePaginatorSection } from "@/components/layout/home/ImagePaginatorSection";
import { PlanSelectorLandingPage } from "@/components/layout/home/PlanSelector";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <Main>
      <HeroSection />
      <CarouselSection />
      <ImagePaginatorSection />
      <ChatSection />
      <span className="mt-10 h-1 w-full block invisible"></span>
      <PlanSelectorLandingPage />
      <div className="w-full grid grid-cols-2 max-lg:grid-cols-1 gap-3 max-lg:text-center max-lg:p-6 bg-blue-900 mt-10 text-white">
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col items-start max-lg:items-center justify-center gap-3">
            <h1 className="font-extrabold text-3xl ">Faça seu cadastro</h1>
            <p>
              Não perca tempo! Começe nosso teste grátis e
              <br className="max-lg:hidden" /> desfrute das melhores ferramentas
              do mercado
            </p>
            <Link
              href={"/register"}
              className={`${buttonVariants()} py-5 px-6 text-base font-extrabold !bg-zinc-100 !text-black !cursor-pointer duration-500 transition-transform hover:scale-105 hover:!bg-zinc-200`}
            >
              Realizar um teste grátis
            </Link>
          </div>
        </div>
        <Image
          className="w-5/12 max-lg:hidden"
          src={"/assets/images/11879384_Work.svg"}
          alt="peoples"
          width={100}
          height={100}
        ></Image>
      </div>
    </Main>
  );
}
