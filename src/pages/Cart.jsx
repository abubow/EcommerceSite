import styled from "styled-components"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
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
`

const Bottom = styled.div``

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

            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart