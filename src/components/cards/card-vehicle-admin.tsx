import { IVehicle } from "@/interfaces/vehicle.interface";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiBookmark, FiImage } from "react-icons/fi";
import { maskPrice } from "../ui/input-price";

export function CardVehicleAdmin({ vehicle }: { vehicle: IVehicle }) {
  return (
    <div className="border rounded-xl overflow-hidden bg-white">
      <div className="p-2">
        <div className="w-full h-52 relative rounded-xl overflow-hidden">
          {vehicle.images?.length > 0 ? <Image src={process.env.NEXT_PUBLIC_URL_DEFAULT + vehicle.images[0]} alt="" fill objectFit="cover" /> : <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-xl"><FiImage /></div>}
        <button className="absolute right-2 top-2 bg-white p-2 rounded-md"><FiBookmark /></button>
        </div>
      </div>
      <div>
        <div className="p-4 pt-2">
          <h4 className="font-medium">{vehicle.brand.name} {vehicle.model.name} - {vehicle.modelYear}</h4>
          <span className="text-xs line-clamp-1">{vehicle.version}</span>
          <div className="mt-3 pt-3 border-t grid grid-cols-3">
            <div className="flex flex-col items-center">
              <Image src={"/mileage.svg"} alt="" width={16} height={16} />
              <span className="text-xs mt-1 line-clamp-1 text-center">{vehicle.mileage} KM</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src={"/fuel.svg"} alt="" width={16} height={16} />
              <span className="text-xs mt-1 line-clamp-1 text-center">{vehicle.fuelType}</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src={"/cambio.svg"} alt="" width={16} height={16} />
              <span className="text-xs mt-1 line-clamp-1 text-center">{vehicle.transmissionType}</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t flex justify-between items-center">
            <strong className="text-lg font-medium">R$ {maskPrice(vehicle.price.toString())}</strong>
            <Link href={`/anunciar-veiculo/${vehicle.id}?step=detalhes`} className="text-sm font-medium text-blue-500 flex items-center gap-2">Ver detalhes<FiArrowUpRight size={20} /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}