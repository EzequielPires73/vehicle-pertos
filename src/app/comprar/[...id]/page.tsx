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

export default function Page() {
    return (
        <div className="flex flex-col">
            <Header fill />
            <div className="w-full max-w-7xl px-4 mx-auto pt-28">
                <ul className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <li><Link href={''}>Volkswagen</Link></li>
                    /
                    <li><Link href={''}>Gol</Link></li>
                </ul>
                <h1 className="text-4xl font-medium text-gray-800 mt-2">VOLKSWAGEN <span className="text-blue-500">GOL</span></h1>
                <span className="text-sm">1.0 12V MPI TOTALFLEX 4P MANUAL</span>
                <div className="flex justify-between my-6">
                    <ul className="flex gap-2">
                        <li className="flex gap-2 px-4 bg-blue-100 py-2 rounded-xl text-blue-500 text-sm items-center font-medium"><Image src={'/year.svg'} alt="" width={16} height={16} /> <span>2020</span></li>
                        <li className="flex gap-2 px-4 bg-blue-100 py-2 rounded-xl text-blue-500 text-sm items-center font-medium"><Image src={'/mileage-blue.svg'} alt="" width={16} height={16} /> <span>120.000</span></li>
                        <li className="flex gap-2 px-4 bg-blue-100 py-2 rounded-xl text-blue-500 text-sm items-center font-medium"><Image src={'/cambio-blue.svg'} alt="" width={16} height={16} /> <span>Manual</span></li>
                        <li className="flex gap-2 px-4 bg-blue-100 py-2 rounded-xl text-blue-500 text-sm items-center font-medium"><Image src={'/fuel-blue.svg'} alt="" width={16} height={16} /> <span>Gasolina e alcool</span></li>
                    </ul>
                    <button className="flex gap-2 px-4 bg-blue-500 py-2 rounded-xl text-white text-sm items-center font-medium"><FiShare />Compartilhar</button>
                </div>
                <div className="grid grid-cols-12 gap-8 pb-10">
                    <div className="col-span-8 flex flex-col gap-8">
                        <Gallery />
                        <div className="flex flex-col gap-3">
                            <h4 className="text-2xl font-medium">Visão geral do carro</h4>
                            <p className="text-sm text-gray-800">Quisque imperdiet dignissim enim dictum finibus. Sed consectetutr convallis enim eget laoreet. Aenean vitae nisl mollis, porta risus
                                vel, dapibus lectus. Etiam ac suscipit eros, eget maximus, Quisque imperdiet dignissim enim dictum finibus. Sed consectetutr convallis enim eget laoreet. Aenean vitae nisl mollis, porta risus
                                vel, dapibus lectus. Etiam ac suscipit eros, eget maximus</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-2xl font-medium">Visão geral do carro</h4>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/body.svg'} alt="" width={20} height={20} />
                                        <span className="text-xs font-medium">Carroceria</span>
                                    </div>
                                    <span className="text-xs font-medium text-blue-500">Sedan</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/condition.svg'} alt="" width={20} height={20} />
                                        <span className="text-xs font-medium">Condição</span>
                                    </div>
                                    <span className="text-xs font-medium text-blue-500">Usado</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/mileage.svg'} alt="" width={20} height={20} />
                                        <span className="text-xs font-medium">Quilometragem</span>
                                    </div>
                                    <span className="text-xs font-medium text-blue-500">120 km</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/engine.svg'} alt="" width={20} height={20} />
                                        <span className="text-xs font-medium">Motor</span>
                                    </div>
                                    <span className="text-xs font-medium text-blue-500">1.0</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/fuel.svg'} alt="" width={20} height={20} />
                                        <span className="text-xs font-medium">Combustível</span>
                                    </div>
                                    <span className="text-xs font-medium text-blue-500">Gasolina</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/door.svg'} alt="" width={20} height={20} />
                                        <span className="text-xs font-medium">Portas</span>
                                    </div>
                                    <span className="text-xs font-medium text-blue-500">4 Portas</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/engine.svg'} alt="" width={20} height={20} />
                                        <span className="text-xs font-medium">Ano</span>
                                    </div>
                                    <span className="text-xs font-medium text-blue-500">2020</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/cylinder.svg'} alt="" width={20} height={20} />
                                        <span className="text-xs font-medium">Cilindros</span>
                                    </div>
                                    <span className="text-xs font-medium text-blue-500">4</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/cambio.svg'} alt="" width={20} height={20} />
                                        <span className="text-xs font-medium">Câmbio</span>
                                    </div>
                                    <span className="text-xs font-medium text-blue-500">Manual</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/color.svg'} alt="" width={20} height={20} />
                                        <span className="text-xs font-medium">Cor</span>
                                    </div>
                                    <span className="text-xs font-medium text-blue-500">Branco</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/drive.svg'} alt="" width={20} height={20} />
                                        <span className="text-xs font-medium">Direção</span>
                                    </div>
                                    <span className="text-xs font-medium text-blue-500">Elétrica</span>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex gap-2 items-center">
                                        <FiRepeat />
                                        <span className="text-xs font-medium">Aceita troca</span>
                                    </div>
                                    <span className="text-xs font-medium text-blue-500">Sim</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-2xl font-medium">Características</h4>
                            <div className="grid grid-cols-4 gap-6">
                                <div className="flex flex-col gap-3">
                                    <h4 className="text-sm font-medium">Interior</h4>
                                    <ul className="flex flex-col gap-3">
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Ar Condicionado</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Odômetro digital</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Aquecedor</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Assentos de couro</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Teto solar panorâmico</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Tacômetro</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h4 className="text-sm font-medium">Segurança</h4>
                                    <ul className="flex flex-col gap-3">
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Ar Condicionado</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Odômetro digital</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Aquecedor</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Assentos de couro</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Teto solar panorâmico</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Tacômetro</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h4 className="text-sm font-medium">Exterior</h4>
                                    <ul className="flex flex-col gap-3">
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Ar Condicionado</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Odômetro digital</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Aquecedor</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Assentos de couro</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Teto solar panorâmico</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Tacômetro</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h4 className="text-sm font-medium">Conforto & Conveniência</h4>
                                    <ul className="flex flex-col gap-3">
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Ar Condicionado</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Odômetro digital</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Aquecedor</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Assentos de couro</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Teto solar panorâmico</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <div className="bg-blue-100 w-5 h-5 rounded-full flex items-center justify-center">
                                                <FiCheck size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-xs">Tacômetro</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden w-full">
                            <iframe width="100%" height="400" src="https://www.youtube.com/embed/F0qGuq6_1FQ?si=X_QOVqkJgI1brc6P" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col-span-4 relative">
                        <div className="p-4 border border-gray-300 rounded-xl h-fit sticky top-24">
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Nosso preço</span>
                                <ButtonIcon icon={<FiBookmark />} buttonType="outlined" small />
                            </div>
                            <div className="flex items-center gap-4 mt-2">
                                <span className="line-through text-sm">R$ 64.000</span>
                                <span className="text-xl text-blue-500 font-semibold">R$ 56.000</span>
                            </div>
                            <div className="flex flex-col gap-4 mt-6">
                                <Button title="Faça uma oferta" buttonType="primary" full icon={<FiTag />} />
                                <Button title="Faça uma oferta" buttonType="outlined" full icon={<Image src={'/drive.svg'} alt="" width={20} height={20} />} />
                            </div>
                            <div className="flex gap-2 my-6">
                                <div className="w-16 h-16 border border-gray-600 rounded-full flex items-center justify-center">
                                    <FiImage />
                                </div>
                                <div className="flex justify-center flex-col">
                                    <span className="font-medium">Ezequiel Pires</span>
                                    <span className="text-xs text-gray-600">ezequiel.pires082000@gmail.com</span>
                                </div>
                            </div>
                            <Button title="Entrar em contato" buttonType="secondary" full icon={<FaWhatsapp />} />
                        </div>
                    </div>
                </div>
            </div>
            <ListVehicles />
            <Footer />
        </div>
    )
}