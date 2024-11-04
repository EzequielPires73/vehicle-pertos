'use client'

import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { SelectField } from "./ui/select";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { IModel } from "@/interfaces/model.interface";
import { IBrand } from "@/interfaces/brand.interface";

export function BannerHome({ brands }: {brands: IBrand[]}) {
    const { control, watch, setValue, } = useForm();
    const brand = watch('brand');
    const [models, setModels] = useState<IModel[]>([]);

    useEffect(() => {
        if(brand) {
            setModels(brands.find(item => item.id == brand.value).models);
        }
        setValue('model', null);
    }, [brand]);

    return (
        <div className="relative w-full h-screen">
            <Image src={'/bg-home.jpg'} alt="" fill objectFit="cover" />
            <div className="bg-black/60 absolute top-0 left-0 w-full h-full flex flex-col text-white items-center justify-center gap-4 px-4">
                <p className="hidden xl:text-xl text-center">Encontre carros para venda e aluguel perto de você</p>
                <h1 className="text-2xl xl:text-5xl text-center font-medium">Encontre o seu carro perfeito</h1>
                <div className="mt-8 flex gap-4">
                    <button className="px-2 border-b-2 pb-1 border-white font-semibold">Todos</button>
                    <button className="px-2 border-b-2 pb-1 text-white/90 border-transparent">Novos</button>
                    <button className="px-2 border-b-2 pb-1 text-white/90 border-transparent">Seminovos</button>
                </div>
                <form className="bg-white w-full max-w-4xl rounded-xl xl:rounded-full p-2 flex flex-wrap text-black">
                    <div className="flex-1 xl:border-r">
                        <SelectField
                            control={control}
                            name="brand"
                            placeholder="Selecione uma marca"
                            disableBorder
                            options={brands.map(item => ({ value: item.id, label: item.name }))}
                        />
                    </div>
                    <div className="flex-1 xl:border-r">
                        <SelectField
                            control={control}
                            name="model"
                            placeholder="Selecione um modelo"
                            disableBorder
                            options={models.map(item => ({ value: item.id, label: item.name }))}
                        />
                    </div>
                    <Link href={'/anunciar-veiculo'} className="max-xl:w-full xl:ml-3 px-6 bg-blue-800 hover:bg-blue-900 transition-all text-white h-12 flex items-center justify-center gap-4 rounded-xl xl:rounded-full font-medium"><FiSearch /> Buscar veículo</Link>
                </form>
                <div className="mt-8 flex flex-col items-center gap-4">
                    <span className="font-medium">Ou busque por modelos</span>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link href={'/'} className="px-4 rounded-full flex items-center bg-white/20 gap-2 text-sm backdrop-blur-sm">
                            <Image src={'/suv.svg'} alt="" width={24} height={24} />
                            SUV
                        </Link>
                        <Link href={'/'} className="px-4 rounded-full flex items-center bg-white/20 gap-2 text-sm backdrop-blur-sm">
                            <Image src={'/sedan.svg'} alt="" width={24} height={24} />
                            Sedan
                        </Link>
                        <Link href={'/'} className="px-4 rounded-full flex items-center bg-white/20 gap-2 text-sm backdrop-blur-sm">
                            <Image src={'/hatch.svg'} alt="" width={24} height={24} />
                            Hatch
                        </Link>
                        <Link href={'/'} className="px-4 rounded-full flex items-center bg-white/20 gap-2 text-sm backdrop-blur-sm">
                            <Image src={'/coupe.svg'} alt="" width={24} height={24} />
                            Coupe
                        </Link>
                        <Link href={'/'} className="px-4 rounded-full flex items-center bg-white/20 gap-2 text-sm backdrop-blur-sm">
                            <Image src={'/hybrid.svg'} alt="" width={24} height={24} />
                            Hibrido
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}