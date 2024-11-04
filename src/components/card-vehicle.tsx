import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiBookmark } from "react-icons/fi";

export function CardVehicle({brand, model, version, image}) {
    return (
        <div className="border rounded-xl overflow-hidden">
            <div className="w-full h-52 relative">
              <Image src={image} alt="" fill objectFit="cover" />
              <button className="absolute right-2 top-2 bg-white p-2 rounded-md"><FiBookmark /></button>
            </div>
            <div>
              <div className="p-4">
                <h4 className="font-medium">{brand} {model} - 2024</h4>
                <span className="text-xs line-clamp-1">{version}</span>
                <div className="mt-3 pt-3 border-t grid grid-cols-3">
                  <div className="flex flex-col items-center">
                    <Image src={"/mileage.svg"} alt="" width={16} height={16}/>
                    <span className="text-xs mt-1">2.500 Miles</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image src={"/fuel.svg"} alt="" width={16} height={16}/>
                    <span className="text-xs mt-1">Flex</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image src={"/cambio.svg"} alt="" width={16} height={16}/>
                    <span className="text-xs mt-1">Manual</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t flex justify-between items-center">
                  <strong className="text-lg font-medium">R$ 22.000</strong>
                  <Link href={'/comprar/volkswagen/gol/123'} className="text-sm font-medium text-blue-500 flex items-center gap-2">Ver detalhes<FiArrowUpRight size={20} /></Link>
                </div>
              </div>
            </div>
          </div>
    )
}