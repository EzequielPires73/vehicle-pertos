'use client'

import Link from "next/link"
import { useParams, useSearchParams } from "next/navigation"

export function Step() {
    const {id} = useParams();
    const searchParams = useSearchParams()
    const step = searchParams.get('step')

    return (
        <div className="w-full grid grid-cols-3 gap-4 border-b">
            <Link replace href={`/anunciar-veiculo/${id}?step=detalhes`} className={`flex flex-col items-center gap-2 pb-4 border-b-2 ${step == 'detalhes' ? 'border-blue-700' : 'border-transparent'}`}>
                <span className="w-6 h-6 text-xs flex items-center justify-center bg-blue-500 text-white rounded-full">1</span>
                <span className={`${step == 'detalhes' ? 'text-blue-700' : 'text-gray-700'} font-medium text-sm text-center`}>Detalhes do veículo</span>
            </Link>
            <Link replace href={`/anunciar-veiculo/${id}?step=adicionais`} className={`flex flex-col items-center gap-2 pb-4 border-b-2 ${step == 'adicionais' ? 'border-blue-700' : 'border-transparent'}`}>
                <span className="w-6 h-6 text-xs flex items-center justify-center bg-blue-500 text-white rounded-full">2</span>
                <span className={`${step == 'adicionais' ? 'text-blue-700' : 'text-gray-700'} font-medium text-sm text-center`}>Destaque seu anúncio</span>
            </Link>
            <Link replace href={`/anunciar-veiculo/${id}?step=finalizar`} className={`flex flex-col items-center gap-2 pb-4 border-b-2 ${step == 'finalizar' ? 'border-blue-700' : 'border-transparent'}`}>
                <span className="w-6 h-6 text-xs flex items-center justify-center bg-blue-500 text-white rounded-full">3</span>
                <span className={`${step == 'finalizar' ? 'text-blue-700' : 'text-gray-700'} font-medium text-sm text-center`}>Finalize seu anúncio</span>
            </Link>
        </div>
    )
}