import Product from "./Product"
// import { popularProducts } from "../Data"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { publicrequest } from "../requestMethods"
import { useSelector } from "react-redux"
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
`
const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const {search} = useSelector(state=>state.Search);
    // console.log(search);
    useEffect(() => {
        const getProduct = async () => {
            if(search){
                const res_axios = await publicrequest.get(`products/search/${search}`)
                setProducts(res_axios.data);
                // console.log(res_axios);
            }
            else{
                const res_axios = await publicrequest.get(cat ? `/products?category=${cat}` : `/products`)
                setProducts(res_axios.data);
            }
        }
        getProduct()
    }, [cat, filters,search])

    useEffect(() => {
        cat && setFilterProducts(
            products.filter((item) =>
                Object.entries(filters).every(([key, value]) =>
                    item[key].includes(value)
                )
            )
        )
    }, [cat, filters, products])

    useEffect(() => {
        if (sort === "newst") {
            setFilterProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setFilterProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilterProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort])

    // console.log(filterProducts);

    return (
        <Container>
            {
                cat ? filterProducts.map((item) => {
                    return (
                        <Product item={item} key={item.id} />
                    )
                }) : products.slice(0, 8).map((item) => {
                    return (
                        <Product item={item} key={item.id} />
                    )
                })
            }

        </Container>
    )
}

export default Products

