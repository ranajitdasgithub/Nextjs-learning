import { Metadata } from "next";

export const generateMetadata = async ({ params }) => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`)
        }, 100);
    })
    return {
        title: `Product ${title}`
    };
}

export default function ProductListWithReview({ params }) {
    return (
        <>
            <h2>Product list {params.productId}</h2>
        </>
    );
}
