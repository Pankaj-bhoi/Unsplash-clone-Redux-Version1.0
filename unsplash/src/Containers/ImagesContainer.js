import Images from './../Components/Images'
import { connect } from 'react-redux'
import { fetchPhotos, fetchNextPhotos } from '../Actions/imageAction'

const mapStateToProps = state => ({
  images: state.imagesReducer.images,
})

const mapDispatchToProps = dispatch => {
  return {
    // fetchPhotos: (imagesArray) => dispatch(fetchPhotos(imagesArray))
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchNextPhotos: (imagesArray) => dispatch(fetchNextPhotos(imagesArray))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Images)

