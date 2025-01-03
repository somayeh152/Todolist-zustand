"use client"

import { FC, useState } from "react";
import { Box, Typography } from "@mui/material";
import useTodoStore from "../../store/store";
import ToDoForm from "@/app/components/todoForm/todoForm";
import TodoItems from "@/app/components/todoItems/todoItems";

const ToDoList: FC = () => {
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

    const clearForm = () => {
        setInputValue('');
        setEditId(null);
    }

    return (
        <Box sx={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "4rem"}}>
            <Typography variant="h3" color="textSecondary">Todolist</Typography>
            <ToDoForm
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleAddEdit={handleAddEdit}
                editId={editId}
                clearForm={clearForm}
            />
            <TodoItems
                todos={todos}
                setInputValue={setInputValue}
                setEditId={setEditId}
                deleteTodo={deleteTodo}
            />
        </Box>
    );
}

export default ToDoList;