import { useCallback, useContext } from 'react';
import style from './css/style.module.css';
import { todoContext } from '@/context/TodosContext';

export default function Panel () {

    const [state, dispatch] = useContext(todoContext);


    const onClick = useCallback(e => {
        e.preventDefault();
        dispatch({type: 'clear_completed'})
    });


    return (
        <>
            <div className={style.container}>
                <div>{state.todos.filter(({isActive}) => isActive).length} items left</div>
                <div>
                    <button onClick={() => dispatch({type: 'set_filter', payload: 'all'})}>all</button>
                    <button onClick={() => dispatch({type: 'set_filter', payload: 'active'})}>Active</button>
                    <button onClick={() => dispatch({type: 'set_filter', payload: 'completed'})}>Completed</button>
                </div>
                <div>
                    <a href='' onClick={onClick}>Clear completed</a>
                </div>
            </div>
        </>
    );
}