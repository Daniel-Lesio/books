import { v4 as uuid } from 'uuid';
export const bookReducer = (state,action) => {
    switch(action.type){
        case 'ADD_BOOK':
            return [...state, {
                id : uuid(),
                title : action.book.author,
                author : action.book.title
            }]
        case 'REMOVE_BOOK' :
            return state.filter(book=>book.id !== action.id)
        default : 
            return state
    }
} 