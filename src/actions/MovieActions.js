import axios from 'axios';

const KEY = "abe0f01d";

export async function getMovie(title) {
    const URL = `http://www.omdbapi.com/?apikey=${KEY}&t=${title}`;
    
    try {
        return await axios.get(URL);
    } catch (error) {
        console.log(error);
    }
    /*axios.get(URL)
        .then(response => { 
            console.log(response.data);
            return response.data
         })
         .catch(error => {
             console.log("Något fel inträffade!");
         })*/
}