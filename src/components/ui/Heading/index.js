import style from './css/style.module.css';

export default function Heading ({children}) {
    return (
        <h1 className={style.title}>{children}</h1>
    );
}