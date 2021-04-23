import axios from "axios";

const hostURL = "http://192.168.178.10:8080";
//const hostURL = "https://europe-west1-surf-journal-309311.cloudfunctions.net/sr-auth-prod";

const instance = axios.create({ baseURL: hostURL });
instance.defaults.headers.common["Content-Type"] = "application/json";

export default instance;
