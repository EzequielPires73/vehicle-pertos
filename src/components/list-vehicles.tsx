'use client'

import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { CardVehicle } from "./card-vehicle"

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

export function ListVehicles() {
    return (
        <div className="overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 pt-16 pb-8 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-medium flex-1">Explorar todos os veículos</h2>
                    <Link className="text-sm font-medium" href={'/'}>Ver todos</Link>
                </div>
                <div className="flex gap-4 border-b">
                    <button className="px-2 py-1 text-sm font-medium border-b-2 border-blue-500">Todos</button>
                    <button className="px-2 py-1 text-sm border-b-2 border-transparent">Novos</button>
                    <button className="px-2 py-1 text-sm border-b-2 border-transparent">Usados</button>
                </div>
                <Swiper className="w-full overflow-visible" slidesPerView={'auto'}>
                    {vehicles.map(item => <SwiperSlide className="max-w-80"><CardVehicle {...item} /></SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    )
}