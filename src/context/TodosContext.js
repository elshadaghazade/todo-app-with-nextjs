import { createContext, useReducer } from "react";


export const todoContext = createContext();

const initialState = {
    todos: [],
    filter: 'all'
}

function reducer (state, action) {
    switch (action.type) {
        case 'add_todo':
            const todo = {
                text: action.payload,
                isActive: true
            }

            var todos = [...state.todos, todo];
            return {
                ...state,
                todos
            }
        case 'set_filter':
            return {
                ...state,
                filter: action.payload
            }
        case 'clear_completed':
            return {
                ...state,
                todos: state.todos.filter(({isActive}) => isActive)
            }

        case 'deactivate':
            state.todos[action.payload].isActive = !state.todos[action.payload].isActive;

            return {
                ...state,
                todos: state.todos
            }

        default:
            return state;
    }
}


export default function TodoContext ({children}) {

    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <todoContext.Provider value={[state, dispatch]}>
            {children}
        </todoContext.Provider>
    );
}