'use client'

import { useState } from "react";
import { Input } from "../ui/input";
import { Span } from "../ui/span";
import { Subtitle } from "../ui/subtitle";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { FaGoogle } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { Title } from "../ui/title";
import { useAuth } from "@/contexts/auth-context";

interface FormProps {
    email: string;
    password: string;
}

export function SigninForm() {
    const {signin} = useAuth();
    const { register, formState: { errors }, handleSubmit } = useForm<FormProps>();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (body: FormProps) => {
        try {
            setLoading(true);
           await signin(body);
        } catch (error) {
            console.log(error);
            alert(error.response.data.error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form className="w-full max-w-md mx-auto flex flex-col gap-4 px-6 h-full justify-center" onSubmit={handleSubmit(onSubmit)}>
            <Link href={'/'}>
                <Image src={'/logo-dark.svg'} alt="Pertos Logo" width={248} height={32} />
            </Link>
            <header>
                <Subtitle>Bem-vindo de Volta!</Subtitle>
                <Span>Faça login na sua conta</Span>
            </header>
            <Input
                label="Seu email"
                placeholder="Insira seu email"
                error={errors?.email?.message}
                {...register('email', { required: true })}
            />
            <Input
                label="Senha de acesso"
                placeholder="Insira sua senha"
                error={errors?.password?.message}
                type="password"
                {...register('password', { required: true })}
            />
            <Link href={'/recuperar-conta'} className="text-sm ml-auto font-medium">Esqueceu sua senha?</Link>
            <div className="flex flex-col items-center gap-4">
                <Button title="Continuar" buttonType="primary" full loading={loading} />
                <Span>ou</Span>
                <Button title="Entrar com google" buttonType="outlined" full icon={<FaGoogle size={16} />} />
                <Button title="Não tem uma conta? Criar conta" buttonType="text" full href="/criar-conta" />
            </div>
        </form>
    )
}