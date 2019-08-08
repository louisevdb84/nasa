import React, { Component } from 'react';

class Card extends Component {
    render() {        
        const { explanation, title, url } = this.props;
        return (
            <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5 w-70'>
                <h2>{title}</h2>
                <img className='w-60' alt='Pic of the day' src={url}></img>
                <p>{explanation}</p>
            </div>
        );
    }
}

export default Card;