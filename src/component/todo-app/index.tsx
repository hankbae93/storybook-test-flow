import React, {useEffect, useState} from 'react';
import {TodoList} from '../\btodo-list';
import {TodoData, TodoProps} from '../todo/type';
import axios, {AxiosRequestConfig} from "axios";

const fetchTodo = async (options: AxiosRequestConfig) => axios.get(`/todo`,options)

const TodoApp = () => {
  const [data, setData] = useState<TodoData[]>([]);


  const onArchiveTodo: TodoProps['onArchiveTodo'] = id => {
    setData(prev => {
      const newArr = [...prev];
      const index = newArr.findIndex(todo => todo.id === id);
      newArr[index].checked = !prev[index].checked;
      return newArr;
    });
  };

  const onEditTitle: TodoProps['onEditTitle'] = title => {};

  const onTogglePinTask: TodoProps['onTogglePinTask'] = id => {
    setData(prev => {
      const newArr = [...prev];
      const index = newArr.findIndex(todo => todo.id === id);
      newArr[index].pinned = !prev[index].pinned;
      return newArr;
    });
  };

  const events = {
    onArchiveTodo,
    onEditTitle,
    onTogglePinTask,
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

     fetchTodo({signal})
        .then(({ data }) => {
          console.log(data)
          setData(data.list)
        })
        .catch((error) => {
          if (!abortController.signal.aborted) {
            console.log(error);
          }
        });

    return () => {
      abortController.abort();
    };
  }, [])

  return (
    <div>
      <TodoList list={data} {...events} />
    </div>
  );
};

export default TodoApp;
