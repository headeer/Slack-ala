import React from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';

function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <UserIcon
                    //TODO: add onclick
                />
                <AccessTimeIcon/>
            </HeaderLeft>

            <HeaderSearch>
                <SearchIcon/>
                <input placeholder='Search'/>
            </HeaderSearch>

            <HeaderRight>
                <HelpIcon/>
            </HeaderRight>
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  background: var(--slack-color);
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px
  }
`;
const UserIcon = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6.6px;
  background: #421f44;
  text-align: center;
  padding: 0 50px;
  display: flex;
  color: gray;
  border: 1px solid grey;

  > input {
    background: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  flex: 0.3;
  align-items: flex-end;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
    
  }
`;
