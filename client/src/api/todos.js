import api from "./axios";

export const getTodos = async () => {
  const res = await api.get("/todos");
  return res.data;
};

export const createTodo = async (title) => {
  const res = await api.post("/todos", { title });
  return res.data;
};

export const updateTodo = async (id, changes) => {
  const res = await api.put(`/todos/${id}`, changes);
  return res.data;
};

export const deleteTodo = async (id) => {
  await api.delete(`/todos/${id}`);
};
