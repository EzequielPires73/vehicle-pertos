'use client'

import { FiArrowLeft } from "react-icons/fi";
import { ButtonIcon } from "./button-icon";
import { useRouter } from "next/navigation";

export function ButtonPrev() {
    const router = useRouter();

    return (
        <ButtonIcon icon={<FiArrowLeft />} buttonType="primary" small onClick={() => router.back()} />
    )
}