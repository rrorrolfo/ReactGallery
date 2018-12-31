import React, {Component} from "react";
import PhotoItem from "./PhotoItem";
import NoResults from "./NoResults";

// This component mounts the container that will hold the fetched images

class PhotoContainer extends Component {

    printImages() {
        const images = this.props.images;
        let imagesList = "";

        // Iterates over the images array and returns a PhotoItem for each image
        if (images.length === 0) {
            imagesList = <NoResults />
            return imagesList
        } else {
            imagesList = images.map(img => <PhotoItem images={img} key={img.id}/>);
            return imagesList
        }
    }
    

    render() {
        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    {/* Here go the requested images*/}
                       {this.printImages()}
                </ul>
            </div>
        );
    }
}

export default PhotoContainer;