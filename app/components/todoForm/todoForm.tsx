"use client"

import { FC, useRef, useEffect } from "react";
import { Box, Button, Input } from "@mui/material";

type ToDoFormProps = {
    inputValue: string;
    setInputValue: (value: string) => void;
    handleAdd: () => void;
    handleEdit: () => void;
    editId: number | null;
    clearForm: () => void;
}

const ToDoForm: FC<ToDoFormProps> = ({ inputValue, setInputValue, handleAdd, handleEdit, editId, clearForm}) => {
    const todoRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if(todoRef.current){
            todoRef.current.focus();
        }
    }, [editId]);

    return (
        <Box sx={{display: "flex", justifyContent: "center", marginTop: "3rem", marginBottom: "1rem"}}>
            <Input
                sx={{marginRight: "1rem", width: 600}}
                placeholder="Write New Task..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                inputRef={todoRef}
                onKeyDown={(e) => e.key === 'Enter' && (editId? handleEdit() : handleAdd())}
            />
            <Button
                sx={{width: "100px"}}
                variant="contained"
                onClick={editId ? handleEdit : handleAdd}
            >
                {editId ? "Save" : "Add"}
            </Button>
            <Button
                sx={{width: "100px", marginLeft: 1}}
                variant="outlined"
                onClick={clearForm}
            >
                Clear
            </Button>
        </Box>
    )
}

export default ToDoForm;