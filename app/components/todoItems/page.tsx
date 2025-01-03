"use client"

import { FC } from "react";
import { Todo } from '../../store';
import { Box, Button, List, ListItem, Typography } from "@mui/material";

type TodoItemsProps = {
    todos: Todo[];
    setInputValue: (value: string) => void;
    setEditId: (id: number | null) => void;
    deleteTodo: (id: number) => void;
}

const TodoItems: FC<TodoItemsProps> = ({todos, setInputValue, setEditId, deleteTodo}) => {
    return (
        <List sx={{width: "80%"}}>
            {todos?.map((todo) => (
                <ListItem key={todo.id} sx={{left: 0, borderBottom: '1px solid #999', display: "flex", justifyContent: "space-between",}} >
                    <Typography>{todo.text}</Typography>
                    <Box>
                        <Button
                            variant="outlined"
                            color="success"
                            onClick={() => {
                                setInputValue(todo.text);
                                setEditId(todo.id);
                            }}
                        >
                            Edit
                        </Button>
                        <Button
                            sx={{marginLeft: 1}}
                            variant="outlined"
                            color="error"
                            onClick={() => deleteTodo(todo.id)}
                        >
                            Delete
                        </Button>
                    </Box>
                </ListItem>
            ))}
        </List>
    )
}

export default TodoItems;