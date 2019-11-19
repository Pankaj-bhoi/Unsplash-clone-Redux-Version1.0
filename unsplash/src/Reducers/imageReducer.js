const initialState = {
    images: []
}

const imagesReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'NEW_IMAGES':
            return Object.assign({}, state, {
               images: action.payload
            })

        default:
            return state;
        }
    }

export default imagesReducer;