import {useCallback, useState} from 'react';

import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import style from '@/styles/Home.module.css';
import TodoList from '@/components/Todos/TodoList';
import TodoItem from '@/components/Todos/TodoItem';
import Panel from '@/components/Panel';

export default function Home() {

  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const onKeyUp = useCallback(e => {
      if (e.key === 'Enter') {
        const todo = {
          text: e.target.value,
          isActive: true
        }

        const t = [...todos, todo];
        setTodos(t);
        e.target.value = '';
      }
  }, [todos]);

  
  const deactivate = index => {
    const t = [...todos];
    t[index].isActive = !t[index].isActive;
    setTodos(t);
  }

  const remove = index => {
    setTodos(state => state.filter((todo, i) => i != index));
  }

  const clearCompleted = useCallback(() => {
    setTodos(state => state.filter(({isActive}) => isActive))
  }, []);



  return (
    <div className={style.main}>
      <Heading>todos</Heading>
      <Input 
        placeholder={'What needs to be done?'}
        type={'text'}
        onKeyUp={onKeyUp}
      />

      <TodoList>
        {todos.filter(todo => {
          switch(filter) {
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
            deactivate={e => deactivate(index)} 
            remove={e => remove(index)}
            {...todo}
          >{todo.text}</TodoItem>
        ))}
      </TodoList>

      {todos.length ? 
      (
        <Panel 
          clearCompleted={clearCompleted} 
          itemCount={todos.filter(({isActive}) => isActive).length} 
          setFilter={setFilter}
        />
      ) : ''}
    </div>
  )
}
