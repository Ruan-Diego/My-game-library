import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1/games';

export const get_games = async () => {
    try {
        const response = await axios.get(`${BASE_URL}.json`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar jogos:', error);
        throw error;
    }
}

export const get_by_id = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar o jogo com id ${id}:`, error);
        throw error;
    }
}

export const create_game = async (game) => {
    try {
        const response = await axios.post(BASE_URL, game, {
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'http://localhost:4000',
              }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao criar jogo:', error);
        throw error;
    }
}

export const update_game = async (game, id) => {
    try {
        const response = await axios.patch(`${BASE_URL}/${id}`, game);
        return response.data;
    } catch (error) {
        console.error(`Erro ao atualizar o jogo com id ${id}:`, error);
        throw error;
    }
}

export const delete_game = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao deletar o jogo com id ${id}:`, error);
        throw error;
    }
}
