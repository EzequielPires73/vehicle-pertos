import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiBookmark } from "react-icons/fi";

export function CardVehicleH({brand, model, version, image}) {
    return (
        <div className="rounded-xl overflow-hidden flex bg-white/10 text-white">
            <div className="w-[100px] xl:w-[320px] rounded-xl overflow-hidden ml-2 mt-2 mb-2 relative max-xl:h-[100px]">
              <Image src={image} alt="" fill objectFit="cover" />
              <button className="absolute right-2 top-2 bg-white p-2 rounded-md text-black"><FiBookmark /></button>
            </div>
            <div className="flex-1">
              <div className="p-4">
                <h4 className="font-medium">{brand} {model} - 2024</h4>
                <span className="text-xs line-clamp-1">{version}</span>
                <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-4">
                  <div className="flex gap-2 items-center">
                    <Image src={"/mileage-white.svg"} alt="" width={16} height={16}/>
                    <span className="text-xs mt-1">2.500 Miles</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image src={"/fuel-white.svg"} alt="" width={16} height={16}/>
                    <span className="text-xs mt-1">Flex</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image src={"/cambio-white.svg"} alt="" width={16} height={16}/>
                    <span className="text-xs mt-1">Manual</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center">
                  <strong className="text-lg font-medium">R$ 22.000</strong>
                  <Link href={'/'} className="text-sm font-medium text-white flex items-center gap-2">Ver detalhes<FiArrowUpRight size={20} /></Link>
                </div>
              </div>
            </div>
          </div>
    )
}