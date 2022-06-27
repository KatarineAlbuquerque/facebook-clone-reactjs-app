import React from 'react';

function ImageLinkLi(props) {
    return (
        <li className={props.class}>
            <a href={props.link}>
                <img id={props.id} src={props.img} alt="Imagem" width={props.tam} />
                <p>{props.text}</p>
            </a>
        </li>
    )
}

export default ImageLinkLi;
