'use client'

import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { SelectField } from "./ui/select";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { IModel } from "@/interfaces/model.interface";
import { IBrand } from "@/interfaces/brand.interface";
import { FilterForm } from "./forms/filter-form";

export function BannerHome({ brands }: {brands: IBrand[]}) {
    return (
        <div className="relative w-full h-screen">
            <Image src={'/bg-home.jpg'} alt="" fill objectFit="cover" />
            <div className="bg-black/60 absolute top-0 left-0 w-full h-full flex flex-col text-white items-center justify-center gap-4 px-4">
                <p className="hidden xl:text-xl text-center">Encontre carros para venda e aluguel perto de você</p>
                <h1 className="text-2xl xl:text-5xl text-center font-medium">Encontre o seu carro perfeito</h1>
                <FilterForm brands={brands}/>
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