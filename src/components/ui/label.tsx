interface Props {
    text?: string;
    htmlFor?: string;
    children?: any;
    color?: string
}

export const Label = ({text, htmlFor, children, color}: Props) => {
    return (
        <label htmlFor={htmlFor ?? null} className={`text-sm ${color ?? 'text-gray-800'} font-medium cursor-pointer select-none`}>{children ?? text}</label>
    )
}