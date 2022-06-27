import React from 'react';
import Image from '../image/Image';
import Input from '../input/Input';

function Search(props) {
    return (
        <div id="div-input">
            <Image img={props.img} tam={"15"} />
            <Input placeholder={"Pesquisar no Facebook"} />
        </div>
    )
}

export default Search;
