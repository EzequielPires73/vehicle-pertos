import { CreateVehicleForm } from "@/components/forms/create-vehicle-form";
import { fetchData } from "@/hooks/fetch";
import { IBrand } from "@/interfaces/brand.interface";
import { IVehicleOptions } from "@/interfaces/vehicle-options";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
    const { data: brands, total }: { data: IBrand[], total: number } = await fetchData('brands');
    const options: IVehicleOptions = await fetchData('options', 0);

    return (
        <div>
            <div className="w-full max-w-6xl mx-auto xl:my-8 p-4 xl:p-8 xl:border xl:rounded-xl flex flex-col items-center gap-4 bg-white">
                <div className="w-full grid grid-cols-3 gap-4 border-b">
                    <div className="flex flex-col items-center gap-2 pb-4 border-b-2 border-blue-700">
                        <span className="w-6 h-6 text-xs flex items-center justify-center bg-blue-500 text-white rounded-full">1</span>
                        <span className="text-blue-700 font-medium text-sm text-center">Dados do veículo</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 pb-4 border-b-2 border-transparent">
                        <span className="w-6 h-6 text-xs flex items-center justify-center bg-blue-500 text-white rounded-full">2</span>
                        <span className="text-gray-700 font-medium text-sm text-center">Destaque seu anúncio</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 pb-4 border-b-2 border-transparent">
                        <span className="w-6 h-6 text-xs flex items-center justify-center bg-blue-500 text-white rounded-full">3</span>
                        <span className="text-gray-700 font-medium text-sm text-center">Finalize seu anúncio</span>
                    </div>
                </div>
                <h1 className="text-2xl font-medium text-gray-800 mt-8">Preencha os dados do veículo</h1>
                <CreateVehicleForm brands={brands} options={options} />
            </div>
        </div>
    )
}