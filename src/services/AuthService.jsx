import http from "../http_common";

const register = data => {
    return http.post("/auth/register", data);
};

const login = data => {
    return http.post("/auth/login", data);
};

const updateUser = data => {
    return http.post("/user/update", data);
};

const getUser = (id) => {
    return http.get(`/user/one/${id}`);
}

export default {
    register,
    login,
    updateUser,
    getUser
};
