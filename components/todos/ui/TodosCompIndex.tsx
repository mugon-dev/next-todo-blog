import { Box } from "@chakra-ui/react";
import React from "react";
import { ITodoModel } from "../../../imodels/ITodoModel";
import todosStore from "../store/todosStore";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodosCompIndex = ({ myTodosList }: { myTodoList: ITodoModel[] }) => {
  //   todosStore.todosList = myTodosList;
  return (
    <>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TodoList />
        <AddTodo />
      </Box>
    </>
  );
};

export default TodosCompIndex;
