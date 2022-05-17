import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`
const Left = styled.div`
    flex: 1;
`

const Logo = styled.h1``
const Description = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;

`
const SocialIcon = styled.div`
    cursor: pointer;
    width: 40px;
    height: 40px;
`

const Title = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
`

const Center = styled.div`
    flex: 1;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                SYEDANI.
            </Logo>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum euismod, nisl sit amet consectetur
                consectetur, nisi eros lobortis nunc, eget
                consectetur nunc nisi eget eros.
            </Description>
            <SocialContainer>
                <SocialIcon>
                    <FacebookIcon />
                </SocialIcon>
                <SocialIcon>
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon>
                    <TwitterIcon />
                </SocialIcon>
                <SocialIcon>
                    <PinterestIcon />
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>
                    Home
                </ListItem>
                <ListItem>
                    About Us
                </ListItem>
                <ListItem>
                    Contact Us
                </ListItem>
                <ListItem>
                    Privacy Policy
                </ListItem>
                <ListItem>
                    Terms & Conditions
                </ListItem>
            </List>
        </Center>
        <Right>

        </Right>
    </Container>
  )
}

export default Footer
