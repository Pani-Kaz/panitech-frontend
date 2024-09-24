import { PlanSelector } from "../Plans/PlanSelector";

export function PlanSelectorLandingPage() {
  return (
    <section className="flex flex-col gap-8 px-[15%] max-lg:px-2 w-full pb-10 text-black">
      <div className="flex flex-col gap-1">
        <h2 className="font-extrabold text-2xl uppercase">
          visualize nossos
          <br /> planos:
        </h2>
        <p className="text-sm font-bold opacity-75">Veja valores, funções, recursos e personalize<br/> os nossos planos como quiser!</p>
      </div>
      <PlanSelector/>
    </section>
  );
}
