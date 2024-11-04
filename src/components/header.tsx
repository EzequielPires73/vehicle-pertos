'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

export function Header({fill}: {fill?: boolean}) {
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
                    } transition-colors duration-300`}
            >
                <nav className="px-4 flex gap-8 w-full max-w-7xl mx-auto max-xl:bg-white py-3 h-20 justify-between">
                    <Link href={'/'} className="flex">
                    <Image src={isTop || fill ? '/logo.svg' : '/logo-dark.svg'} alt="Logo" width={108} height={26} className="hidden lg:flex" />
                    <Image src={'/logo-dark.svg'} alt="Logo" width={108} height={26} className="lg:hidden flex" />
                    </Link>
                    <button className="hidden max-xl:flex"><FiMenu size={32} /></button>
                    <ul className={`hidden xl:flex gap-8 flex-1 justify-end items-center ${isTop || fill ? 'text-white' : 'text-black'}`}>
                        <li><Link href={'/'} className="font-semibold">Início</Link></li>
                        <li><Link href={'/'} className={`${isTop || fill ? 'text-white/80' : 'text-black/80'}`}>Sobre</Link></li>
                        <li><Link href={'/'} className={`${isTop || fill ? 'text-white/80' : 'text-black/80'}`}>Contato</Link></li>
                        <div className="ml-12 flex items-center gap-4">
                            <li><Link href={'/entrar'}>Entrar</Link></li>
                            <li><Link href={'/anunciar-veiculo'} className={`px-6 ${isTop || fill ? 'bg-white hover:bg-white/90' : 'bg-blue-950 text-white'} transition-all text-black h-12 flex items-center rounded-xl font-medium`}>Anunciar veículo</Link></li>
                        </div>
                    </ul>
                </nav>
            </header>
        </div>
    )
}