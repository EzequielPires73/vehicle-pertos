'use client'

import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function Gallery({ images }) {
    return (
        <Swiper id="gallery" className="h-[248px] xl:h-[400px] w-full" modules={[Navigation, Pagination]} navigation pagination>
            {images.map((image, index) => (
                <SwiperSlide key={index} className="relative h-[248px] xl:h-[400px] xl:rounded-xl overflow-hidden">
                    <Image src={process.env.NEXT_PUBLIC_URL_DEFAULT+image} alt="" fill objectFit="cover" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}