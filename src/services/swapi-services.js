export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';
    
    getResourse = async (url) => {
      const res = await fetch(`${this._apiBase}${url}`);
    
      if (!res.ok) {
        throw new Error (`Could not fetch ${url}` 
        + `, received ${res.status}`);
      }
    
      return await res.json();
    
    };

    getPersonImage = ({id}) => {
      return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
    };
    

    getStarShipImage = ({id}) => {
      return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
    };
    getPlanetImage = ({id}) => {
      return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    };

    getAllPeople = async () => {
      const res = await this.getResourse('/people/');
      return res.results.map((personList) => this._transformPerson(personList));
    };
    
    getPerson = async (id) => {
      const person = await this.getResourse(`/people/${id}/`);
      return this._transformPerson(person);
    };
    
    getAllPlanets = async () => {
      const res = await this.getResourse('/planets/');
      return res.results.map((planet) => this._planetTransform(planet));
    };
    
    getPlanet = async (id) => {
      const planet= await this.getResourse(`/planets/${id}/`);
      return this._planetTransform(planet);
    };
    
    getAllStarShips = async () => {
      const res = await this.getResourse('/starships/');
      return res.results.map((allStarShips) => this._transformStarship(allStarShips));
    };
    
    getStarShip = async (id) => {
      const starShip = this.getResourse(`/starships/${id}/`);
      return this._transformStarship(starShip);
    };

    _extractId = (item) => {
      const idRegExp = /\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1];

    }

    _planetTransform = (planet) => {
      return {
      id : this._extractId(planet),
      name : planet.name,
      population : planet.population,
      rotationPeriod : planet.rotation_period,
      diameter : planet.diameter
      };
    }

    _transformStarship = (starship) => {
      return {
        id: this._extractId(starship),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costInCredits: starship.cost_in_credits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        cargoCapacity: starship.cargo_capacity
      };
    };
  
    _transformPerson = (person) => {
      return {
        id: this._extractId(person),
        name: person.name,
        gender: person.gender,
        birthYear: person.birth_year,
        eyeColor: person.eye_color
      }
    }
  
    
    };
    
 