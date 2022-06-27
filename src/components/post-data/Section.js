import React from 'react';
import Image from '../image/Image';
import ImageLink from '../image-link/ImageLink';

function Section(props) {
    return (
        <section>
            <p>{props.text}</p>
            <Image img={props.img} />
            <aside id="links">
                <ImageLink link={""} img={props.img1} text={"Like"} />
                <ImageLink link={""} img={props.img2} text={"Comment"} />
            </aside>
        </section>
    )
}

export default Section;
