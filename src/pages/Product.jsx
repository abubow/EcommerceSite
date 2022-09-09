import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from "../responsive"

const Container = styled.div``
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px;
  ${mobile({ flexDirection: 'column', padding: '10px', paddingBottom: '40px' })}
`
const ImgContainer =styled.div`
  flex: 1;
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: '40vh' })}
`
const InfoContainer =styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: '10px' })}
`
const Title = styled.h1`
  font-size: 40px;
  font-weight: 200;

  ${mobile({ margin: '10px 0px' })}
`

const Description = styled.p`
  font-size: 20px;
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
  ${mobile({ width: '100%' })}
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
  box-shadow: 0 0 5px 1px rgba(0,0,0,0.15);
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
  ${mobile({ width: '100%' })}
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
  border-radius: 10px;
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quae! A iusto atque necessitatibus cumque reiciendis. Fugit explicabo eveniet laboriosam voluptas accusantium cupiditate numquam in, nostrum quidem debitis cum. Veniam explicabo non odio error quia, quam tempora voluptatum eligendi a qui atque ipsa quod nisi minus dicta recusandae enim voluptatibus asperiores! Dignissimos nesciunt quidem sunt, sapiente iste, voluptates debitis nobis repellendus tempore officiis fugiat aliquam quisquam, atque ipsum ut dolore architecto dolores hic fuga iure. Ipsam provident officia error debitis. 
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