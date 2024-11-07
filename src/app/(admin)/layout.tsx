import { UserWrapper } from "@/components/user-wrapper";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <header
                className={`h-20 bg-white py-4 flex items-center w-full transition-colors duration-300 border-b`}>
                <nav className="px-4 flex items-center justify-between gap-8 w-full">
                    <Link href={'/'}><Image src={'/logo-dark.svg'} alt="Logo" width={300} height={26} /></Link>
                    <UserWrapper />
                </nav>
            </header>
            <div className="bg-gray-100 flex-1">
                {children}
            </div>
        </div>
    )
}