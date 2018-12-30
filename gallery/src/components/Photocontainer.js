import React from "react";
import PhotoItem from "./PhotoItem";

// This component mounts the container that will hold the fetched images

const photoContainer = (props) => {

    const images = props.images;

    // Iterates over the images array and returns a PhotoItem for each image
    const imagesList = images.map(img => <PhotoItem images={img} key={img.id}/>);

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {/* Here go the requested images*/}
                {imagesList}
            </ul>
        </div>
    );
}

export default photoContainer;