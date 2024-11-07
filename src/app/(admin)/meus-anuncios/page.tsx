import { CardVehicle } from "@/components/card-vehicle";
import { Button } from "@/components/ui/button";
import { Span } from "@/components/ui/span";
import { Title } from "@/components/ui/title";
import { fetchData } from "@/hooks/fetch";
import { IVehicle } from "@/interfaces/vehicle.interface";

export default async function Page() {
    const { data: vehicles, total }: { data: IVehicle[], total: number } = await fetchData('vehicles');
    
    return (
        <div>
            <div className="w-full mx-auto px-4  py-8 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div>
                        <Title>Meus anúncios</Title>
                        <Span>Exibindo {total} resultados</Span>
                    </div>
                    <Button title="Anunciar" buttonType="primary" href="/anunciar-veiculo"/>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {vehicles.map(item => <CardVehicle vehicle={item} />)}
                </div>
            </div>
        </div>
    )
}