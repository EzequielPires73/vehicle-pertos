import Image from "next/image";
import Link from "next/link";

export function ListBrands() {
    return (
        <div className="w-full  mx-auto px-4 py-8 mt-8 flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-medium flex-1">Consulte carros por marca</h2>
                <Link className="text-sm font-medium" href={'/'}>Ver todas</Link>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
                <div className="border flex items-center justify-center rounded-xl flex-col p-4 gap-4">
                    <Image src={'/volkswagen.webp'} alt="" width={48} height={48} />
                    <span className="text-sm font-medium">Volkswagen</span>
                </div>
                <div className="border flex items-center justify-center rounded-xl flex-col p-4 gap-4">
                    <Image src={'/bmw.webp'} alt="" width={48} height={48} />
                    <span className="text-sm font-medium">BMW</span>
                </div>
                <div className="border flex items-center justify-center rounded-xl flex-col p-4 gap-4">
                    <Image src={'/ford.webp'} alt="" width={48} height={48} />
                    <span className="text-sm font-medium">Ford</span>
                </div>
                <div className="border flex items-center justify-center rounded-xl flex-col p-4 gap-4">
                    <Image src={'/fiat.webp'} alt="" width={48} height={48} />
                    <span className="text-sm font-medium">Fiat</span>
                </div>
                <div className="border flex items-center justify-center rounded-xl flex-col p-4 gap-4">
                    <Image src={'/honda.webp'} alt="" width={48} height={48} />
                    <span className="text-sm font-medium">Honda</span>
                </div>
                <div className="border flex items-center justify-center rounded-xl flex-col p-4 gap-4">
                    <Image src={'/toyota.webp'} alt="" width={48} height={48} />
                    <span className="text-sm font-medium">Toyota</span>
                </div>
                <div className="border flex items-center justify-center rounded-xl flex-col p-4 gap-4">
                    <Image src={'/chevrolet.webp'} alt="" width={48} height={48} />
                    <span className="text-sm font-medium">Chevrolet</span>
                </div>
                <div className="border flex items-center justify-center rounded-xl flex-col p-4 gap-4">
                    <Image src={'/nissan.webp'} alt="" width={48} height={48} />
                    <span className="text-sm font-medium">Nissan</span>
                </div>
                <div className="border flex items-center justify-center rounded-xl flex-col p-4 gap-4">
                    <Image src={'/renault.webp'} alt="" width={48} height={48} />
                    <span className="text-sm font-medium">Renault</span>
                </div>
                <div className="border flex items-center justify-center rounded-xl flex-col p-4 gap-4">
                    <Image src={'/jeep.webp'} alt="" width={48} height={48} />
                    <span className="text-sm font-medium">Jeep</span>
                </div>
                <div className="border flex items-center justify-center rounded-xl flex-col p-4 gap-4">
                    <Image src={'/mitsubishi.webp'} alt="" width={48} height={48} />
                    <span className="text-sm font-medium">Mitsubishi</span>
                </div>
                <div className="border flex items-center justify-center rounded-xl flex-col p-4 gap-4">
                    <Image src={'/hyundai.webp'} alt="" width={48} height={48} />
                    <span className="text-sm font-medium">Hyundai</span>
                </div>
            </div>
        </div>
    )
}