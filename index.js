
import axios from 'axios';

const bringCharacters = async () => {

    const characters = await axios.get(`https://rickandmortyapi.com/api/character/?page=17`)
    characters.data.results.map(
        person => {
            console.log(person.name, person.species)
        }
    )
}

bringCharacters()
console.log("otras cosas")