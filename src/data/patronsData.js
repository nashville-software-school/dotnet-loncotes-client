const _apiUrl = "/api/patrons";

export const getPatrons = () => {
    return fetch(_apiUrl).then((res) => res.json());
};

export const getPatron = (id) => {
    return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
};

export const updatePatron = (patron) => {
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(patron)
    }

    return fetch(`${_apiUrl}/${patron.id}`, options)
}