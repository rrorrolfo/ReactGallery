import React from "react";

//This component mounts a single list item with an image requested

const PhotoItem = (props) => {

    return (
        <li>
            <img src={`https://farm${props.images.farm}.staticflickr.com/${props.images.server}/${props.images.id}_${props.images.secret}.jpg`} alt={props.images.title} />
        </li>
    );

}

export default PhotoItem;