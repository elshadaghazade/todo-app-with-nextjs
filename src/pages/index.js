import {useCallback, useContext, useState} from 'react';

import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import style from '@/styles/Home.module.css';
import TodoList from '@/components/Todos/TodoList';
import TodoItem from '@/components/Todos/TodoItem';
import Panel from '@/components/Panel';
import { todoContext } from '@/context/TodosContext';

export default function Home() {


  const [todos, setTodos] = useState([]);

  const [state, dispatch] = useContext(todoContext);

  const onKeyUp = useCallback(e => {
      if (e.key === 'Enter') {
        dispatch({
          type: 'add_todo',
          payload: e.target.value
        });
        
        e.target.value = '';
      }
  }, []);

  const remove = index => {
    setTodos(state => state.filter((todo, i) => i != index));
  }



  return (
    <div className={style.main}>
      <Heading>todos</Heading>
      <Input 
        placeholder={'What needs to be done?'}
        type={'text'}
        onKeyUp={onKeyUp}
      />

      <TodoList>
        {state.todos.filter(todo => {
          switch(state.filter) {
            case 'all':
              return true;
            case 'active':
              return todo.isActive;
            case 'completed':
              return !todo.isActive;
          }
        }).map((todo, index) => (
          <TodoItem
            key={`todo-${index}`}
            index={index}
            remove={e => remove(index)}
            {...todo}
          >{todo.text}</TodoItem>
        ))}
      </TodoList>

      {state.todos.length ? 
      (
        <Panel />
      ) : ''}
    </div>
  )
}
