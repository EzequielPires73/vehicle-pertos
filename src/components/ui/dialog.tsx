'use client'

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "./button";
import { Title } from "./title";
import { Span } from "./span";


interface IButton {
    type?: 'primary' | 'secondary';
    title?: string;
    icon?: React.FC;
    colors?: {
        color?: string;
        hoverColor?: string;
        activeColor?: string;
        textColor?: string;
    }
}

interface Props {
    image?: string;
    submit: () => void | Promise<void>;
    title: string;
    text: string;
    actions?: IButton[];
    children?: any;
    show?: boolean;
    close?(): void;
}

export function Dialog({ submit, title, text, image, children, show, close }: Props) {
    const ref = useRef(null);

    const handleOutsideClick = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            { close && close() }
        }
    };

    useEffect(() => {
        if (show) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.body.classList.remove('overflow-hidden');
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [show]);

    return (
        <>
            {
                show &&
                <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/10 backdrop-blur-md flex items-center justify-center z-[9999]">
                    <div className="bg-white w-full max-w-sm rounded-md flex flex-col items-center gap-4 justify-center text-center p-4 lg:max-h-[80vh] max-lg:h-[100%] overflow-hidden" ref={ref}>
                        {image && <img src={image} alt="Illustration" className="w-[180px] h-[180px]" />}
                        <div className="flex flex-col text-center w-full">
                            <Title>{title}</Title>
                            <Span>{text}</Span>
                        </div>
                        <footer className="mt-6 w-full flex flex-col items-center gap-3">
                            <Button
                                title="Continuar"
                                full
                                disabled={submit == null}
                                onClick={async () => {
                                    await submit();
                                    close && close();
                                }} />
                        </footer>
                    </div>
                </div>
            }
        </>
    )
}