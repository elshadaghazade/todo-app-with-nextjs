import { useCallback } from 'react';
import style from './css/style.module.css';

export default function Panel ({
    clearCompleted,
    itemCount,
    setFilter
}) {


    const onClick = useCallback(e => {
        e.preventDefault();
        clearCompleted();
    });


    return (
        <>
            <div className={style.container}>
                <div>{itemCount} items left</div>
                <div>
                    <button onClick={() => setFilter('all')}>all</button>
                    <button onClick={() => setFilter('active')}>Active</button>
                    <button onClick={() => setFilter('completed')}>Completed</button>
                </div>
                <div>
                    <a href='' onClick={onClick}>Clear completed</a>
                </div>
            </div>
        </>
    );
}