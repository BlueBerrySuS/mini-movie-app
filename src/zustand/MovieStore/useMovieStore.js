import { create } from "zustand";
import { getGenres, getPopularMovie } from "../../../utils/api/api";


export const useMovieStore = create((set,get) => {

    return {
        page: 1,
        totalPages: null,
        hasMore: true,
        genres: null,
        watchNowMovies: null,
        popularMovies: null,
        isLoading: false,
        isLoadingMore: false,
        getPopularMovies: async () => {
            set({isLoading: true})
            const req = await getPopularMovie(1);
            set({
                popularMovies: req.results,
                watchNowMovies: req.results,
                totalPages: req.total_pages,
            });
            set({isLoading: false});
        },
        getGenres: async () => {
            set({isLoading: true});
            const req = await getGenres();
            let genres = {};
            req.data.genres.map(genre => {
                genres = {...genres, [genre.id]: genre.name}
            });
            set({genres: genres});
            set({isLoading:false});
        },
        loadMore: async () => {
            if(!get().hasMore) return

            const newPage = get().page + 1;
            if(newPage > get().totalPages) {
                set({hasMore: false});
                return
            }

            set({isLoadingMore: true});
            const req = await getPopularMovie(newPage);
            set({popularMovies: [...get().popularMovies, ...req.results], page: newPage});
            set({isLoadingMore: false});
        },
    }
})