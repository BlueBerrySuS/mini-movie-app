import { useEffect } from "react"
import { useMovieStore } from "../../zustand/MovieStore/useMovieStore"



const MoviesList = ({title}) => {

    const {
        genres,
        getGenres,
        popularMovies,
        watchNowMovies,
        getPopularMovies,
        isLoading,
    } = useMovieStore(); 

    useEffect(() => {
        const getData = async () => {
            if(!watchNowMovies) await getPopularMovies();
            if(!genres) await getGenres();
        }
        getData();
    }, [getPopularMovies, getGenres, genres, watchNowMovies]);


    return (
        <div>
            <h1>Watch now</h1>
            <div className="">
                {!isLoading && <div>Слайдер с фильмами</div>}
            </div>
            <div>
                <h2>{title}</h2>
                <div>
                    {!isLoading && <div>Список с фильмами</div>}
                </div>
            </div>
        </div>
    )
}

export default MoviesList;