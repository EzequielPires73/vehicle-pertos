'use client'

import Link from "next/link";
import { SelectField } from "../ui/select";
import { IBrand } from "@/interfaces/brand.interface";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { IModel } from "@/interfaces/model.interface";
import { FiSearch } from "react-icons/fi";

export function FilterForm({brands}: {brands: IBrand[]}) {
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
        <form className="flex flex-col gap-4">
            <div className="mt-8 flex gap-4">
                <button className="px-2 border-b-2 pb-1 text-white border-white font-semibold">Todos</button>
                <button className="px-2 border-b-2 pb-1 text-white/90 border-transparent">Novos</button>
                <button className="px-2 border-b-2 pb-1 text-white/90 border-transparent">Seminovos</button>
            </div>
            <div className="bg-white w-full max-w-4xl rounded-xl p-2 flex flex-wrap text-black">
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
                <Link href={'/buscar'} className="max-xl:w-full xl:ml-3 px-6 bg-blue-800 hover:bg-blue-900 transition-all text-white h-12 flex items-center justify-center gap-4 rounded-xl font-medium"><FiSearch /> Buscar veículo</Link>
            </div>
        </form>
    )
}