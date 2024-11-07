import { IVehicle } from "@/interfaces/vehicle.interface";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiBookmark, FiImage } from "react-icons/fi";
import { maskPrice } from "./ui/input-price";

export function CardVehicleH({vehicle}: {vehicle: IVehicle}) {
    return (
        <div className="rounded-xl overflow-hidden flex bg-white/10 text-white">
            <div className="w-[100px] xl:w-[320px] rounded-xl overflow-hidden ml-2 mt-2 mb-2 relative max-xl:h-[100px]">
            {vehicle.images?.length > 0 ? <Image src={process.env.NEXT_PUBLIC_URL_DEFAULT+vehicle.images[0]} alt="" fill objectFit="cover" /> : <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-900 rounded-xl"><FiImage /></div>}
            <button className="absolute right-2 top-2 bg-white p-2 rounded-md text-black"><FiBookmark /></button>
            </div>
            <div className="flex-1">
              <div className="p-4">
                <h4 className="font-medium">{vehicle.brand.name} {vehicle.model.name} - {vehicle.modelYear}</h4>
                <span className="text-xs line-clamp-1">{vehicle.version}</span>
                <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-4">
                  <div className="flex gap-2 items-center">
                    <Image src={"/mileage-white.svg"} alt="" width={16} height={16}/>
                    <span className="text-xs mt-1">{vehicle.mileage} KM</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image src={"/fuel-white.svg"} alt="" width={16} height={16}/>
                    <span className="text-xs mt-1">{vehicle.fuelType}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image src={"/cambio-white.svg"} alt="" width={16} height={16}/>
                    <span className="text-xs mt-1">{vehicle.transmissionType}</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center">
                  <strong className="text-lg font-medium">R$ {maskPrice(vehicle.price.toString())}</strong>
                  <Link href={'/comprar/volkswagen/gol/123'} className="text-sm font-medium text-white flex items-center gap-2">Ver detalhes<FiArrowUpRight size={20} /></Link>
                </div>
              </div>
            </div>
          </div>
    )
}