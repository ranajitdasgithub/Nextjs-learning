import Link from 'next/link'



export default function ProductList({ params }) {
    let specificProductId = 100;
    return (
        <>
            <Link href='/'>Home</Link>
            <h2>Product list {params.productId}</h2>
            <h1>
                <Link href="/products/1">Product 1</Link>
            </h1>
            <h1>
                <Link href="/products/2">Product 2</Link>

            </h1>
            <h1>
                {/* 'replace' will be back to direct homepage */}
                <Link href="/products/3" replace>Product 3</Link>

            </h1>
            <h1>
                <Link href={`/products/${specificProductId}`}>Product {specificProductId}</Link>

            </h1 >
        </>
    );
}
