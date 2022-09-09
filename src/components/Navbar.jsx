import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from '../responsive'
const Container = styled.div`
    height: 60px;
    border-bottom: 1px solid #e5e5e5;
    ${mobile({ height: '50px' })};

`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({ padding: '10px 0px' })};
    `;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 12px;
    cursor: pointer;
    ${mobile({ display: "none" })};
`;
const SearchContainer = styled.div`
    border: 0.5px solid #e5e5e5;
    border-radius: 5px;
    padding: 5px;
    margin-left: 25px;
    align-items: center;
`;
const Input = styled.input`
    border: 0;
    outline: 0;
    background: transparent;
    color: #000;
    ${mobile({ width: '50px' })};
`;
const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Logo = styled.div`
    font-size: 20px;
    font-weight: bold;
    cursor: pointer; 
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ justifyContent: 'center', flex: 2 })}
`;
const MenuItem = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-right: 15px;
    &:last-child {
        margin-right: 0;
    }   
    ${mobile({ fontSize: '12px', marginRight: '5px' })}; 
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>En</Language>
                <SearchContainer>
                    <Input placeholder="Search" />
                    <SearchIcon style={{marginLeft: 5, cursor: 'pointer', color: 'grey', fontSize: '20px'}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>AARAASTA.</Logo>
            </Center>
            <Right>
                <MenuItem>
                    Register
                </MenuItem>
                <MenuItem>
                    Login
                </MenuItem>

                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar