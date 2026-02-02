import api from "./axios";

export const registerApi = (data) => {
  return api.post("/register", data);
};
export const message = (data) => {
  return api.post("/contacts/store", data, {
    headers: { "Content-Type": "application/json" },
  });
};

export const loginApi = (data) => {
  return api.post("/login", data);
};
export const getbooks = () => {
  return api.get("/home");
};
