import TodoContext from '@/context/TodosContext';
import '@/styles/globals.css';


export default function App({ Component, pageProps }) {

  return (
    <TodoContext>
      <Component {...pageProps} />
    </TodoContext>
  );
}
