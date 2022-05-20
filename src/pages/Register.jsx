import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh; 
    
`

const Wrapper = styled.div`

`

const Title = styled.h1`
`

const Form = styled.form``
const Input = styled.input`
`

const Agreement = styled.div``

const Button = styled.button`
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
                    <Input type="checkbox" />
                    <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
                </Agreement>
            </Form>
            <Button>Create Account</Button>

        </Wrapper>
    </Container>
  )
}

export default Register