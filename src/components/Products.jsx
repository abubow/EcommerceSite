import styled from "styled-components";
import { popularProductData } from "../data";
import Product from "./Product";
import { mobile } from "../responsive";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${mobile({ justifyContent: 'center', padding: '30px 10px' })}
`;

const Products = () => {
    return (
        <Container>
            {popularProductData.map(product => (
                <Product item={product} key={product.id} />
            ))}
        </Container>
    );
};

export default Products;