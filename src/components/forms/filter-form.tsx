'use client'

import Link from "next/link";
import { OptionType, SelectField } from "../ui/select";
import { IBrand } from "@/interfaces/brand.interface";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { IModel } from "@/interfaces/model.interface";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";

interface IFilter {
    brand: OptionType;
    condition: number;
    model: OptionType;
}

export function FilterForm({brands}: {brands: IBrand[]}) {
    const router = useRouter();
    const { control, watch, setValue, handleSubmit } = useForm<IFilter>({defaultValues: {condition: 0}});
    const brand = watch('brand');
    const condition = watch('condition');
    const [models, setModels] = useState<IModel[]>([]);

    useEffect(() => {
        if(brand) {
            setModels(brands.find(item => item.id == brand.value).models);
        }
        setValue('model', null);
    }, [brand]);

    const onSubmit = (data) => {
        const path = '/buscar?' + [
            data.brand && `marca=${data.brand.value}`,
            data.model && `modelo=${data.model.value}`,
        ].join('&');
        router.push(path);
    }   

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-8 flex gap-4 border-b border-gray-900">
                <button type="button" className={`px-2 border-b-2 pb-1 ${condition == 0 ? 'text-white border-white font-semibold' : 'px-2 border-b-2 pb-1 text-white/90 border-transparent'}`} onClick={() => setValue('condition', 0)}>Todos</button>
                <button type="button" className={`px-2 border-b-2 pb-1 ${condition == 1 ? 'text-white border-white font-semibold' : 'px-2 border-b-2 pb-1 text-white/90 border-transparent'}`} onClick={() => setValue('condition', 1)}>Novos</button>
                <button type="button" className={`px-2 border-b-2 pb-1 ${condition == 2 ? 'text-white border-white font-semibold' : 'px-2 border-b-2 pb-1 text-white/90 border-transparent'}`} onClick={() => setValue('condition', 2)}>Usados</button>
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
                <button className="max-xl:w-full xl:ml-3 px-6 bg-indigo-500 hover:bg-indigo-600 transition-all text-white h-12 flex items-center justify-center gap-4 rounded-xl font-medium"><FiSearch /> Buscar veículo</button>
            </div>
        </form>
    )
}