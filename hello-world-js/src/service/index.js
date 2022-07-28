import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080",
});

export const sayHello = async (url, setGreetings) => {
    const response = await api.get(url);
    setGreetings(response.data);
};