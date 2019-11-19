import React, { Component } from 'react'
import axios from 'axios';
import Image from './Image';
import '../style/images.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImageSingle from './Image';
import { fetchPhotos, fetchNextPhotos } from '../Actions/imageAction';
// import { store } from '../store';
// console.log(store);
class Images extends Component {
    state = {
        // images: [],
        first: 1,
        last: 25
    };
    componentDidMount() {
        // this.props.fetchPhotos(this.props.images);
        this.props.fetchPhotos();
        // this.props.fetchPhotos;
        // const { first, last } = this.state;
        // axios.get(`/api/photos?last=${last}&first=${first}`)
        //     .then(res => this.setState({ images: res.data }));
    }
    fetchData = () => {
        this.props.fetchNextPhotos(this.props.images);
        // const { first, last } = this.state;
        // this.setState({ first: this.state.first + last });

        // axios.get(`http://localhost:4000/api/photos?last=${last}&first=${first}`)
        //     .then(res => {
        //         console.log(res);
        //         this.setState({ images: this.state.images.concat(res.data) })
        //     }
        //     );
    }
    render() {
        return (
            <div className="images">
                <InfiniteScroll
                    dataLength={this.props.images.length} //This is important field to render the next data
                    // next={this.props.fetchPhotos(this.props.images)}
                    // next={this.props.fetchNextPhotos()}
                    next={this.fetchData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    <ResponsiveMasonry>
                        <Masonry >
                            {this.props.images.map(img => (
                                <ImageSingle key={img.id} image={img} className="images" />
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </InfiniteScroll>
            </div>
        )
    }
}

export default Images
