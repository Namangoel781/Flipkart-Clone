import { Box, InputBase, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const SearchContainer = styled(Box)`
    display: flex;
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px
`;

const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
    color: blue;
    padding: 5px;
    display: flex;
`

const Search = () => {
  return (
    <SearchContainer>
        <InputSearchBase placeholder='Search for products,brands and more'/>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
    </SearchContainer>
    
      
  )
}

export default Search