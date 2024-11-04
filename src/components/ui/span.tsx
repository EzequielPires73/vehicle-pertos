export function Span({children, color}: {children, color?: string}) {
    return (
        <span className={`text-sm font-normal ${color ?? `text-gray-500`}`}>{children}</span>
    )
}