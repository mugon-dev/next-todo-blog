import { Box } from "@chakra-ui/react";
import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodosCompIndex = () => {
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
