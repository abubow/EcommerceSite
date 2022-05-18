import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"

const Container = styled.div``
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px;
`
const ImgContainer =styled.div`
  flex: 1;
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`
const InfoContainer =styled.div`
  flex: 1;
  padding: 0px 50px;
`
const Title = styled.h1`
  font-weight: 200;
`

const Description = styled.p`
  margin: 20px 0px;
`

const Price = styled.span`
  font-size: 30px;
  font-weight: 50;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 20px 0px;
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 200;
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0px 5px;
  cursor: pointer;
`
const FilterSize = styled.select`
  padding:5px;
  margin-left: 20px;
  border: none;
  border-radius: 5px;
  background-color: #fafafa;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  `
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #ff6b6b;
  font-weight: 600;
`
const Button = styled.button`
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ff6b6b;
  padding: 15px;
  font-weight: 400;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #ff6b6b;
    color: white;
    box-shadow: 0px 0px 10px 0px #ff6b6b;
  }
`

const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcements/>

      <Wrapper>
        <ImgContainer>
          <Image src= 'https://i.ibb.co/2n7Tw16/kindpng-2748647.png'/>
        </ImgContainer>
        <InfoContainer>
          <Title>PlaceHolder Name</Title>
          <Description>
            Lorem ipsum, dolor sit 
          </Description>
          <Price>$ 90</Price>
          <FilterContainer>
            <Filter>
              <FilterText>Color</FilterText>
              <FilterColor color = 'black'/>
              <FilterColor color = 'darkblue'/>
              <FilterColor color = 'white'/>
              <FilterColor color = 'grey'/>
            </Filter>
            <Filter>
              <FilterText>Size</FilterText>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Add/>
              <Amount>1</Amount>
              <Remove/>
            </AmountContainer>
          <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product