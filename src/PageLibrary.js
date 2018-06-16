import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ElementBookThumb } from './ElementBookThumb'
import { ElementBookShelf } from './ElementBookShelf'
import './App.css'
import { getAll } from './BooksAPI';




export class PageLibrary extends Component {

    constructor(props) {
        super(props)

        this.shelves = {want: 'wantToRead', reading: 'currentlyReading', read: 'read'}

        this.state = {
            my_books: []
        }

        this.update_library = () => {
            getAll().then(data => { this.setState({my_books: data}) })
        }
        
        this.update_library()
    }



    render() {
        const reading = this.state.my_books.filter( book => book.shelf === this.shelves.reading)
        const read    = this.state.my_books.filter( book => book.shelf === this.shelves.read)
        const want    = this.state.my_books.filter( book => book.shelf === this.shelves.want)

        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                    <ElementBookShelf title='Reading'      data={reading} update_callback={this.update_library}/>

                    <ElementBookShelf title='Want to read' data={want}    update_callback={this.update_library}/>

                    <ElementBookShelf title='Read'         data={read}    update_callback={this.update_library}/>
                </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}