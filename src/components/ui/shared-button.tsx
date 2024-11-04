'use client'

import { FiShare } from "react-icons/fi";
import { ButtonIcon } from "./button-icon";

export default function ShareButton({ place }) {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: place.name,
                    text: `Confira ${place.name} em ${place.city}, ${place.state}. Veja mais detalhes no link abaixo!`,
                    url: window.location.href,
                });
                console.log('Conteúdo compartilhado com sucesso!');
            } catch (error) {
                console.error('Erro ao compartilhar:', error);
            }
        } else {
            alert('Compartilhamento não suportado neste navegador.');
        }
    };

    return (
        <ButtonIcon
            icon={<FiShare />}
            buttonType="primary"
            small
            onClick={handleShare}
        />
    );
}
