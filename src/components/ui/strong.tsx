export function Strong({children, color}: {children, color?: string}) {
    return (
        <h2 className={`text-lg font-medium ${color ?? 'text-gray-800'}`}>{children}</h2>
    )
}