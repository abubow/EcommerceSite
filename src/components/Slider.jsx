import styled from 'styled-components';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useState, useEffect } from 'react';
import { sliderData } from '../data';
const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #fafafa
    position: relative;
    &:hover {
        cursor: pointer;
        }
    overflow: hidden;
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
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: transform 1s ease-in-out;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background-color: ${props => props.bg};
`;

const ImgContainer = styled.div`
    flex: 1;
    background-color: #fafafa;
    height: 100%;
`;
const Image = styled.img`
    height: 100%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding 50px;
`;

const Title = styled.h1`
    font-size: 4rem;
    color: rgb(0, 0, 0);
`;
const Description = styled.p`
    margin: 50px 0;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 500;
`;

const Button = styled.button`
    background-color: teal;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1em;
    font-weight: 500;
`;


function Slider() {
    const [slideIndex, setSlideIndex] = useState(sliderData.length - 1);
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex(slideIndex => {
                if (slideIndex === sliderData.length - 1) {
                    return 0;
                }
                return slideIndex + 1;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex => {
                if (slideIndex === 0) {
                    return sliderData.length - 1;
                }
                return slideIndex - 1;
            });
        } else {
            setSlideIndex(slideIndex => {
                if (slideIndex === sliderData.length - 1) {
                    return 0;
                }
                return slideIndex + 1;
            });
        }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick('left')}>
            <ArrowBackIosNewRoundedIcon />
        </Arrow>

        <Wrapper slideIndex={slideIndex}>
            {sliderData.map((slide) => (
                <Slide bg={slide.bg}>
                    <ImgContainer>
                        <Image src={slide.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{slide.title}</Title>
                        <Description>{slide.description}</Description>
                        <Button>{slide.btnText}</Button>
                    </InfoContainer>
                </Slide>
            ))}

        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick('right')}>
            <ArrowForwardIosRoundedIcon />
        </Arrow>
    </Container>
  )
}

export default Slider
