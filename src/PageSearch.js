import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { search } from './BooksAPI'
import { ElementBookThumb } from './ElementBookThumb'
import './App.js'




export class PageSearch extends Component {

    constructor(props){
        super(props)

        this.state = {
            query_result: []
        }
    }
    

    onInputChange(event) {
        const val = event.target.value

        if (val === '') {
            this.setState({
                query_result: []
            })
            return
        }

        // search() func from the BooksAPI
        search(val).then( result => {
            if (Array.isArray(result)){
                this.setState({
                    query_result: result
                })

            } else {
                this.setState({
                    query_result: []
                })
            }
        
        })
    }



    render() {
        const book_list = this.state.query_result.map( book => {
            return (
                <li><ElementBookThumb book={book} update_callback={() => {}}/></li>
            )
        })

        return (
            <div className="search-books">

                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>

                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" placeholder="Search by title or author" onChange={event => this.onInputChange(event)}/>
                    </div>
                </div>

                <div className="search-books-results">
                    {this.state.query_result.length? (
                        <ol className="books-grid">{ book_list }</ol>
                    ):(
                        <p>Nothing to see here.</p>
                    )}
                </div>
            </div>)
    }
}