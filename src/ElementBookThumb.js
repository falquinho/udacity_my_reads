import React, { Component } from 'react'
import { update } from './BooksAPI'




export class ElementBookThumb extends Component {

    onSelectChange(event) {
        const val = event.target.value
        console.log('onSelectChange() val:', val)

        if (val === this.props.book.shelf) {
            console.log('onSelectChange(): already is this category.')
            return
        }

        update(this.props.book, val).then(result => {
            console.log(result)
            this.props.update_callback()
        })
    }
    


    render() {
        // Make a copy to make code cleaner
        const book = this.props.book
        const cover_url = 'url('+ book.imageLinks.thumbnail +')'

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: cover_url }}>
                    </div>
                    <div className="book-shelf-changer">
                    <select onChange={ event => this.onSelectChange(event) }>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading" disabled={(book.shelf === 'currentlyReading')}>Currently Reading</option>
                        <option value="wantToRead"       disabled={(book.shelf === 'wantToRead')}>Want to Read</option>
                        <option value="read"             disabled={(book.shelf === 'read')}>Read</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{ this.props.book.title }</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        )
    }
}