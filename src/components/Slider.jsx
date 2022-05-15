import styled from 'styled-components';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #fafafa
    position: relative;
    &:hover {
        cursor: pointer;
        }
`;

const Arrow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fafafa;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;

const Wrapper = styled.div`
    height: 100%;
`;

const Slide = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const ImgContainer = styled.div`
    flex: 1;
    background-color: #fafafa;
    height: 100%;
`;
const Image = styled.img`
    height: 100%;
    width: 100%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding 50px;
`;

const Title = styled.h1`
    font-size: 2em;
    color: rgb(0, 0, 0);
`
const Description = styled.p`
    margin: 50px 0;
    font-size: 20px;
`

const Button = styled.button`
    background-color: #fafafa;
    border: none;
    `


function Slider() {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowBackIosNewRoundedIcon />
        </Arrow>

        <Wrapper>
            <Slide>
                <ImgContainer>
                    <Image src= "https://i.ibb.co/4mKC0LV/woman-Smile.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>SUMMER SALE</Title>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam iste iure non odit minima, numquam exercitationem laboriosam facilis, reprehenderit perspiciatis quos, fugit fuga aliquam quod magni dolores eius eaque. Harum vel itaque provident ad atque, cupiditate tenetur iste ea corrupti deserunt pariatur illum perferendis eaque asperiores reiciendis nisi soluta labore sint porro aut. Mollitia iusto ipsam, delectus corrupti, amet autem omnis quidem aperiam quo qui corporis placeat natus perferendis? Libero amet necessitatibus ducimus, fugit asperiores tenetur dicta iusto in quo veritatis provident deserunt voluptatum harum? Placeat inventore eligendi id reprehenderit laborum cupiditate exercitationem, deleniti optio harum facilis provident nam sunt!</Description>
                    <Button>Buy now</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowForwardIosRoundedIcon />
        </Arrow>
    </Container>
  )
}

export default Slider
