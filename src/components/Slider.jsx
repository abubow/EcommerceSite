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
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const ImgContainer = styled.div`
    flex: 1;
    background-color: #fafafa;
    width: 100%;
    height: 100%;
`;
const Image = styled.img`
    height: 100%;
    width: 100%;
`;

const InfoContainer = styled.div`
    flex: 1;
`;

function Slider() {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowBackIosNewRoundedIcon />
        </Arrow>

        <Wrapper>
            <Slide>
                <ImgContainer>
                    <Image src= "https://github.com/smainc/EcommerceSite/blob/main/images/womanJump.png" />
                </ImgContainer>
                <InfoContainer>
                    A cute cat.
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
