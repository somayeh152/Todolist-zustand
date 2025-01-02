"use client";

import {Box, Button, List, ListItem, Typography} from "@mui/material";
import useTodoStore from "@/app/store";

const TodoItem = () => {
    const todos = useTodoStore((state) => state.todos);
    const { editTodo, deleteTodo } = useTodoStore();

    return (
        <List sx={{width: "80%"}}>
            {todos?.map((todo) => (
                <ListItem key={todo.id} sx={{left: 0, borderBottom: '1px solid #999', display: "flex", justifyContent: "space-between",}} >
                    <Typography>{todo.text}</Typography>
                    <Box>
                        <Button
                            variant="outlined"
                            onClick={() => editTodo(todo.id, todo.text)}
                        >
                            Edit
                        </Button>
                        <Button
                            sx={{marginLeft: 1}} variant="outlined"
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

export default TodoItem;