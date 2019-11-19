const initialState = {
    images: [],
    first: 1,
    last: 25
}

const imagesReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'NEW_IMAGES':
            return Object.assign({}, state, {
                images: action.payload
            })

        case 'NEXT_PHOTOS':
            const { first, last } = state;
            const firstt = first + last
            return Object.assign({}, state, {
                images: action.payload,
                first: firstt
            })

        default:
            return state;
    }
}

export default imagesReducer;