'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { OptionType, SelectField } from "@/components/ui/select";
import { IBrand, VehicleType } from "@/interfaces/brand.interface";
import { IModel } from "@/interfaces/model.interface";
import { IVehicleOptions } from "@/interfaces/vehicle-options";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiArrowLeft } from "react-icons/fi";
import { InputPrice, maskPrice } from "../ui/input-price";
import { GridSelect } from "../ui/grid-select";
import { toNumber } from "@/helpers/mask";
import { VehicleGallery } from "../vahicle-gallery";
import axios from "axios";
import { api } from "@/services/api";
import { useRouter } from "next/navigation";
import { IVehicle } from "@/interfaces/vehicle.interface";
import { Textarea } from "../ui/textarea";

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
    price?: number | string;
    mileage?: number;
    interiorFeatures: Array<String>,
    exteriorFeatures: Array<String>,
    safetyFeatures: Array<String>,
    comfortFeatures: Array<String>,
    engine: OptionType;
    doors: OptionType;
    direction: OptionType;
    cylinders: OptionType;
    images: Array<String>,
    description: string,
}

export function CreateVehicleForm({ brands, options, step, vehicle, id, }: { id?: number, vehicle?: IVehicle; brands: IBrand[], options: IVehicleOptions, step?: 'detalhes' | 'adicionais' | 'finalizar' }) {
    const router = useRouter();
    const { control, watch, register, setValue, formState: { errors }, handleSubmit } = useForm<IVehicleForm>({
        defaultValues: vehicle ? {
            brand: {
                label: vehicle.brand.name,
                value: vehicle.brand.id
            },
            model: {
                label: vehicle.model.name,
                value: vehicle.model.id
            },
            modelYear: {
                label: vehicle.modelYear.toString(),
                value: vehicle.modelYear
            },
            manufactureYear: {
                label: vehicle.manufactureYear.toString(),
                value: vehicle.manufactureYear
            },
            version: vehicle.version,
            category: {
                label: vehicle.category,
                value: vehicle.category
            },
            color: {
                label: vehicle.color,
                value: vehicle.color
            },
            transmissionType: {
                label: vehicle.transmissionType,
                value: vehicle.transmissionType
            },
            fuelType: {
                label: vehicle.fuelType,
                value: vehicle.fuelType
            },
            condition: {
                label: vehicle.condition,
                value: vehicle.condition
            },
            cylinders: {
                label: vehicle.cylinders,
                value: vehicle.cylinders,
            },
            direction: {
                label: vehicle.direction,
                value: vehicle.direction,
            },
            doors: {
                label: vehicle.doors,
                value: vehicle.doors,
            },
            engine: {
                label: vehicle.engine,
                value: vehicle.engine,
            },
            description: vehicle.description,
            mileage: vehicle.mileage,
            price: maskPrice(vehicle.price.toString()),
            comfortFeatures: vehicle.comfortFeatures,
            exteriorFeatures: vehicle.exteriorFeatures,
            interiorFeatures: vehicle.interiorFeatures,
            safetyFeatures: vehicle.safetyFeatures,
            images: vehicle.images ?? [],
        } : {
            images: [],
        }
    });
    const brand = watch('brand');
    const images = watch('images');
    const modelYear = watch('modelYear');
    const [models, setModels] = useState<IModel[]>([]);
    const [manufactureYears, setManufactureYears] = useState<string[]>([]);

    useEffect(() => {
        if (brand) {
            setModels(brands.find(item => item.id == brand.value).models);
        }
        if (vehicle?.brand.id != brand?.value) {
            setValue('model', null);
        }
    }, [brand]);

    useEffect(() => {
        if (modelYear) {
            setManufactureYears([modelYear.value.toString(), (+modelYear.value - 1).toString()]);
        }
        if (vehicle?.modelYear != modelYear?.value) {
            setValue('manufactureYear', null);
        }
    }, [modelYear]);

    const onSubmit = async (data: IVehicleForm) => {
        const { models, ...brand } = brands.find(item => item.id == data.brand.value);
        const vehicleData: IVehicle = {
            description: data.description,
            brand: brand,
            model: models.find(item => item.id == data.model.value),
            category: data.category.label,
            color: data.color.label,
            condition: data.condition.label,
            fuelType: data.fuelType.label,
            transmissionType: data.transmissionType.label,
            type: VehicleType.car,
            version: data.version,
            modelYear: +data.modelYear.label,
            manufactureYear: +data.manufactureYear.label,
            price: toNumber(data.price.toString()),
            mileage: data.mileage,
            interiorFeatures: data.interiorFeatures,
            exteriorFeatures: data.exteriorFeatures,
            safetyFeatures: data.safetyFeatures,
            comfortFeatures: data.comfortFeatures,
            cylinders: data.cylinders.label,
            direction: data.direction.label,
            doors: data.doors.label,
            engine: data.engine.label,
        };
        if (vehicle) {
            const { success, data: vehicle } = await api.patch(`vehicles/${id}`, vehicleData).then(res => res.data);
            if (success) {
                step == 'finalizar' ? router.push('/meus-anuncios') : router.push(`/anunciar-veiculo/${vehicle.id}?step=${step == 'detalhes' ? 'adicionais' : step == 'adicionais' ? 'finalizar' : ''}`);
            }
        } else {
            const { success, data: vehicle } = await api.post('vehicles', vehicleData).then(res => res.data);
            if (success) {
                router.push(`/anunciar-veiculo/${vehicle.id}?step=adicionais`);
            }
        }

    }

    return (
        <form className="w-full max-w-2xl mx-auto flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            {step == "finalizar" && <VehicleGallery images={images} onChange={(images) => setValue('images', images)} />}
            {step}
            {step == "detalhes" || step == null ? <>
                <div className="grid lg:grid-cols-2 gap-4">
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
                    <SelectField
                        control={control}
                        name="modelYear"
                        label="Ano do Modelo"
                        options={options.years.map(item => ({ value: item, label: item }))}
                        error={errors?.modelYear?.message}
                        rules={{ required: 'Esse campo é obrigatório.' }}
                    />
                    <SelectField
                        control={control}
                        name="manufactureYear"
                        label="Ano de Fabricação"
                        options={manufactureYears.map(item => ({ value: item, label: item }))}
                        error={errors?.manufactureYear?.message}
                        rules={{ required: 'Esse campo é obrigatório.' }}
                    />
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
                </div>
                <div className="grid lg:grid-cols-2 gap-4">
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
                <div className="grid lg:grid-cols-2 gap-4">
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
                <div className="grid lg:grid-cols-2 gap-4">
                        <SelectField
                            control={control}
                            name="direction"
                            label="Direção"
                            placeholder="Selecione um valor"
                            options={options.direction.map(item => ({ value: item, label: item }))}
                            error={errors?.fuelType?.message}
                            rules={{ required: 'Esse campo é obrigatório.' }}
                        />
                        <SelectField
                            control={control}
                            name="doors"
                            label="Portas"
                            placeholder="Selecione um valor"
                            options={options.doors.map(item => ({ value: item, label: item }))}
                            error={errors?.condition?.message}
                            rules={{ required: 'Esse campo é obrigatório.' }}
                        />
                        <SelectField
                            control={control}
                            name="engine"
                            label="Motor"
                            placeholder="Selecione um valor"
                            options={options.engine.map(item => ({ value: item, label: item }))}
                            error={errors?.fuelType?.message}
                            rules={{ required: 'Esse campo é obrigatório.' }}
                        />
                        <SelectField
                            control={control}
                            name="cylinders"
                            label="Cilindros"
                            placeholder="Selecione um valor"
                            options={options.cylinders.map(item => ({ value: item, label: item }))}
                            error={errors?.condition?.message}
                            rules={{ required: 'Esse campo é obrigatório.' }}
                        />
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
                <Textarea label="Descrição" {...register('description')} />
            </> : null}
            {step == 'adicionais' && <>
                <GridSelect
                    control={control}
                    name="interiorFeatures"
                    label="Características do Interior"
                    options={options.interiorFeatures}
                />
                <GridSelect
                    control={control}
                    name="safetyFeatures"
                    label="Características de Segurança"
                    options={options.safetyFeatures}
                />
                <GridSelect
                    control={control}
                    name="exteriorFeatures"
                    label="Características Externas"
                    options={options.exteriorFeatures}
                />
                <GridSelect
                    control={control}
                    name="comfortFeatures"
                    label="Características de Conforto e Conveniência"
                    options={options.comfortFeatures}
                />
            </>}
            <div className="flex justify-between items-center">
                <Button title="Voltar" icon={<FiArrowLeft />} buttonType="text" />
                <Button title={step == "finalizar" ? "Finalizar" : "Continuar"} />
            </div>
        </form>
    )
}