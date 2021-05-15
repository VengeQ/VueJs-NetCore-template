
const axios = require('axios').default
import { Result, Success, Failure } from './Result'

export async function getResult<T>(path: string): Promise<Result<T, String>> {
    try {
        const result = await axios.get(path).catch(async function (error: any) {
            if (error.response) {
                return await new Failure("ResponseError: " + error.request);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
                return await new Failure("No response received. RequestData: " + error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
    
                return await new Failure("Unknown error: " + String(error));
            }
        });
        return await new Success(result)

    } catch (error) {
        const result = handleError(error);
        return await new Failure(result)
    }
}

export async function get<T>(path: string): Promise<T> {
    const result = await axios.get(path).catch(async function (error: any) {
        if (error.response) {
            return await new Failure("ResponseError: " + error.request);
        } else if (error.request) {
            return await new Failure("No response received. RequestData: " + error.request);
        } else {
            return await new Failure("Unknown error: " + String(error));
        }
    });
    return await result.value.data
}


function handleError(error: any) {
    return String(error)
}
