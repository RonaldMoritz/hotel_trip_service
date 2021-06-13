import http from "../http-common";

class BuchungDataService {
    create(data) {
        return http.post(`/buchung/`, data);
    }
    get() {
        return http.get(`/buchung`);
    }
    getJOIN() {
        return http.get(`/buchung/join`);
    }
}

export default new BuchungDataService();