import { ButtonHTMLAttributes } from "react"
import Link from "next/link";
import { LoadingSvg } from "./loading-svg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string;
    icon?: React.ReactNode;
    leading?: React.ReactNode;
    full?: boolean;
    small?: boolean;
    medium?: boolean;
    href?: string;
    target?: string;
    loading?: boolean;
    buttonType?: 'primary' | 'secondary' | 'outlined' | 'danger' | 'text';
}


export const Button = ({ title, icon, full, href, loading, buttonType, small, medium, leading, target, ...rest }: Props) => {
    const baseStyles = `
        ${full ? 'w-full' : 'w-fit'}
        ${small ? 'h-9 min-h-9 px-4 text-sm' : medium ? 'h-10 min-h-10 px-4 text-sm' : 'h-12 min-h-12 px-6'}
        transition-colors rounded-md font-medium
        flex items-center justify-center gap-2 relative
    `;

    const primaryStyles = `
        bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white
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

    const buttonStyles = `${baseStyles} ${getButtonStyles()} ${rest.disabled ? 'opacity-40 cursor-not-allowed' : ''}`;

    if (href) {
        return (
            <Link href={href} className={buttonStyles} target={target}>
                {loading && <span className="absolute"><LoadingSvg color={'#fff'} show={loading} /></span>}
                {icon && <span className={`${loading && 'opacity-0'} text-xl`}>{icon}</span>}
                {title && <span className={`${loading && 'opacity-0'}`}>{title}</span>}
            </Link>
        )
    } else {
        return (
            <button className={buttonStyles} {...rest} disabled={loading || rest.disabled}>
                {loading && <span className="absolute"><LoadingSvg color={'#fff'} show={loading} /></span>}
                {icon && <span className={`${loading && 'opacity-0'} text-xl`}>{icon}</span>}
                {title && <span className={`${loading && 'opacity-0'}`}>{title}</span>}
                {leading && <span className={`${loading && 'opacity-0'} text-xl`}>{leading}</span>}
            </button>
        )
    }
}

