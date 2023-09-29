import http from "../http_common";

const getAll = () => {
    return http.get('/places/all');
};

export default {
    getAll
};
