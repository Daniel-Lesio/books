import React ,{useContext} from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails'
export default function BookList() {
    const {books} = useContext(BookContext);
    return books.length ?  ( 
    <ul>
        {books.map(book=><BookDetails key={book.id} book={book} />)}
    </ul>
    ) : ( <h1>nie ma nic</h1> )
}
