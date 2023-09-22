import http from "../http_common";

const saveAddress = (data, id) => {
    return http.post(`user/${id}/address/save`, data);
};

const getAll = () => {
    return http.get('/addresses/all');
};

export default {
    saveAddress,
    getAll
};
