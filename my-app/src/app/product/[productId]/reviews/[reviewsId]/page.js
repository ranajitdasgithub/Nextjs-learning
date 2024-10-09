export default function ReviewsId({params}){
    console.log(params.productId)
    return <>
        <h1>Here is the product {params.productId} with review {params.reviewsId}</h1>
    </>
}