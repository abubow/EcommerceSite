import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { mobile } from "../responsive"

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: '10px' })}
`

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
    padding: 0px 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 500;
    font-size: 1rem;
    border: ${props => props.type === 'filled' ? '1px solid #000' : '1px solid #ccc'};
    background: ${props => props.type === 'filled' ? '#000' : '#fff'};
    color: ${props => props.type === 'filled' ? '#fff' : '#000'};
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        background: ${props => props.type === 'filled' ? '#fff' : '#000'};
        color: ${props => props.type === 'filled' ? '#000' : '#fff'};
        border: 1px solid #000;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    }
`
const TopTexts = styled.div`
    display: flex;
    align-items: center;
`

const TopText = styled.div`
    font-size: 1rem;
    font-weight: 300;
    margin-right: 10px;
    ${mobile({ display: 'none' })}
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column' })}
`
const Info = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    ${mobile({ marginTop: '20px' })}
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column' })}
`
const ProductDetail = styled.div`
    display: flex;
    flex: 2;
`
const Image = styled.img`
    width : 200px;
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
`
const Name = styled.span``
const ProductId = styled.span``
const ProductColorContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px;
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${props => props.color};
    box-shadow: 0px 0px 10px rgba(0,0,0,0.15);
    margin-right: 5px;
    ${mobile({ height: '30px', width: '30px' })}
`
const ProductSize = styled.span``
const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    flex-direction: column;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    ${mobile({ marginTop: '10px' })}
`
const ProductAmount = styled.span`
    font-size: 1.3rem;
    margin: 5px;
    ${mobile({ margin: '5px 20px' })}
`
const ProductPrice = styled.span`
    font-size: 1.5rem;
    font-weight: 500;
    ${mobile({ marginBottom: '20px' })}
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    ${mobile({ margin: '20px 0px' })}
`

const Summary = styled.div`
    flex: 1;
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h3``
const SummaryPrice = styled.span``
const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
    font-weight: ${props => props.type === 'total' && '500'};
    font-size: ${props => props.type === 'total' && '1.4rem'};
`
const SummaryText = styled.span``
const Button = styled.button`
    padding: 10px;
    width: 100%;
    font-weight: 500;
    font-size: 1rem;
    border: 1px solid #ccc;
    background: #000;
    color: #fff;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;    
    &:hover {
        background: #fff;
        color: #000;
        border: 1px solid #000;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    }
`
const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>
                        Shopping Bag (1)
                    </TopText>
                    <TopText>
                        Your Wishlist (0)
                    </TopText>
                </TopTexts>
                <TopButton type= 'filled'>CHECKOUT</TopButton>
                
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src='https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
                            <Details>
                                <Name> <b>Product:</b>Vans Old Skool Sneakers</Name>
                                <ProductId><b>ID:</b>560956809</ProductId>
                                <ProductColorContainer>
                                    <ProductColor color="red"/>
                                    <ProductColor color="white"/>
                                    <ProductColor color="blue"/>
                                </ProductColorContainer>
                                <ProductSize><b>Size:</b> XL</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>1</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$100</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src='https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
                            <Details>
                                <Name> <b>Product:</b>Vans Old Skool Sneakers</Name>
                                <ProductId><b>ID:</b>560956809</ProductId>
                                <ProductColorContainer>
                                    <ProductColor color="red"/>
                                    <ProductColor color="grey"/>
                                    <ProductColor color="black"/>
                                </ProductColorContainer>
                                <ProductSize><b>Size:</b> XL</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>1</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$100</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>
                        Cart Summary
                    </SummaryTitle>
                    <SummaryItem>
                        <SummaryText>Subtotal:</SummaryText>
                        <SummaryPrice>$100</SummaryPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryText>Estimated Shipping</SummaryText>
                        <SummaryPrice>$5.99</SummaryPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryText>Shipping Discount</SummaryText>
                        <SummaryPrice>$-5.99</SummaryPrice>
                    </SummaryItem>
                    <SummaryItem type = "total">
                        <SummaryText>Total</SummaryText>
                        <SummaryPrice>$-5.99</SummaryPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart