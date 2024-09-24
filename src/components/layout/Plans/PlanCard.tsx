import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

export function PlanCard({
  attendants,
  apis,
  custom,
}: {
  attendants: number;
  apis: number;
  custom: boolean;
}) {
  const [attendantsVariable, setAttendants] = useState(attendants.toString()); // Armazenando como string
  const [apisVariable, setApis] = useState(apis.toString());
  const [value, setValue] = useState(99.99);
  const [anual, setAnual] = useState(950.4);

  useEffect(() => {
    const attendantsNumber =
      attendantsVariable === "" ? 0 : Number(attendantsVariable);
    const apisNumber = apisVariable === "" ? 0 : Number(apisVariable);
    const value =
      99.99 +
      (attendantsNumber > 2 ? attendantsNumber * 10 : 0) +
      (apisNumber > 1 ? apisNumber * 25 : 0);
    let anual = value * 12;
    anual = anual - anual * 0.2;

    setValue(value);
    setAnual(anual);
  }, [attendantsVariable, apisVariable]);

  const updateAttendants = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (/^\d*$/.test(inputValue)) {
      if (Number(inputValue) > 1000) return;
      else setAttendants(inputValue);
    }
  };

  const updateApis = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (/^\d*$/.test(inputValue)) {
      if (Number(inputValue) > 500) return;
      else setApis(inputValue);
    }
  };

  return (
    <div
      className={`rounded-xl ${
        custom ? "max-w-96" : "max-w-[35%] min-w-[25%]"
      } max-lg:max-w-full max-lg:w-full px-2 py-6 border flex flex-col gap-6 border-zinc-200 bg-slate-50 shadow-sm`}
    >
      <div className="flex flex-col">
        <p className="font-bold text-xl tracking-wide">
          {custom ? "Custom" : "Basic"}
        </p>
        <div className="flex items-center gap-2">
          <h2 className="font-extrabold text-2xl tracking-wider text-blue-800">
            R${value.toLocaleString()}
          </h2>
          <p className="font-bold text-base opacity-70">/ mês*</p>
        </div>
        <span className="font-bold text-xs opacity-80">
          Ou 12 x R${(anual / 12).toFixed(2)} (20% 0FF)
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {custom ? (
          <div className="w-full flex flex-col gap-2">
            <div className="h-[15px] grid grid-cols-[calc((100%-202px-16px)/2)_202px_calc((100%-202px-16px)/2)] items-center gap-2">
              <hr className="w-full h-1px border-zinc-200" />
              <p className="text-[10px] leading-[10px] align-middle text-blue-700 opacity-70 font-bold">
                Clique sobre os valores para personalizar
              </p>
              <hr className="w-full h-1px border-zinc-200" />
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="h-16 w-full rounded-[6px] py-2 border border-solid border-slate-200/80 flex flex-col gap-1 text-center">
                <p className="font-bold text-xs opacity-80">Atendentes</p>
                <Input
                  className="!p-0 h-[unset] !border-none !outline-none !shadow-none focus:!outline-none focus:!shadow-none focus:!ring-0 text-center font-bold text-xl"
                  type="number"
                  value={attendantsVariable}
                  onChange={(e) => updateAttendants(e)}
                />
              </div>
              <div className="h-16 w-full rounded-[6px] py-2 border border-solid border-slate-200/80 flex flex-col gap-1 text-center">
                <p className="font-bold text-xs opacity-80">WhatsApp</p>
                <Input
                  className="!p-0 h-[unset] !border-none !outline-none !shadow-none focus:!outline-none focus:!shadow-none focus:!ring-0 text-center font-bold text-xl flex items-center justify-center"
                  type="number"
                  value={apisVariable}
                  onChange={(e) => updateApis(e)}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="h-[15px] flex items-center">
              <hr className="w-full h-1px border-zinc-200" />
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="h-16 w-full rounded-[6px] py-2 border border-solid border-slate-200/80 flex flex-col gap-1 text-center">
                <p className="font-bold text-xs opacity-80">Atendentes</p>
                <h1 className="font-bold text-xl">{attendantsVariable}</h1>
              </div>
              <div className="h-16 w-full rounded-[6px] py-2 border border-solid border-slate-200/80 flex flex-col gap-1 text-center">
                <p className="font-bold text-xs opacity-80">WhatsApp</p>
                <h1 className="font-bold text-xl">{apisVariable}</h1>
              </div>
            </div>
          </div>
        )}
        <hr className="w-full h-1px border-zinc-200" />
      </div>
      <div className="w-full flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <Icon
            className="text-green-700"
            icon="ci:check"
            width="20"
            height="20"
          />
          <p className="font-semibold text-xs">Sistema de Atendimento</p>
        </div>
        <div className="grid grid-cols-[20px_80%] items-center gap-1">
          <Icon
            className="text-green-700"
            icon="ci:check"
            width="20"
            height="20"
          />
          <p className="font-semibold text-xs w-[191px]">
            Integração com WhatsApp, Instagram, etc.
          </p>
        </div>
        <div className="grid grid-cols-[20px_80%] items-center gap-1">
          <Icon
            className="text-green-700"
            icon="ci:check"
            width="20"
            height="20"
          />
          <p className="font-semibold text-xs">Suporte via WhatsApp</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="h-[15px] grid grid-cols-[calc((100%-55px-16px)/2)_55px_calc((100%-55px-16px)/2)] items-center gap-2">
          <hr className="w-full h-1px border-zinc-200" />
          <p className="text-[10px] leading-[10px] align-middle text-blue-700 opacity-70 font-bold">
            Adicionais:
          </p>
          <hr className="w-full h-1px border-zinc-200" />
        </div>
        <div className="w-full flex flex-col gap-1">
          <div className="flex flex-col">
            <div className="grid grid-cols-[10px_calc(100%-10px)] items-center gap-2">
              <Icon
                className="text-blue-700"
                icon="material-symbols:circle"
                width="10"
                height="10"
              />
              <p className="font-semibold text-xs">Atendente com IA</p>
            </div>
            <span className="text-[10px] leading-[10px] font-medium opacity-85">
              A partir de R$199,99 / Mês
            </span>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-[10px_calc(100%-10px)] items-center gap-2">
              <Icon
                className="text-blue-700"
                icon="material-symbols:circle"
                width="10"
                height="10"
              />
              <p className="font-semibold text-xs">Site Personalizado</p>
            </div>
            <span className="text-[10px] leading-[10px] font-medium opacity-85">
              A partir de R$799,99 + R$59,99 / Mês
            </span>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-[10px_calc(100%-10px)] items-center gap-2">
              <Icon
                className="text-blue-700"
                icon="material-symbols:circle"
                width="10"
                height="10"
              />
              <p className="font-semibold text-xs">Painéis de Gestão e CRM</p>
            </div>
            <span className="text-[10px] leading-[12px] font-medium opacity-85">
              A partir de R$59,99 / Mês<br/>(Gratuito no Plano anual)
            </span>
          </div>
        </div>
      </div>
      <Button className="bg-blue-700 duration-500 transition-all hover:bg-blue-900 text-white">
        Adquirir
      </Button>
    </div>
  );
}
