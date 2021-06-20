import axios from "axios";

export default axios.create({
    baseURL: "https://hoteltripservice.azurewebsites.net/api",
    headers: {
        "Content-type": "application/json"
    }
});