import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcements from "../components/Announcements"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from "../responsive";

const Container = styled.div``

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column' })}
`

const Title =  styled.h1`
    margin: 20px;
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({ margin: '10px 20px', display: 'flex', flexDirection: 'column'})}
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 10px;
    ${mobile({ marginRight: '0px', marginBottom: '10px' })}
`

const Select = styled.select`
    padding:5px;
    margin-right: 20px;
    ${mobile({ margin: '10px 0px' })}
    `
const Options = styled.option``

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select>
                    <Options disabled selected>
                        Color
                    </Options>
                    <Options>Khaki</Options>
                    <Options>Red</Options>
                    <Options>Black</Options>
                </Select>
                <Select>
                    <Options disabled selected>
                        Size
                    </Options>
                    <Options>XS</Options>
                    <Options>S</Options>
                    <Options>M</Options>
                    <Options>L</Options>
                    <Options>XL</Options>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products</FilterText>
                <Select>
                    <Options selected>Newest</Options>
                    <Options>Price (Asc)</Options>
                    <Options>Price (Desc)</Options>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList