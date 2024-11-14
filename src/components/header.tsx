'use client'

import { useAuth } from "@/contexts/auth-context";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiSliders } from "react-icons/fi";
import { UserWrapper } from "./user-wrapper";
import { usePathname, useRouter } from "next/navigation";

export function Header({ fill }: { fill?: boolean }) {
    const path = usePathname();
    const router = useRouter();
    const { user } = useAuth();
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        setIsTop(window.scrollY === 0);
        const handleScroll = () => {
            setIsTop(window.scrollY === 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="max-xl:h-20">
            <header
                className={`fixed z-50 flex items-center w-full ${fill ? 'bg-card' : isTop ? "bg-transparent" : "bg-white shadow-lg"
                    } transition-colors duration-300 max-lg:shadow-md`}
            >
                <nav className="px-4 flex gap-8 w-full max-xl:bg-white py-3 h-20 justify-center xl:justify-between items-center">
                    {path != '/' && <button onClick={() => router.back()} className="lg:hidden absolute left-4 w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg"><FiArrowLeft /></button>}
                    <Link href={'/'} className="flex">
                        <Image src={isTop || fill ? '/logo.svg' : '/logo-dark.svg'} alt="Logo" width={364} height={26} className="hidden lg:flex" />
                        <Image src={'/logo-dark.svg'} alt="Logo" width={200} height={26} className="lg:hidden flex" />
                    </Link>
                    {path == '/buscar' && <button onClick={() => { }} className="lg:hidden absolute right-4 w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg"><FiSliders /></button>}
                    <ul className={`hidden xl:flex gap-8 flex-1 justify-end items-center ${isTop || fill ? 'text-white' : 'text-black'}`}>
                        <li><Link href={'/'} className="font-semibold">Início</Link></li>
                        <li><Link href={'/'} className={`${isTop || fill ? 'text-white/80' : 'text-black/80'}`}>Sobre</Link></li>
                        <li><Link href={'/'} className={`${isTop || fill ? 'text-white/80' : 'text-black/80'}`}>Contato</Link></li>
                        {user ? <UserWrapper /> : <div className="ml-12 flex items-center gap-4">
                            <li><Link href={'/entrar'}>Entrar</Link></li>
                            <li><Link href={'/anunciar-veiculo'} className={`px-6 ${isTop || fill ? 'bg-white hover:bg-white/90' : 'bg-indigo-500 text-white'} transition-all text-black h-12 flex items-center rounded-xl font-medium`}>Anunciar veículo</Link></li>
                        </div>}
                    </ul>
                </nav>
            </header>
        </div>
    )
}