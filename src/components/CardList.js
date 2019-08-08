import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
    render() {

        const { images } = this.props;
        return (
            <div>
                {
                    images.collection ?
                        images.collection.items.map((img, i) => { 
                            return <Card key={i} explanation={img.data[0].description} title={img.data[0].title} url={img.links[0].href} />
                        })
                        :
                        <Card explanation={images.explanation} title={images.title} url={images.url} />
                }
            </div>
        )
    }
}

export default CardList;