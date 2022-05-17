import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    margin: 10px;
    background-color: #fefefe;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    background-color: #fefefe;
    object-fit: cover;
    border-radius: 5px;
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
`
const Button = styled.button`
    background-color: #ff6b6b;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #ff5252;
    }
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img} alt={item.title}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem