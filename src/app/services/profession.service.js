import httpService from "./http.service";

const professionEndpoint = "profession/";

const professionService = {
    get: async function () {
        const { data } = await httpService.get(professionEndpoint);
        return data;
    }
};

export default professionService;
