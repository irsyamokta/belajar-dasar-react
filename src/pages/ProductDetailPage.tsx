import { useParams } from 'react-router'
const ProductDetail = () => {
    const params = useParams()
    return (
        <div>
            <h1>Product Detail Page</h1>
            <h3>{params.slug}</h3>
        </div>
    )
}

export default ProductDetail