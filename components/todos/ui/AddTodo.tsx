import { Button, Flex, Grid, Input } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React from "react";
import todosStore from "../store/todosStore";

function AddTodo() {
  return (
    <>
      <Flex pt={2}>
        <Input
          mx={2}
          placeholder="New todo"
          value={todosStore.todo.text}
          onChange={(evt) => (todosStore.todo.text = evt.target.value)}
        />
        <Button
          onClick={() => {
            if (todosStore.todo.text === "") {
              return alert("todo empty");
            }
            return todosStore.addTodo();
          }}
        >
          Add Todo
        </Button>
      </Flex>
    </>
  );
}

export default observer(AddTodo);
