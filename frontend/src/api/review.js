import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1/reviews/'


export const create_todo = async (review) => {
    const response = await axios.post(BASE_URL, review)
    return response.data;
}

export const delete_todo = async (id) => {
    const response = await axios.delete(BASE_URL + id);
    return response.data;
}