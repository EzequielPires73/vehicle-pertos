import { SigninForm } from "@/components/forms/signin-form";
import { Title } from "@/components/ui/title";
import Image from "next/image";

export default function Page() {
    return (
        <div className="flex h-screen">
            <div className="max-lg:hidden flex-1 h-screen relative bg-gradient-custom flex flex-col items-center justify-center gap-6">
                <Image src={'/logo-white.svg'} alt="" width={200} height={200}/>
                <Title color="text-white">Uma plataforma de venda e compra de veículos.</Title>
            </div>
            <SigninForm />
        </div>
    )
}