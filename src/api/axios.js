import axios from "axios";

export default axios.create({
    baseURL: "https://pokemonapp.herokuapp.com",
    withCredentials: true,
})