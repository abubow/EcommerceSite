import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import styled from "styled-components";



const Circle = styled.div`
    width: 200px;
    height: 200px;
    background-color: #ff6b6b;
    border-radius: 50%;
    position: absolute;
    z-index: 0;
    `
const Image = styled.img`
    height: 75%;
    z-index: 1;
`
const Info = styled.div`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    background-color: #fafafa;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    cursor: pointer;

    &:hover {
        background-color: #ff6b6b;
        transition: background-color 0.5s ease-in-out;
        transform: scale(1.2);
    }
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fafafa;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    border-radius: 5px;

    &:hover ${Circle} {
        background-color: #ff6b6b;
        transition: all 0.5s ease-in-out;
        transform: scale(1.2);
    }
    &:hover ${Info} {
        opacity: 1;
        transition: all 0.5s ease-in-out;
    
`
const Product = ({item}) => {
  return (
    <div>
      <Container>
            <Circle/>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Container>
    </div>
  )
}

export default Product
