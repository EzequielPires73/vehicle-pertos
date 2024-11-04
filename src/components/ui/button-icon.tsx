import Link from "next/link";
import React from "react";
import { LoadingSvg } from "./loading-svg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    path?: string;
    small?: boolean;
    large?: boolean;
    loading?: boolean;
    colors?: {
        color?: string;
        hoverColor?: string;
        activeColor?: string;
        textColor?: string;
    }
    buttonType?: 'primary' | 'secondary' | 'outlined' | 'danger' | 'text';
}

export function ButtonIcon({ icon, path, small, loading, colors, large, buttonType, ...options }: Props) {
    const baseStyles = `
                    ${colors?.color ?? 'bg-gray-200'} lg:hover:${colors?.hoverColor ?? 'bg-gray-300'} lg:active:${colors?.activeColor ?? 'bg-gray-400'} ${colors?.textColor ?? 'text-gray-800'}
                    ${small ? 'h-8 w-8 min-w-8' : `${large ? 'h-12 w-12 min-w-12' : 'h-10 w-10 min-w-10 lg:h-12 lg:w-12'}`} flex justify-center items-center text-gray-500 rounded-md
                    `

    const primaryStyles = `
        bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white
    `;

    const secondaryStyles = `
        bg-gray-600 hover:bg-gray-700 active:bg-gray-800 text-white
    `;

    const outlinedStyles = `
        bg-transparent border border-gray-500 text-gray-700
        hover:border-primary hover:text-primary active:border-primary-hover active:text-primary-hover
    `;

    const dangerStyles = `
        bg-red-600 hover:bg-red-700 active:bg-red-800 text-white
    `;

    const textStyles = ` text-primary hover:bg-gray-100`

    const getButtonStyles = () => {
        switch (buttonType) {
            case "primary":
                return primaryStyles;
            case "secondary":
                return secondaryStyles;
            case "outlined":
                return outlinedStyles;
            case "danger":
                return dangerStyles;
            case "text":
                return textStyles;
            default:
                return 'bg-zinc-800 hover:bg-zinc-900 active:bg-zinc-950 text-white';
        }

    };

    const buttonStyles = `${baseStyles} ${getButtonStyles()} ${options.disabled ? 'opacity-40 cursor-not-allowed' : ''}`;

    if (path) {
        return (
            <Link
                href={path}
                className={buttonStyles}
                aria-label="icon-button"
            >
                {loading && <LoadingSvg color={'#333'} show={loading} />}
                {!loading && <>{icon}</>}
            </Link>
        )
    } else {
        return (
            <button
                className={buttonStyles}
                {...options}
                aria-label="icon-button"
                type={options.type ?? 'button'}
            >
                {loading && <LoadingSvg color={'#333'} show={loading} />}
                {!loading && <>{icon}</>}
            </button>
        )
    }
}

