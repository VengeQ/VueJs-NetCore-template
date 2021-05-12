const axios = require('axios').default;
import { Success, Failure } from './Result';
export async function get(path) {
    try {
        const result = axios.get(path).catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                return new Failure(error.response.status);
            }
            else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
                return new Failure("");
            }
            else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                return new Failure("");
            }
        });
        return new Success(result);
    }
    catch (error) {
        const result = handleError(error);
        return new Failure(result);
    }
}
function handleError(error) {
    return String(error);
}
//# sourceMappingURL=http.js.map