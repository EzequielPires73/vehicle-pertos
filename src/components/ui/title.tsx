export function Title({children, color}: {children, color?: string}) {
    return (
        <h1 className={`text-2xl font-semibold ${color ?? 'text-gray-950'}`}>{children}</h1>
    )
}