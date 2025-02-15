import { instance } from "./api.instance";

export const getPopularMovie = async (page) => {
    try {
        const res = await instance.get(`discover/movie?page=${page}&include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc`);
        return res.data;
    } catch (error) {
        throw new Error(error)
    }
}

export const getGenres = async () => {
    try {
        const res = await instance.get('genre/movie/list?language=us')
        return res;
    } catch (error) {
        throw new Error(error);
    }
}