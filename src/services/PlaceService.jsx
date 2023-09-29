import http from "../http_common";

const getAll = (page, limit) => {
    const pageValue = page ? `?page=${page}`: '';
    const limitValue = limit ? `&limit=${limit}`: '';

    return http.get(`/places/all${pageValue}${limitValue}`);
};

export default {
    getAll
};
