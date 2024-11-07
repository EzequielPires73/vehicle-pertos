'use client'

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiBookmark, FiBriefcase, FiInfo, FiList, FiLogOut, FiMenu, FiUser } from "react-icons/fi";
import { useAuth } from "@/contexts/auth-context";

export function UserWrapper() {
    const { user, signout } = useAuth();
    const [show, setShow] = useState(false);
    const ref = useRef(null);
    const name = user && getFirstTwoWords(user.name);

    function getFirstTwoWords(fullName: string): string {
        const splitName = fullName.split(' ');

        if (splitName.length >= 2) {
            if (splitName[1].toLowerCase() === 'de' || splitName[1].toLowerCase() === 'da') {
                return `${splitName[0]} ${splitName[1]} ${splitName[2] ?? ''}`.trim();
            }
            return `${splitName[0]} ${splitName[1]}`;
        }
        return fullName;
    }

    const handleOutsideClick = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShow(false);
        }
    };

    const handleLogout = async () => signout();

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <>
            <div className="relative" ref={ref}>
                <button aria-label="user-button" className={`${user ? 'pl-4 pr-1' : 'px-4'} h-10 border border-gray-300 rounded-3xl flex items-center gap-3 hover:shadow`} onClick={() => setShow(!show)}>
                    <FiMenu />
                    {user ? <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center font-medium text-sm">{name[0].substring(0, 1)}</div> : <FiUser />}
                </button>
                {show &&
                    <div className="absolute z-50 right-0 w-full min-w-[200px] min-h-28 border border-gray-300 rounded-lg bg-white top-[110%]">
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
                    </div>
                }
            </div>
        </>
    )
}