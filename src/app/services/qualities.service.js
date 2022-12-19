const { default: httpService } = require("./http.service");

const qualitiesEndpoint = "quality/";
const qualitiesService = {
    fetchAll: async function () {
        const { data } = await httpService.get(qualitiesEndpoint);
        return data;
    }
};

export default qualitiesService;
