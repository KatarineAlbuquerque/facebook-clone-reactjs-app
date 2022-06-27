import React from 'react';

function ImageLink(props) {
    return (
        <a href={props.link}>
            <img id={props.id} src={props.img} alt="Imagem" /> {props.text}
        </a>
    )
}

export default ImageLink;