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

export default async function Page() {
    const { data: brands }: { data: IBrand[], total: number } = await fetchData('brands');
    const { data: vehicles, total }: { data: IVehicle[], total: number } = await fetchData('vehicles');

    return (
        <div>
            <Header fill />
            <div className="w-full mx-auto px-4 py-8 flex flex-col gap-4">
                <div>
                    <div>
                        <Title>Favoritos</Title>
                        <Span>Exibindo {total} resultados</Span>
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