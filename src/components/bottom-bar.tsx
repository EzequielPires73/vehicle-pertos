'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHeart, FiHome, FiSearch, FiUser } from "react-icons/fi";

export function BottomBar() {
    const path = usePathname();

    return (
        <div className="lg:hidden h-20">
            <div className="h-20 bg-white fixed bottom-0 left-0 w-full border-t z-50 flex">
                <Link href={'/'} className={`flex-1 flex flex-col items-center justify-center gap-2 text-sm ${path == '/' ? 'font-medium text-indigo-500' : 'text-gray-400'}`}>
                    <FiHome size={20} />
                    Início
                </Link>
                <Link href={'/buscar'} className={`flex-1 flex flex-col items-center justify-center gap-2 text-sm ${path == '/buscar' ? 'font-medium text-indigo-500' : 'text-gray-400'}`}>
                    <FiSearch size={20} />
                    Buscar
                </Link>
                <Link href={'/favoritos'} className={`flex-1 flex flex-col items-center justify-center gap-2 text-sm ${path == '/favoritos' ? 'font-medium text-indigo-500' : 'text-gray-400'}`}>
                    <FiHeart size={20} />
                    Favoritos
                </Link>
                <Link href={'/perfil'} className={`flex-1 flex flex-col items-center justify-center gap-2 text-sm ${path == '/perfil' ? 'font-medium text-indigo-500' : 'text-gray-400'}`}>
                    <FiUser size={20} />
                    Perfil
                </Link>
            </div>
        </div>
    )
}