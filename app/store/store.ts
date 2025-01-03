import { create } from "zustand";

export type Todo = {
    id: number,
    text: string,
}

type TodoStore = {
    todos: Todo[],
    deleteTodo: (id: number) => void,
    addTodo: (text: string) => void,
    editTodo: (id: number, text: string) => void;
}

const useTodoStore = create<TodoStore>((set) => ({
    todos: [],
    addTodo: (text: string) => {
        if (text.trim() !== "") {
            set((state: TodoStore) => ({
                todos: [...state.todos, { id: Date.now(), text }],
            }));
        }
    },
    editTodo: (id: number, text: string) => {
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, text } : todo),
        }));
    },
    deleteTodo: (id: number) => {
        set((state: TodoStore) => ({ todos: state?.todos?.filter((todo) => todo.id !== id) }));
    }
}));

export default useTodoStore;