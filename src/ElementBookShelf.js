import React, { Component } from 'react'
import { ElementBookThumb } from './ElementBookThumb'




export class ElementBookShelf extends Component {

    render() {
        const book_list = this.props.data.map( e => (
            <li><ElementBookThumb book={e} update_callback={this.props.update_callback}/></li>
        ))

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {book_list}
                    </ol>
                </div>
            </div>
        )
    }
}