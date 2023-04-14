import style from './css/style.module.css';

export default function TodoItem ({
    children,
    text,
    isActive,
    deactivate,
    remove
}) {
    return (
        <>
            <li className={`${style.todoItem} ${!isActive && style.completed}`}>
                <div onClick={deactivate}>{children}</div>
                <div>
                    <button onClick={remove}>X</button>
                </div>
            </li>
        </>
    );
}