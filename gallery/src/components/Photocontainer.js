import React from "react";
import PhotoItem from "./PhotoItem";
import NoResults from "./NoResults";

// This component mounts the container that will hold the fetched images

const photoContainer = (props) => {

    const images = props.images;
    let imagesList;

    // Iterates over the images array and returns a PhotoItem for each image
    if (images.length === 0) {
        imagesList = <NoResults />
    } else {
        imagesList = images.map(img => <PhotoItem images={img} key={img.id}/>);
    }

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