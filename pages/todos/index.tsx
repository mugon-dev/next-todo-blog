import axios from "axios";
import { GetStaticProps } from "next";
import React from "react";
import TodosCompIndex from "../../components/todos/ui/TodosCompIndex";
import { ITodoModel } from "../../imodels/ITodoModel";

export default function TodosIndex({ todosList }: { todosList: ITodoModel[] }) {
  return (
    <>
      <TodosCompIndex />
      {todosList.map((todo: ITodoModel) => (
        <h1 key={todo.id}>{todo.text}</h1>
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  console.log(
    `getStaticProps function runs in server. Verify by checking that this statement is printed in vs code terminal only and not in browser console`
  );
  const apiUrl =
    "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json";
  const todosListFromApi = await axios.get(apiUrl);
  const todosList: ITodoModel[] = todosListFromApi.data;

  if (!todosList) {
    return {
      notFound: true,
    };
  }
  return {
    props: { todosList }, // will be passed to the page component as props
  };
};
