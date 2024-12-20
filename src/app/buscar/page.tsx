import { BottomBar } from "@/components/bottom-bar";
import { CardVehicle } from "@/components/cards/card-vehicle";
import { Footer } from "@/components/footer";
import { FilterForm } from "@/components/forms/filter-form";
import { Header } from "@/components/header";
import { Span } from "@/components/ui/span";
import { Title } from "@/components/ui/title";
import { fetchData } from "@/hooks/fetch";
import { IBrand } from "@/interfaces/brand.interface";
import { IVehicle } from "@/interfaces/vehicle.interface";

const getPath = ({marca, modelo}: {marca: string, modelo: string}) => {
    return 'vehicles?' + [
        marca && `brand=${marca}`,
        modelo && `model=${modelo}`,
    ].join('&');
}

export default async function Page({searchParams}) {
    const { data: brands }: { data: IBrand[], total: number } = await fetchData('brands');
    const { data: vehicles, total }: { data: IVehicle[], total: number } = await fetchData(getPath(searchParams), 0);

    return (
        <div>
            <Header fill />
            <div className="bg-gray-950 flex items-center flex-col justify-center xl:pt-24 py-8 px-4">
                <FilterForm brands={brands} />
                <button className="text-white mt-4 font-medium">Busca avançada</button>
            </div>
            <div className="w-full mx-auto px-4  py-8 flex flex-col gap-4">
                <div>
                    <div>
                        <Title>Busca por filtro</Title>
                        <Span>Exibindo 16 resultados</Span>
                    </div>
                </div>
                <div className="grid xl:grid-cols-4 gap-4">
                    {vehicles.map(item => <CardVehicle vehicle={item} />)}
                </div>
            </div>
            <BottomBar />
        </div>
    )
}