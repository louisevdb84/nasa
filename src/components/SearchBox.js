import React, { Component } from 'react';

class SearchBox extends Component {

    render() {       
        return (
            <div className = 'pa2'>            
                <input
                    className='pa3 ba bg-green bg-lightest-blue'
                    type='search'
                    placeholder='Search type e.g. Mars'
                    onChange={this.props.searchChange}/>
            </div>
        )
    }
}

export default SearchBox;