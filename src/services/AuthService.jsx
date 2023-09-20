import http from "../http_common";

const register = data => {
    return http.post("/auth/register", data);
};

const login = data => {
    return http.post("/auth/login", data);
};

export default {
    register,
    login
};
