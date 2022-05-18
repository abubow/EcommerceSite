import styled from "styled-components";
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    background-color: #fafafa;
    height: 40vh;
`
const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 20px;
`
const Description = styled.p`
    margin: 20px 0;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 1px;
`
const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    height: 40px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #e0e0e0;
    `
const Button = styled.button`
    background-color: transparent;
    flex: 1;
    border: none;
    cursor: pointer;
    `
const Input = styled.input`
    border: none;
    flex: 10;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum euismod, nisl sit amet consectetur
            consectetur, nisi eros lobortis nunc, eget
            consectetur nunc nisi eget eros.
        </Description>
        <InputContainer>
            <Input type="email" placeholder="Enter your email" />
            <Button>
                <SendIcon />
            </Button>
        </InputContainer>
    </Container>
    );
};
export default Newsletter
