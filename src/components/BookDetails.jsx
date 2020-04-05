import React , {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({book}) => {
    const {dispatch} = useContext(BookContext)
    
    return (
      <li className='card' onClick={()=>dispatch({ type : 'REMOVE_BOOK' , id : book.id },)} >
          <h4>{book.title}</h4>
          <p>{book.author}</p>
      </li>
    );
}

export default BookDetails;
