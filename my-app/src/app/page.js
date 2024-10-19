import Link from 'next/link';

export default function Home() {
    return (
        <>
            <nav>
                <Link href='/products'>Products</Link>
                <br />
                <Link href='/blog'>Blog</Link>
            </nav>
            <h1>Welcome Home</h1>
        </>
    );
}
