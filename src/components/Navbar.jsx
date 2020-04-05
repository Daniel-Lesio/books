import React , {useContext} from 'react'
import { BookContext } from '../contexts/BookContext'

export default function Navbar() {
    const {books} = useContext(BookContext)
    return (
        <header>
            Obecnie masz { books.length } książki
        </header>
    )
}
