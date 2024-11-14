import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FiBookmark, FiCheck, FiImage, FiRepeat, FiShare, FiTag } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { ButtonIcon } from "@/components/ui/button-icon";
import { Footer } from "@/components/footer";
import { FaWhatsapp } from "react-icons/fa";
import { ListVehicles } from "@/components/list-vehicles";
import { IVehicle } from "@/interfaces/vehicle.interface";
import { fetchData } from "@/hooks/fetch";
import { maskPrice } from "@/components/ui/input-price";

export default async function Page({ params: { id } }) {
    const { data: vehicle }: { data: IVehicle, total: number } = await fetchData(`vehicles/${id[id.length - 1]}`, 0);
    const { data: vehicles, total }: { data: IVehicle[], total: number } = await fetchData('vehicles', 0);

    return (
        <div className="flex flex-col">
            <Header fill />
            <div className="min-xl:hidden">
                <Gallery images={vehicle.images} />
            </div>
            <div className="w-full max-w-7xl px-4 mx-auto pt-4 xl:pt-28">
                <ul className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <li><Link href={''}>{vehicle.brand.name}</Link></li>
                    /
                    <li><Link href={''}>{vehicle.model.name}</Link></li>
                </ul>
                <h1 className="text-4xl font-medium text-gray-800 mt-2">{vehicle.brand.name} <span className="text-indigo-500">{vehicle.model.name}</span></h1>
                <span className="text-sm">{vehicle.engine}, {vehicle.cylinders} cilindros, {vehicle.fuelType}</span>
                <div className="flex justify-between flex-wrap gap-4 my-6">
                    <ul className="flex flex-wrap gap-2">
                        <li className="flex gap-2 px-4 bg-indigo-100 py-2 rounded-xl text-indigo-500 text-sm items-center font-medium"><Image src={'/year.svg'} alt="" width={16} height={16} /> <span>{vehicle.modelYear}</span></li>
                        <li className="flex gap-2 px-4 bg-indigo-100 py-2 rounded-xl text-indigo-500 text-sm items-center font-medium"><Image src={'/mileage-blue.svg'} alt="" width={16} height={16} /> <span>{vehicle.mileage} KM</span></li>
                        <li className="flex gap-2 px-4 bg-indigo-100 py-2 rounded-xl text-indigo-500 text-sm items-center font-medium"><Image src={'/cambio-blue.svg'} alt="" width={16} height={16} /> <span>{vehicle.transmissionType}</span></li>
                        <li className="flex gap-2 px-4 bg-indigo-100 py-2 rounded-xl text-indigo-500 text-sm items-center font-medium"><Image src={'/fuel-blue.svg'} alt="" width={16} height={16} /> <span>{vehicle.fuelType}</span></li>
                    </ul>
                    <button className="flex gap-2 px-4 bg-indigo-500 py-2 rounded-xl text-white text-sm items-center font-medium"><FiShare />Compartilhar</button>
                </div>
                <div className="flex flex-col-reverse xl:grid xl:grid-cols-12 gap-8 pb-10">
                    <div className="col-span-8 flex flex-col gap-8">
                        <div className="max-xl:hidden">
                            <Gallery images={vehicle.images} />
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-2xl font-medium">Visão geral do carro</h4>
                            <p className="text-sm text-gray-800">{vehicle.description}</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-2xl font-medium">Visão geral do carro</h4>
                            <div className="grid xl:grid-cols-2 gap-6">
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/body.svg'} alt="" width={20} height={20} />
                                        <span className="text-xs font-medium">Carroceria</span>
                                    </div>
                                    <span className="text-xs font-medium text-indigo-500">{vehicle.category}</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/condition.svg'} alt="" width={20} height={20} />
                                        <span className="text-xs font-medium">Condição</span>
                                    </div>
                                    <span className="text-xs font-medium text-indigo-500">{vehicle.condition}</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/mileage.svg'} alt="" width={20} height={20} />
                                        <span className="text-xs font-medium">Quilometragem</span>
                                    </div>
                                    <span className="text-xs font-medium text-indigo-500">{vehicle.mileage} km</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/engine.svg'} alt="" width={20} height={20} />
                                        <span className="text-xs font-medium">Motor</span>
                                    </div>
                                    <span className="text-xs font-medium text-indigo-500">{vehicle.engine}</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/fuel.svg'} alt="" width={20} height={20} />
                                        <span className="text-xs font-medium">Combustível</span>
                                    </div>
                                    <span className="text-xs font-medium text-indigo-500">{vehicle.fuelType}</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/door.svg'} alt="" width={20} height={20} />
                                        <span className="text-xs font-medium">Portas</span>
                                    </div>
                                    <span className="text-xs font-medium text-indigo-500">{vehicle.doors}</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/engine.svg'} alt="" width={20} height={20} />
                                        <span className="text-xs font-medium">Ano</span>
                                    </div>
                                    <span className="text-xs font-medium text-indigo-500">{vehicle.modelYear}</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/cylinder.svg'} alt="" width={20} height={20} />
                                        <span className="text-xs font-medium">Cilindros</span>
                                    </div>
                                    <span className="text-xs font-medium text-indigo-500">{vehicle.cylinders}</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/cambio.svg'} alt="" width={20} height={20} />
                                        <span className="text-xs font-medium">Câmbio</span>
                                    </div>
                                    <span className="text-xs font-medium text-indigo-500">{vehicle.transmissionType}</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/color.svg'} alt="" width={20} height={20} />
                                        <span className="text-xs font-medium">Cor</span>
                                    </div>
                                    <span className="text-xs font-medium text-indigo-500">{vehicle.color}</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/drive.svg'} alt="" width={20} height={20} />
                                        <span className="text-xs font-medium">Direção</span>
                                    </div>
                                    <span className="text-xs font-medium text-indigo-500">{vehicle.direction}</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <FiRepeat />
                                        <span className="text-xs font-medium">Aceita troca</span>
                                    </div>
                                    <span className="text-xs font-medium text-indigo-500">Sim</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-2xl font-medium">Características</h4>
                            <div className="grid xl:grid-cols-4 gap-6">
                                <div className="flex flex-col gap-3">
                                    <h4 className="text-sm font-medium">Interior</h4>
                                    <ul className="flex flex-col gap-3">
                                        {vehicle.interiorFeatures.map((item, index) => (
                                            <li className="flex gap-2 items-center" key={index}>
                                                <div className="bg-indigo-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                    <FiCheck size={14} className="text-indigo-500" />
                                                </div>
                                                <span className="text-xs">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h4 className="text-sm font-medium">Segurança</h4>
                                    <ul className="flex flex-col gap-3">
                                        {vehicle.safetyFeatures.map((item, index) => (
                                            <li className="flex gap-2 items-center" key={index}>
                                                <div className="bg-indigo-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                    <FiCheck size={14} className="text-indigo-500" />
                                                </div>
                                                <span className="text-xs">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h4 className="text-sm font-medium">Exterior</h4>
                                    <ul className="flex flex-col gap-3">
                                        {vehicle.exteriorFeatures.map((item, index) => (
                                            <li className="flex gap-2 items-center" key={index}>
                                                <div className="bg-indigo-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                    <FiCheck size={14} className="text-indigo-500" />
                                                </div>
                                                <span className="text-xs">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h4 className="text-sm font-medium">Conforto & Conveniência</h4>
                                    <ul className="flex flex-col gap-3">
                                        {vehicle.interiorFeatures.map((item, index) => (
                                            <li className="flex gap-2 items-center" key={index}>
                                                <div className="bg-indigo-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                    <FiCheck size={14} className="text-indigo-500" />
                                                </div>
                                                <span className="text-xs">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden w-full">
                            <iframe width="100%" height="400" src="https://www.youtube.com/embed/F0qGuq6_1FQ?si=X_QOVqkJgI1brc6P" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col-span-4 relative w-full">
                        <div className="p-4 border border-gray-300 rounded-xl h-fit sticky w-full top-24">
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Nosso preço</span>
                                <ButtonIcon icon={<FiBookmark />} buttonType="outlined" small />
                            </div>
                            <div className="flex items-center gap-4 mt-2">
                                <span className="line-through text-sm">R$ {maskPrice(vehicle.price.toString())}</span>
                                <span className="text-xl text-indigo-500 font-semibold">R$ {maskPrice(vehicle.price.toString())}</span>
                            </div>
                            <div className="flex flex-col gap-4 mt-6">
                                <Button title="Faça uma oferta" buttonType="primary" full icon={<FiTag />} />
                                <Button title="Faça uma oferta" buttonType="outlined" full icon={<Image src={'/drive.svg'} alt="" width={20} height={20} />} />
                            </div>
                            <div className="flex gap-2 my-6">
                                <div className="w-16 h-16 border-gray-600 rounded-full flex items-center justify-center relative overflow-hidden">
                                    {/*  <FiImage /> */}
                                    <Image src={'/avatar.avif'} alt="" fill objectFit="cover" />
                                </div>
                                <div className="flex justify-center flex-col">
                                    <span className="font-medium">{vehicle.user.name}</span>
                                    <span className="text-xs text-gray-600">{vehicle.user.email}</span>
                                </div>
                            </div>
                            <Button title="Entrar em contato" buttonType="secondary" full icon={<FaWhatsapp />} />
                        </div>
                    </div>
                </div>
            </div>
            <ListVehicles vehicles={vehicles} />
            <Footer />
        </div>
    )
}