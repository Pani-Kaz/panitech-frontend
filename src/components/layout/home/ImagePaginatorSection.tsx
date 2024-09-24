import { ImagePaginator } from "@/components/common/ImagePaginator";
import { Icon } from "@iconify/react/dist/iconify.js";

export function ImagePaginatorSection() {
  return (
    <section className="w-full flex flex-col pb-10 items-center gap-4 text-black">
    <div className="flex items-center flex-col gap-2">
      <Icon
        className="text-blue-500"
        icon="carbon:ibm-vsi-on-vpc-for-regulated-industries"
        width="32"
        height="32"
      />
      <h2 className="font-bold text-lg tracking-wide text-center">
        Sua empresa precisa de novidades
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
  );
}
