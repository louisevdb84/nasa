import {
    CHANGE_SEARCH_FIELD,
    REQUEST_IMAGES_FAILED,
    REQUEST_IMAGES_SUCCESS,
    REQUEST_IMAGES_PENDING


} from './constants';

const initialStateSearch = {
    searchField: ''
}

export const searchImages = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}

const initialStateRequestImage = {
    isPending: false,
    images: [],
    error: ''
}

export const requestImage = (state = initialStateRequestImage, action = {}) => {
    switch (action.type) {
        case REQUEST_IMAGES_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_IMAGES_SUCCESS:
            return Object.assign({}, state, { images: action.payload, isPending: true });
        case REQUEST_IMAGES_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state;
    }
}