'use client'

import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function Gallery() {
    return (
        <Swiper id="gallery" className="h-[400px] w-full" modules={[Navigation, Pagination]} navigation pagination>
            <SwiperSlide className="relative h-[400px] rounded-xl overflow-hidden">
                <Image src={'/argo.jpg'} alt="" fill objectFit="cover"/>
            </SwiperSlide>
            <SwiperSlide className="relative h-[400px] rounded-xl overflow-hidden">
                <Image src={'/byd.jpg'} alt="" fill objectFit="cover"/>
            </SwiperSlide>
            <SwiperSlide className="relative h-[400px] rounded-xl overflow-hidden">
                <Image src={'/polo.jpg'} alt="" fill objectFit="cover"/>
            </SwiperSlide>
        </Swiper>
    )
}