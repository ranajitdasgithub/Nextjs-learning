
export default function AuthLayout({
    children,
}){
    return (
        <>
            <h2>Inner layout (Route group layout)</h2>
            {children}
        </>
    )
}