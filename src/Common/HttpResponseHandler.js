import ResponseType from "./Constants";

const handleErrorResponse = (response, err) => {
    return { responseType : ResponseType.Error, errors : response, fieldErrors : err };
}

const handleSuccessResponse = (response) => {
    return { responseType : ResponseType.Succes, message : response };
}

const HttpResponse =  {
    handleErrorResponse,
    handleSuccessResponse
}

export default HttpResponse;