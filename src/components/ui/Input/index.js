import style from './css/style.module.css';

export default function Input ({
    type,
    placeholder,
    onKeyUp
}) {
    return (
        <>
            <input 
                className={style.input}
                type={type} 
                placeholder={placeholder}
                onKeyUp={onKeyUp}
            />
        </>
    );
}