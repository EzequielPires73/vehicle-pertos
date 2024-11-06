import { CardVehicle } from "@/components/card-vehicle";
import { Footer } from "@/components/footer";
import { FilterForm } from "@/components/forms/filter-form";
import { Header } from "@/components/header";
import { SelectField } from "@/components/ui/select";
import { Span } from "@/components/ui/span";
import { Title } from "@/components/ui/title";
import { fetchData } from "@/hooks/fetch";
import { IBrand } from "@/interfaces/brand.interface";

const vehicles = [
    {
        id: 1,
        brand: 'Fiat',
        model: 'Argo',
        version: '4.0 D5 PowerPulse Momentum 5dr AWARDS Momentum 5dr Momentum 5dr',
        image: '/argo.jpg',
    },
    {
        id: 2,
        brand: 'Hyndai',
        model: 'HB20',
        version: '4.0 D5 PowerPulse Momentum 5dr AWARDS Momentum 5dr Momentum 5dr',
        image: '/hb20.jpg',
    },
    {
        id: 3,
        brand: 'Chevrolet',
        model: 'Onix',
        version: '4.0 D5 PowerPulse Momentum 5dr AWARDS Momentum 5dr Momentum 5dr',
        image: '/onix.jpg',
    },
    {
        id: 4,
        brand: 'Volkswagen',
        model: 'Polo',
        version: '4.0 D5 PowerPulse Momentum 5dr AWARDS Momentum 5dr Momentum 5dr',
        image: '/Polo.jpg',
    },
    {
        id: 5,
        brand: 'BYD',
        model: 'Yuan',
        version: '4.0 D5 PowerPulse Momentum 5dr AWARDS Momentum 5dr Momentum 5dr',
        image: '/byd.jpg',
    },
    {
        id: 1,
        brand: 'Fiat',
        model: 'Argo',
        version: '4.0 D5 PowerPulse Momentum 5dr AWARDS Momentum 5dr Momentum 5dr',
        image: '/argo.jpg',
    },
    {
        id: 2,
        brand: 'Hyndai',
        model: 'HB20',
        version: '4.0 D5 PowerPulse Momentum 5dr AWARDS Momentum 5dr Momentum 5dr',
        image: '/hb20.jpg',
    },
    {
        id: 3,
        brand: 'Chevrolet',
        model: 'Onix',
        version: '4.0 D5 PowerPulse Momentum 5dr AWARDS Momentum 5dr Momentum 5dr',
        image: '/onix.jpg',
    },
    {
        id: 4,
        brand: 'Volkswagen',
        model: 'Polo',
        version: '4.0 D5 PowerPulse Momentum 5dr AWARDS Momentum 5dr Momentum 5dr',
        image: '/Polo.jpg',
    },
    {
        id: 5,
        brand: 'BYD',
        model: 'Yuan',
        version: '4.0 D5 PowerPulse Momentum 5dr AWARDS Momentum 5dr Momentum 5dr',
        image: '/byd.jpg',
    },
    {
        id: 1,
        brand: 'Fiat',
        model: 'Argo',
        version: '4.0 D5 PowerPulse Momentum 5dr AWARDS Momentum 5dr Momentum 5dr',
        image: '/argo.jpg',
    },
    {
        id: 2,
        brand: 'Hyndai',
        model: 'HB20',
        version: '4.0 D5 PowerPulse Momentum 5dr AWARDS Momentum 5dr Momentum 5dr',
        image: '/hb20.jpg',
    },
    {
        id: 3,
        brand: 'Chevrolet',
        model: 'Onix',
        version: '4.0 D5 PowerPulse Momentum 5dr AWARDS Momentum 5dr Momentum 5dr',
        image: '/onix.jpg',
    },
    {
        id: 4,
        brand: 'Volkswagen',
        model: 'Polo',
        version: '4.0 D5 PowerPulse Momentum 5dr AWARDS Momentum 5dr Momentum 5dr',
        image: '/Polo.jpg',
    },
    {
        id: 5,
        brand: 'BYD',
        model: 'Yuan',
        version: '4.0 D5 PowerPulse Momentum 5dr AWARDS Momentum 5dr Momentum 5dr',
        image: '/byd.jpg',
    },
    {
        id: 5,
        brand: 'BYD',
        model: 'Yuan',
        version: '4.0 D5 PowerPulse Momentum 5dr AWARDS Momentum 5dr Momentum 5dr',
        image: '/byd.jpg',
    },
]

export default async function Page() {
    const { data: brands, total }: { data: IBrand[], total: number } = await fetchData('brands');

    return (
        <div>
            <Header fill />
            <div className="bg-card flex items-center flex-col justify-center pt-24 py-8">
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
                <div className="grid grid-cols-4 gap-4">
                    {vehicles.map(item => <CardVehicle {...item} />)}
                </div>
            </div>
            <Footer />
        </div>
    )
}