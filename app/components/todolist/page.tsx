"use client";

import {FC, useState} from "react";
import { Box, Typography, List, ListItem, Input, Button } from "@mui/material";
import useTodoStore from "../../store";

const Todolist: FC = () => {
    const todos = useTodoStore((state) => state.todos);
    const { addTodo, editTodo, deleteTodo } = useTodoStore();
    const [inputValue, setInputValue] = useState('');
    const [editId, setEditId] = useState<number | null>(null);

    const handleAddEdit = () => {
        if(editId){
            editTodo(editId, inputValue);
            setEditId(null);
        } else {
            addTodo(inputValue);
        }
        setInputValue("");
    }

    return (
        <Box sx={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 20}}>
            <Typography variant="h3" color="textSecondary">Todolist</Typography>
            <Box sx={{display: "flex", justifyContent: "center", marginTop: "3rem", marginBottom: "1rem"}}>
                <Input
                    sx={{marginRight: "1rem", width: 600}}
                    placeholder="Write New Task..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddEdit()}
                />
                <Button
                    sx={{width: "100px"}}
                    variant="contained"
                    onClick={handleAddEdit}
                >
                    {editId ? "Save" : "Add"}
                </Button>
                <Button
                    sx={{width: "100px", marginLeft: 1}}
                    variant="outlined"
                    onClick={() => {
                        setInputValue('');
                        setEditId(null);
                    }}
                >
                    Clear
                </Button>
            </Box>
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
        </Box>
    );
}

export default Todolist;