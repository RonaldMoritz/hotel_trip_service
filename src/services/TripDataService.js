import http from "../http-common";

class TripDataService {
    create(data) {
        return http.post(`/trip/`, data);
    }
    get() {
        return http.get(`/trip`);
    }
}

export default new TripDataService();