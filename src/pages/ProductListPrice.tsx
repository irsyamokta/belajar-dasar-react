import { useSearchParams } from "react-router"

const ProductListPrice = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const HandleSortValue = (value: string) => {
        searchParams.set("sort", value)
        setSearchParams(searchParams)
    }

    return (
        <>
            <h1>Product List Price</h1>
            <h2>Sort : {searchParams.get("sort")}</h2>
            <h2>Filter : {searchParams.get("filter")}</h2>
            <button onClick={() => HandleSortValue("asc")}>Sort By Price</button> | <button onClick={() => HandleSortValue("desc")}>Sort By Price</button>
        </>
    )
}

export default ProductListPrice