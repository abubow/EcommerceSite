import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh; 
    background:
    radial-gradient(black 3px, transparent 4px),
    radial-gradient(black 3px, transparent 4px),
    linear-gradient(#fff 4px, transparent 0),
    linear-gradient(45deg, transparent 74px, transparent 75px, #a4a4a4 75px, #a4a4a4 76px, transparent 77px, transparent 109px),
    linear-gradient(-45deg, transparent 75px, transparent 76px, #a4a4a4 76px, #a4a4a4 77px, transparent 78px, transparent 109px),
    #fff;
    background-size: 109px 109px, 109px 109px,100% 6px, 109px 109px, 109px 109px;
    background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    `

const Wrapper = styled.div`
    padding: 20px;
    width: 30%;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5); 
`

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    &:focus {
        outline: none;
        border: 1px solid #000;
    }
`

const Button = styled.button`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background: #fff;
    color: #000;
    font-weight: 500;
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        background: #000;
        color: #fff;
        border: 1px solid #000;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    }
    &:focus {
        outline: none;
        border: 1px solid #000;
        box-shadow: none;
        font-weight: 500;
    }


`
const Link = styled.a`
    text-decoration: none;
    color: #000;
    transition: color 0.2s ease-in-out;
    border-radius: 5px;
    width: 50%;
    padding: 5px;
    margin: 5px 0px;
    font-size: 0.8rem;
    &:hover {
        background: #000;
        color: #fff;
    }
`
const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input type="text" placeholder="Username" />
                <Input type="password" placeholder="Password" />
            </Form>

            <Button>LOGIN</Button>
                <Link>Forgot Password?</Link>
                <Link>Create Account</Link>
        </Wrapper>
    </Container>
  )
}

export default Login