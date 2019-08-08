import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

const apiKey = 'ZiVYzNGovIia8j7qFkxGgbOA14zDFFMxCGcSLgYl';

class App extends Component {

    constructor() {
        super()
        this.state = {
            images: [],
        }

    }

    componentDidMount() {
        fetch('https://api.nasa.gov/planetary/apod?api_key=' + apiKey)
            .then(response => response.json())
            .then(a => {
                this.setState({ images: a });
            })
            .catch(err => {
                console.log(err)
            });
    }

    onSearchChange = (event) => {
        fetch('https://images-api.nasa.gov/search?q=' + event.target.value +'&media_type=image')
            .then(response => response.json())
            .then(a => {                
                this.setState({ images: a });
                
            })
            .catch(err => {
                console.log(err)
            });

    }

    render() {

        if (this.state.images.length === 0) {
            return <h1>Loading</h1>
        }
        else {
            return (
                <div className='tc pa3'>
                    <h1>NASA</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList images={this.state.images} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }
    }   

}

export default App;