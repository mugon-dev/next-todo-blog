import {
  Button,
  Checkbox,
  Flex,
  Heading,
  HStack,
  Input,
  Spacer,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React from "react";
import { ITodoModel } from "../../../imodels/ITodoModel";
import todosStore from "../store/todosStore";

function TodoListItems() {
  return (
    <>
      {todosStore.todosList.map((todo: ITodoModel) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox position="static" />
          <Input
            position="static"
            mx={2}
            value={`${todo.id} ${todo.text}`}
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
      <HStack>
        <Heading>Todo List</Heading>
        <Spacer />
        <Button
          position={"static"}
          onClick={() => todosStore.getTodosFromApi()}
        >
          Load Todos From Api
        </Button>
      </HStack>
      <TodoListObserver />
    </>
  );
}
