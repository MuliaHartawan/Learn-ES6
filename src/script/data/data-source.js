import clubs from './clubs.js';

class DataSource {
    static searchClub(keyword) {
        return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJSON => {
            console.log(responseJSON);
            if(responseJSON.teams){
                return Promise.resolve(responseJSON.teams);
            }else{
                return Promise.reject(`${keyword} No Found`);
            }
        })
    }
}

export default DataSource;