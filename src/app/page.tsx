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

export default async function Home() {
  const { data: brands, total }: { data: IBrand[], total: number } = await fetchData('brands');

  return (
    <div>
      <Header />
      <BannerHome brands={brands} />
      <ListVehicles />
      <ListPopularMakes />
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
