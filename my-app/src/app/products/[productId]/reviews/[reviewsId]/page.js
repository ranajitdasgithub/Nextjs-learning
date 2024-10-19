import { notFound } from "next/navigation";


export default function ReviewsId({params}){
    if(parseInt(params.reviewsId)>1000){
        notFound();
    }
    return <>
        <h1>Here is the product {params.productId} with review {params.reviewsId}</h1>
    </>
}