import { Button, Checkbox, Flex, Heading, Input } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React from "react";
import todosStore, { ITodoModel } from "../store/todosStore";

function TodoListItems() {
  return (
    <>
      {todosStore.todosList.map((todo: ITodoModel) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox position="static" />
          <Input
            position="static"
            mx={2}
            value={todo.text}
            onChange={(evt) => DOMRectReadOnly}
          />
          <Button
            position="static"
            onClick={() => todosStore.deleteTodo(todo.id)}
          >
            Delete
          </Button>
        </Flex>
      ))}
    </>
  );
}

const TodoListObserver = observer(TodoListItems);

export default function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListObserver />
    </>
  );
}
