import React from "react";

export default function Image(props){
    return (
        <div className="images">
            <img src={props.src} alt="Meme Image" width="600px" />
            <h2 className="memeText top">{props.topText}</h2>
            <h2 className="memeText bottom">{props.bottomText}</h2>
        </div>  
    )
}