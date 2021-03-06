import React, {Component} from "react";
import PhotoItem from "./PhotoItem";
import NoResults from "./NoResults";

// This component mounts the container that will hold the fetched images

class PhotoContainer extends Component {

    componentDidMount() {
        this.props.onMounting(this.props.tag);
    }

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
                    {
              (this.props.isLoading) 
              ? <h1 style={{margin: "25px auto" }}>Loading.....</h1> 
              : this.printImages()
              
            }
                       
                </ul>
            </div>
        );
    }
}

export default PhotoContainer;