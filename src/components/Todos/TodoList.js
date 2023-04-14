import style from './css/style.module.css';

export default function TodoList ({
    children
}) {
    return (
        <>
            <ul className={style.container}>{children}</ul>
        </>
    );
}