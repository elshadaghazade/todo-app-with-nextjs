import { useCallback, useContext } from 'react';
import style from './css/style.module.css';
import { todoContext } from '@/context/TodosContext';

export default function TodoItem ({
    children,
    text,
    index,
    remove
}) {


    const [state, dispatch] = useContext(todoContext);

    const deactivate = useCallback(() => dispatch({
        type: 'deactivate',
        payload: index
    }), [index]);

    return (
        <>
            <li className={`${style.todoItem} ${!state.todos[index].isActive && style.completed}`}>
                <div onClick={deactivate}>{children}</div>
                <div>
                    <button onClick={remove}>X</button>
                </div>
            </li>
        </>
    );
}