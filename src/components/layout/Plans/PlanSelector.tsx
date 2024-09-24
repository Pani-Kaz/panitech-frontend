import { PlanCard } from "./PlanCard";

export function PlanSelector() {
  return (
    <div className="w-full flex items-center max-lg:flex-col gap-6 text-black">
    <PlanCard attendants={2} apis={1} custom={false}/>
    <PlanCard attendants={4} apis={2} custom={true}/>
    </div>
  );
}
