import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',  
})

//Токен для запросов
instance.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOThmMTNiMzQxOTNmMWQyYTAxMTYzZWRhNGEwNDE2MyIsIm5iZiI6MTY5NzQ3MjMzMS43NzMsInN1YiI6IjY1MmQ1ZjRiNjYxMWI0MDBjNTBmZDQ3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-wuo2RnzG4VIN7y0R0Ufd8EvKv8-w34yz_HZx2cnA9Y`;



