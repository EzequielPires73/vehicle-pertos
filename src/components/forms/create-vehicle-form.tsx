'use client';

import { addVehicle } from "@/app/anunciar-veiculo/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { OptionType, SelectField } from "@/components/ui/select";
import { IBrand, VehicleType } from "@/interfaces/brand.interface";
import { IModel } from "@/interfaces/model.interface";
import { IVehicleOptions } from "@/interfaces/vehicle-options";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiArrowLeft } from "react-icons/fi";
import { InputPrice } from "../ui/input-price";

interface IVehicleForm {
    category: OptionType;
    brand: OptionType;
    condition: OptionType;
    model: OptionType;
    version: string;
    color: OptionType;
    fuelType: OptionType;
    modelYear: OptionType;
    manufactureYear: OptionType;
    transmissionType: OptionType;
    price?: number;
    mileage?: number; 
}

export function CreateVehicleForm({ brands, options }: { brands: IBrand[], options: IVehicleOptions }) {
    const { control, watch, register, setValue, formState: { errors }, handleSubmit } = useForm<IVehicleForm>();
    const brand = watch('brand');
    const modelYear = watch('modelYear');
    const [models, setModels] = useState<IModel[]>([]);
    const [manufactureYears, setManufactureYears] = useState<string[]>([]);

    useEffect(() => {
        if (brand) {
            setModels(brands.find(item => item.id == brand.value).models);
        }
        setValue('model', null);
    }, [brand]);

    useEffect(() => {
        if (modelYear) {
            setManufactureYears([modelYear.value.toString(), (+modelYear.value - 1).toString()]);
        }
        setValue('manufactureYear', null);
    }, [modelYear]);

    const onSubmit = (data: IVehicleForm) => {
        const {models, ...brand} = brands.find(item => item.id == data.brand.value);
        const res = addVehicle({
            brand: brand,
            model: models.find(item => item.id == data.model.value),
            category: data.category.label,
            color: data.color.label,
            condition: data.condition.label,
            fuelType: data.fuelType.label,
            transmissionType: data.transmissionType.label,
            type: VehicleType.car,
        });

        console.log(res);
    }

    return (
        <form className="w-full max-w-xl mx-auto flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <SelectField
                control={control}
                label="Marca"
                name="brand"
                placeholder="Selecione uma marca"
                options={brands.map(item => ({ value: item.id, label: item.name }))}
                error={errors?.brand?.message}
                rules={{ required: 'Esse campo é obrigatório.' }}
            />
            <SelectField
                control={control}
                name="model"
                label="Modelo"
                placeholder="Selecione um modelo"
                options={models.map(item => ({ value: item.id, label: item.name }))}
                error={errors?.model?.message}
                rules={{ required: 'Esse campo é obrigatório.' }}
            />
            <div className="flex gap-4 w-full">
                <div className="flex-1">
                    <SelectField
                        control={control}
                        name="modelYear"
                        label="Ano do Modelo"
                        options={options.years.map(item => ({ value: item, label: item }))}
                        error={errors?.modelYear?.message}
                        rules={{ required: 'Esse campo é obrigatório.' }}
                    />
                </div>
                <div className="flex-1">
                    <SelectField
                        control={control}
                        name="manufactureYear"
                        label="Ano de Fabricação"
                        options={manufactureYears.map(item => ({ value: item, label: item }))}
                        error={errors?.manufactureYear?.message}
                        rules={{ required: 'Esse campo é obrigatório.' }}
                    />
                </div>
            </div>
            <Input
                label="Versão"
                placeholder="Insira a versão do veículo"
                error={errors?.version?.message}
                {...register('version', { required: 'Esse campo é obrigatório.' })}
            />
            <SelectField
                control={control}
                name="color"
                label="Cor"
                placeholder="Selecione a cor do veículo"
                options={options.colors.map((item) => ({ value: item, label: item }))}
                error={errors?.color?.message}
                rules={{ required: 'Esse campo é obrigatório.' }}
            />
            <div className="flex gap-4">
                <div className="flex-1">
                    <SelectField
                        control={control}
                        name="category"
                        label="Carroceria"
                        placeholder="Selecione um modelo"
                        options={options.vehicleCategories.map(item => ({ value: item, label: item }))}
                        error={errors?.category?.message}
                        rules={{ required: 'Esse campo é obrigatório.' }}
                    />
                </div>
                <div className="flex-1">
                    <SelectField
                        control={control}
                        name="transmissionType"
                        label="Câmbio"
                        placeholder="Selecione um valor"
                        options={options.transmissionTypes.map(item => ({ value: item, label: item }))}
                        error={errors?.category?.message}
                        rules={{ required: 'Esse campo é obrigatório.' }}
                    />
                </div>
            </div>
            <div className="flex gap-4">
                <div className="flex-1">
                    <SelectField
                        control={control}
                        name="fuelType"
                        label="Combustí­vel"
                        placeholder="Selecione um valor"
                        options={options.fuelTypes.map(item => ({ value: item, label: item }))}
                        error={errors?.fuelType?.message}
                        rules={{ required: 'Esse campo é obrigatório.' }}
                    />
                </div>
                <div className="flex-1">
                    <SelectField
                        control={control}
                        name="condition"
                        label="Condição"
                        placeholder="Selecione um valor"
                        options={options.carConditions.map(item => ({ value: item, label: item }))}
                        error={errors?.condition?.message}
                        rules={{ required: 'Esse campo é obrigatório.' }}
                    />
                </div>
            </div>
            <div className="flex gap-4">
                <div className="flex-1">
                    <Input
                        name="mileage"
                        label="Quilometragem"
                        placeholder="Selecione um valor"
                        error={errors?.mileage?.message}
                        {...register('mileage', { required: 'Esse campo é obrigatório.' })}
                    />
                </div>
                <div className="flex-1">
                    <InputPrice
                        name="price"
                        label="Preço"
                        placeholder="Selecione um valor"
                        error={errors?.price?.message}
                        {...register('price', { required: 'Esse campo é obrigatório.' })}
                    />
                </div>
            </div>
            <div className="flex justify-between items-center">
                <Button title="Voltar" icon={<FiArrowLeft />} buttonType="text" />
                <Button title="Continuar" />
            </div>
        </form>
    )
}