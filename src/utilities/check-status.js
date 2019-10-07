export const checkStatus = (response) => {
    if (response.status < 200 || response.status >= 400) {
        throw new Error(response.status)
    }

    return response
};
