'use client'

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardVehicleH } from "./card-vehicle-h";

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
]

export function ListPopularMakes() {
    return (
        <div className="mt-8 bg-section overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 py-16 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-medium text-white">Marcas populares</h2>
                    <Link className="text-sm font-medium text-white" href={'/'}>Ver todos</Link>
                </div>
                <div className="flex gap-4 border-b border-white/10 text-white">
                    <button className="px-2 py-1 text-sm font-medium border-b-2 border-white">Fiat</button>
                    <button className="px-2 py-1 text-sm border-b-2 border-transparent">Hyndai</button>
                    <button className="px-2 py-1 text-sm border-b-2 border-transparent">Chevrolet</button>
                    <button className="px-2 py-1 text-sm border-b-2 border-transparent">Ford</button>
                </div>
                <Swiper className="w-full overflow-visible" slidesPerView={'auto'}>
                    {vehicles.map(item => <SwiperSlide className="max-w-[600px]"><CardVehicleH {...item} /></SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    )
}