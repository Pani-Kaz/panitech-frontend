import { Main } from "@/components/common/main";
import { CarouselSection } from "@/components/layout/home/CarouselSection";
import { ChatSection } from "@/components/layout/home/ChatSection";
import { HeroSection } from "@/components/layout/home/HeroSection";
import { ImagePaginatorSection } from "@/components/layout/home/ImagePaginatorSection";
import { PlanSelectorLandingPage } from "@/components/layout/home/PlanSelector";

export default function Page() {
  return (
    <Main>
      <HeroSection />
      <CarouselSection />
      <ImagePaginatorSection />
      <ChatSection />
      <span className="mt-10 h-1 w-full block invisible"></span>
      <PlanSelectorLandingPage/>
    </Main>
  );
}
