import {
    CHANGE_SEARCH_FIELD,
    REQUEST_IMAGES_FAILED,
    REQUEST_IMAGES_SUCCESS,
    REQUEST_IMAGES_PENDING,
    apiKey

} from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestImageOfTheDay = () => (dispatch) => {
    dispatch({ type: REQUEST_IMAGES_PENDING });
    fetch('https://api.nasa.gov/planetary/apod?api_key=' + apiKey)
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_IMAGES_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_IMAGES_FAILED, payload: error }))
}

export const requestImages = (searchImg) => (dispatch) => {
    dispatch({ type: REQUEST_IMAGES_PENDING });
    fetch('https://images-api.nasa.gov/search?q=' + searchImg + '&media_type=image')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_IMAGES_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_IMAGES_FAILED, payload: error }))
}


