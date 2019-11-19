import axios from 'axios';
const state = {
    first: 1,
    last: 25
}
// export const fetchPhotos = (imagesArray) => dispatch => {
export const fetchPhotos = () => dispatch => {
    console.log('fetch photos');
    axios.get(`http://localhost:4000/api/photos?last=${state.last}&first=${state.first}`)
        .then(posts => dispatch({
            type: 'NEW_IMAGES',
            payload: posts.data
            // payload: imagesArray.concat(posts.data)
        }));
}

export const fetchNextPhotos = (imagesArray) => dispatch => {
    var { first, last } = state;
    var firstt = first + last;
    console.log(firstt)
    axios.get(`http://localhost:4000/api/photos?last=${last}&first=${firstt}`)
        .then(res =>
            dispatch({
                type: "NEXT_PHOTOS",
                payload: imagesArray.concat(res.data)
            })
        );
}
