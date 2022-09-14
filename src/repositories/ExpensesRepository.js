import api from "../services/api";

export async function getExpenses(setData) {
  return await api.get("/expense");
}
