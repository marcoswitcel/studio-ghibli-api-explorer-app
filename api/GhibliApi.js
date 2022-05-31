
export class GhibliApi {
    
    static async fetchFilms() {
        const response = await fetch('https://ghibliapi.herokuapp.com/films');
        return await response.json();
    }
}
