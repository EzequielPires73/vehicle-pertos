import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import 'swiper/css';
import 'swiper/css/pagination';
import { ListVehicles } from "@/components/list-vehicles";
import { Header } from "@/components/header";
import { ListBrands } from "@/components/list-brands";
import { ListPopularMakes } from "@/components/list-popular-makes";
import { BannerHome } from "@/components/banner-home";
import { Footer } from "@/components/footer";
import { fetchData } from "@/hooks/fetch";
import { IBrand } from "@/interfaces/brand.interface";
import { IVehicle } from "@/interfaces/vehicle.interface";

export default async function Home() {
  const { data: brands }: { data: IBrand[], total: number } = await fetchData('brands');
  const { data: vehicles, total }: { data: IVehicle[], total: number } = await fetchData('vehicles', 0);

  return (
    <div>
      <Header />
      <BannerHome brands={brands} />
      <ListVehicles vehicles={vehicles}/>
      <div className="w-full mx-auto px-4 py-8 gap-6 flex flex-col">
        <h2 className="text-xl font-medium flex-1">Por que nos escolher?</h2>
        <div className="w-full grid xl:grid-cols-4 gap-4">
          <div className="flex flex-col gap-1">
            <Image src={'/f1.svg'} alt="" width={48} height={48}/>
            <h4 className="font-medium text-lg">Ofertas Especiais de Financiamento</h4>
            <p className="text-sm">Our stress-free finance department that can find financial solutions to save you money.</p>
          </div>
          <div className="flex flex-col gap-1">
            <Image src={'/f2.svg'} alt="" width={48} height={48}/>
            <h4 className="font-medium text-lg">Concessionárias de automóveis confiáveis</h4>
            <p className="text-sm">Our stress-free finance department that can find financial solutions to save you money.</p>
          </div>
          <div className="flex flex-col gap-1">
            <Image src={'/f3.svg'} alt="" width={48} height={48}/>
            <h4 className="font-medium text-lg">Preços transparentes e competitivos</h4>
            <p className="text-sm">Our stress-free finance department that can find financial solutions to save you money.</p>
          </div>
          <div className="flex flex-col gap-1">
            <Image src={'/f4.svg'} alt="" width={48} height={48}/>
            <h4 className="font-medium text-lg">Serviço especializado em automóveis</h4>
            <p className="text-sm">Our stress-free finance department that can find financial solutions to save you money.</p>
          </div>
        </div>
      </div>
      <ListPopularMakes vehicles={vehicles} />
      <ListBrands />
      <div className="w-full max-w-7xl mx-auto px-4 pt-16 pb-8 grid lg:grid-cols-2 gap-4">
        <div className="flex-1 bg-blue-100 rounded-xl p-6 flex gap-4 items-start ">
          <div className="flex flex-col gap-3">
            <h4 className="text-3xl font-medium">Você quer <hr /> comprar um carro?</h4>
            <p>Estamos empenhados em fornecer aos nossos clientes um serviço excepcional.</p>
            <Link href={'/anunciar-veiculo'} className="w-fit px-6 bg-blue-500 hover:bg-blue-600 transition-all text-white h-12 flex items-center justify-center gap-4 rounded-lg font-medium">Comece <FiArrowUpRight /></Link>
          </div>
          <Image src={'/electric-car.svg'} alt="" width={80} height={80} />
        </div>
        <div className="flex-1 bg-red-100 rounded-xl p-6 flex gap-4 items-start">
          <div className="flex flex-col gap-3">
            <h4 className="text-3xl font-medium">Você quer <hr /> vender um carro?</h4>
            <p>Estamos empenhados em fornecer aos nossos clientes um serviço excepcional.</p>
            <Link href={'/anunciar-veiculo'} className="w-fit px-6 bg-gray-900 hover:bg-gray-950 transition-all text-white h-12 flex items-center justify-center gap-4 rounded-lg font-medium">Comece <FiArrowUpRight /></Link>
          </div>
          <Image src={'/electric-car2.svg'} alt="" width={80} height={80} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
