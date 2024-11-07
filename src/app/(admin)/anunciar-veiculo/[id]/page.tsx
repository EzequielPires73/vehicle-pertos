import { CreateVehicleForm } from "@/components/forms/create-vehicle-form";
import { fetchData } from "@/hooks/fetch";
import { IBrand } from "@/interfaces/brand.interface";
import { IVehicleOptions } from "@/interfaces/vehicle-options";
import { Step } from "./step";

export default async function Page({ params: { id }, searchParams: {step} }: { params: { id: string }, searchParams: {step?: 'detalhes' | 'adicionais' | 'finalizar' } }) {
    const { data: brands, total }: { data: IBrand[], total: number } = await fetchData('brands');
    const options: IVehicleOptions = await fetchData('options', 0);
    const {data: vehicle} = await fetchData(`vehicles/${id}`, 0);

    return (
        <div>
            <div className="w-full max-w-6xl mx-auto my-8 p-8 border rounded-xl flex flex-col items-center gap-4 bg-white">
                <Step />
                <h1 className="text-2xl font-medium text-gray-800 mt-8">Preencha os dados do veículo</h1>
                <CreateVehicleForm vehicle={vehicle} brands={brands} options={options} step={step} id={+id} />
            </div>
        </div>
    )
}