import http from "../http-common";

class GastDataService {
    create(data) {
        return http.post(`/gast/`, data);
    }
    get() {
        return http.get(`/gast`);
    }
}

export default new GastDataService();