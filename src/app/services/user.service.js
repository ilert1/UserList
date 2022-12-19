import httpService from "./http.service";

const userEndpoint = "user/";

const userService = {
    get: async function () {
        const promise = httpService.get(userEndpoint);
        const data = promise.then((res) => res.data);
        // console.log(data);
        return data;
    }
};

export default userService;
