import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "b80b676bdf5bbf0d0cf7223a079e02a8",
        language: "ko-KR",
    },
});

export default instance