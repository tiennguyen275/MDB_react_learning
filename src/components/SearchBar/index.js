import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//Image
import searchIcon from '../../images/search-icon.svg';
//style
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    const initial = useRef(true); // muteable value (đối tượng thay đổi dc), wont trigger re-render

    useEffect(() => {
        if(initial.current){
            initial.current = false; // wont trigger re-render when change directly
            return;
        } // skip initial render in use effect - hàm này chạy giúp cho việc re-render chỉ xảy ra khi người dùng đã ngừng nhập dữ liệu
        const timer = setTimeout(() => {
            setSearchTerm(state);
        },500)   // time out 0.5s

        return () => clearTimeout(timer); // clear time out when re-render

    },[setSearchTerm, state])

    return(
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon'/>
                <input type='text' 
                placeholder='Search Movie'
                onChange={e => setState(e.currentTarget.value)} // get value when change 
                value={state}
                />
            </Content>
        </Wrapper>
    )
}

SearchBar.propTypes = {
    setSearchTerm: PropTypes.func,
}

export default SearchBar;
