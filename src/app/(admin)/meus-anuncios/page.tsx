import { CardVehicleAdmin } from "@/components/cards/card-vehicle-admin";
import { Button } from "@/components/ui/button";
import { Span } from "@/components/ui/span";
import { Title } from "@/components/ui/title";
import { fetchData } from "@/hooks/fetch";
import { IVehicle } from "@/interfaces/vehicle.interface";
import { cookies } from "next/headers";

export default async function Page() {
    const userData = cookies().get('pertos_vehicles.user');
    const user = JSON.parse(userData.value);
    const { data: vehicles, total }: { data: IVehicle[], total: number } = await fetchData(`vehicles?user=${user.id}`, 0);
    
    return (
        <div>
            <div className="w-full mx-auto px-4 py-8 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div>
                        <Title>Meus anúncios</Title>
                        <Span>Exibindo {total} resultados</Span>
                    </div>
                    <Button title="Anunciar" buttonType="primary" href="/anunciar-veiculo"/>
                </div>
                <div className="grid xl:grid-cols-4 gap-4">
                    {vehicles?.map(item => <CardVehicleAdmin key={item.id} vehicle={item} />)}
                </div>
            </div>
        </div>
    )
}