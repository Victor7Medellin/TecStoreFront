import axios from "axios";

const client = axios.create({ baseURL: "https://shark-app-eudcm.ondigitalocean.app/api/v1" });

export default client;
