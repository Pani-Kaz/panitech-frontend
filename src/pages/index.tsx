import { Main } from "@/components/common/main";
import { buttonVariants } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
export default function Page() {
  return (
    <Main>
      <section className="w-full min-h-[calc(100vh-63.99px)] flex px-20 max-lg:px-2 justify-center gap-4 flex-col items-center max-lg:items-start text-black">
        <h1 className="text-5xl text-center max-lg:text-start font-extrabold text-zinc-800">
          Atendimento eficiente, ágil e integrado
          <br className="max-lg:hidden" /> para o  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text animate-gradient font-extrabold">
            sucesso da sua empresa.
          </span>
        </h1>
        <p className="max-w-[70%] max-lg:max-w-[95%] text-center max-lg:text-start text-base font-bold text-zinc-700">Conecte todos os seus clientes em um só lugar, com as funções da Pani Tech você terá acesso ao melhor sistema de atendimento do mercado, construir relacionamentos nunca foi tão fácil.</p>
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
        <Link href={'/register'} className={`${buttonVariants()} py-5 px-6 text-base font-extrabold !bg-blue-600 !cursor-pointer duration-500 transition-transform hover:scale-105 hover:!bg-blue-700 hover:text-white`}>Realizar um teste grátis</Link>
        <Link href={'#plans'} className={`text-base font-bold text-blue-500 flex items-center gap-2 duration-500 transition-all hover:text-blue-700`}>Ver valores <Icon icon="gravity-ui:arrow-right" width="18" height="18" /></Link>
        </div>
      </section>
    </Main>
  );
}
