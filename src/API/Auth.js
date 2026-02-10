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
export const EmailApi = (data) => {
  return api.post("/forget-password", data);
};
export const ResetPassword = (data) => {
  return api.post("/otp", data);
};
export const nowPassword = (data) => {
  return api.post("/reset-password", data);
};

export const getbooks = () => {
  return api.get("/home");
};
export const profile = () => {
  const token = localStorage.getItem("token");
  return api.get("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const updateprofile = (data) => {
    const token = localStorage.getItem("token");

  return api.post("/profile/update", data , {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
