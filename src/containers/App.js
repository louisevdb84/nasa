import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import { connect } from 'react-redux';
import { setSearchField, requestImageOfTheDay, requestImages } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchImages.searchField,

        images: state.requestImage.images,
        isPending: state.requestImage.isPending,
        error: state.requestImage.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestImageOfTheDay: () => dispatch(requestImageOfTheDay()),
        onRequestImages: (event) => dispatch(requestImages(event.target.value))
    }
}

class App extends Component {

    constructor() {
        super()
        this.state = {
            images: [],
        }
    }

    componentDidMount() {
        this.props.onRequestImageOfTheDay();
    }

    onSearchChange = (event) => {
        this.props.onRequestImages(event);
    }

    render() {
        const { images} = this.props
        if (!images) {
            return <h1>Loading</h1>
        }
        else {
            return (
                <div className='tc pa3'>
                    <h1>NASA</h1>
                    <SearchBox searchChange={this.onSearchChange} />                   
                            <CardList images={images} />                   
                </div>
            )
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);