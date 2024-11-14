'use client'

import { BottomBar } from "@/components/bottom-bar";
import { Header } from "@/components/header";
import { useAuth } from "@/contexts/auth-context";
import Link from "next/link";
import { FiBookmark, FiInfo, FiList, FiLogOut, FiUser } from "react-icons/fi";

export default function Page() {
    const { user, signout } = useAuth();
    const handleLogout = async () => signout();
    
    return (
        <div>
            <Header />
            <ul className="p-3 flex flex-col gap-2 text-gray-900">
                {!user ?
                    <>
                        <li>
                            <Link href={'/anuncie'} className="h-10 flex items-center gap-4 hover:bg-slate-100 transition-all bg-white px-3 rounded-md text-sm">Cadastrar-se</Link>
                        </li>
                        <li>
                            <Link href={'/entrar'} className="h-10 flex items-center gap-4 hover:bg-slate-100 transition-all bg-white px-3 rounded-md text-sm">Entrar</Link>
                        </li>
                    </> :
                    <>
                        <li>
                            <Link href={'/minha-conta'} className="h-10 flex items-center gap-4 hover:bg-slate-100 transition-all bg-white px-3 rounded-md text-sm"><FiUser size={20} />Minha conta</Link>
                        </li>
                        <li>
                            <Link href={'/meus-anuncios'} className="h-10 flex items-center gap-4 hover:bg-slate-100 transition-all bg-white px-3 rounded-md text-sm"><FiList size={20} />Meus Anúncios</Link>
                        </li>
                        <li>
                            <Link href={'/meus-favoritos'} className="h-10 flex items-center gap-4 hover:bg-slate-100 transition-all bg-white px-3 rounded-md text-sm"><FiBookmark size={20} />Meus Favoritos</Link>
                        </li>
                    </>
                }
                <div className="border-t"></div>
                <li>
                    <Link href={'/central-ajuda'} className="h-10 flex items-center gap-4 hover:bg-slate-100 transition-all bg-white px-3 rounded-md text-sm"><FiInfo size={20} />Central de ajuda</Link>
                </li>
                {user &&
                    <li>
                        <button onClick={() => handleLogout()} className="h-10 w-full flex items-center gap-4 hover:bg-slate-100 transition-all bg-white px-3 rounded-md text-sm"><FiLogOut size={20} />Sair</button>
                    </li>
                }
            </ul>
            <BottomBar />
        </div>
    )
}