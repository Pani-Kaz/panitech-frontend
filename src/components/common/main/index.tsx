import React from "react";
import { Header } from "../header";

export function Main ({children}: {children: React.ReactNode}) {
    return (
        <>
            <Header/>
            <main className="w-full min-h-[100vh] bg-zinc-50">
                {children}
            </main>
        </>
    )
}