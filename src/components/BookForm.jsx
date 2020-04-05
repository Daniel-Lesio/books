import React , {useContext,useState} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const { dispatch } = useContext(BookContext)
    const [title , setTitle] = useState('')
    const [author , setAuthor] = useState('')
    const save = (e)=>{
        e.preventDefault()
        if(!title || !author) return
        dispatch({type :'ADD_BOOK', book : {
            title,author 
        }})        
        setTitle('')
        setAuthor('')

    }

    return (
        <form  className='mx-auto form'  >
            <input  type="text" value={title}  onChange={(e)=>setTitle(e.target.value)} required/>
            <input  type="text" value={author}  onChange={(e)=>setAuthor(e.target.value) } required />
            <input type="submit" onClick={save} value="Click" className='btn'/>
        </form>
        
    );
}

export default BookForm;
