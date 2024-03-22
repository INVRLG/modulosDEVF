function getStarWarsId(id){
    const URL = `https://swapi.py4e.com/api/people/${id}`
    fetch(URL)
        .then((result)=>{
            return result.json();
        })
        .then((swapi)=>{
            console.log(swapi.name)
            return getPlanet(swapi.homeworld.split("/").slice(-2, -1)[0]); //extrer el id de planeta

        }).then((result)=>{
            return result.json();
        })
        .then((result)=>{
            console.log(result.name);
        })
        .catch((err)=>{
            console.log(err);
        });
}

function getPlanet(id){
    const URL = `https://swapi.py4e.com/api/planets/${id}`
    return fetch(URL)


}

getStarWarsId(1);