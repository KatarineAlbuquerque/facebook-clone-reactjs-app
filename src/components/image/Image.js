import React from 'react';

function Image(props) {
    return (
        <img id={props.id} className={props.class} src={props.img} alt="Imagem" width={props.tam} />
    )
}

export default Image;