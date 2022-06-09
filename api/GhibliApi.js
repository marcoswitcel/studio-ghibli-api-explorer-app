
export class FilmInfo {
    /**
     * @param {object} param0 
     * @param {string} param0.id 
     * @param {string} param0.title 
     * @param {string} param0.image 
     * @param {string} param0.release_date 
     * @param {string} param0.movie_banner 
     * @param {string} param0.description
     */
    constructor({ id, title, image, release_date, movie_banner, description }) {
        /** @type {string} */
        this.id = id;
        /** @type {string} */
        this.title = title;
        /** @type {string} */
        this.image = image;
        /** @type {string} */
        this.releaseDate = release_date;
        /** @type {string} */
        this.movieBanner = movie_banner;
        /** @type {string} */
        this.description = description;
    }
}

export class GhibliApi {
    
    /**
     * @returns {Promise<FilmInfo[]>}
     */
    static async fetchFilms() {
        const response = await fetch('https://ghibliapi.herokuapp.com/films');
        const data = await response.json();
        return data.map((movieInfo) => new FilmInfo(movieInfo));
    }
}
