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
    width: 40%;
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
    flex-wrap: wrap;
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

const Checkbox = styled.input `
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border-radius: 5px;
`

const Agreement = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px 0px;

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
    &:hover {
        background: #000;
        color: #fff;
    }
`

const Text = styled.span`
    font-size: 1em;
    font-weight: 300;
`
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Register</Title>
            <Form>
                <Input type="text" placeholder="First Name" />
                <Input type="text" placeholder="Last Name" />
                <Input type="email" placeholder="Email" />
                <Input type="text" placeholder="Username" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
                <Agreement>
                    <Checkbox type="checkbox" tintColors={{ true: '#black' }}/>
                    <Text>I agree to the <Link href="#">Terms of Service</Link> and <Link href="#">Privacy Policy</Link></Text>
                </Agreement>
            </Form>
            <Button>CREATE ACCOUNT</Button>

        </Wrapper>
    </Container>
  )
}

export default Register