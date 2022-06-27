import React from 'react';
import Image from '../image/Image';

function Header(props) {
    return (
        <header>
            <Image img={props.img} />
            <div>
                <h4>{props.text}</h4>
                <h5>28 de Janeiro de 2022</h5>
            </div>
        </header>
    )
}

export default Header;