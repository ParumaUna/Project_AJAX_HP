const char = document.getElementById('characters')
const book = document.getElementById('books')
const house = document.getElementById('houses')
const mainbod = document.getElementById('mainContainer')

char.addEventListener('click',async function(){
    
    try {
        const response = await fetch('https://legacy--api.herokuapp.com/api/v1/characters');
        if(response.ok === false) {
            throw new Error(`HTTP error code: ${response.status}, HTTP error message: ${response.statusText}`);
        } 
        const data = await response.json();
        console.log(data);

        let characters = data;
        for(let character of characters){
            console.log(character);
            maincontainer.innerHTML += `
            <div>
                <h2>${character.name}</h2>
                <img src="${character.image_url}"></h2>
                <p>${character.species}</p>
            </div>
           ` 
        }
    } catch (error) {
        
        console.log(error)
    } finally {
        console.log('Will alwase run at the end, no matter the outcome of the request')
    }
})

book.addEventListener('click',async function(e){
    e.preventDefault;
    try {
        const response = await fetch('https://legacy--api.herokuapp.com/api/v1/books');
        if(response.ok === false) {
            throw new Error(`HTTP error code: ${response.status}, HTTP error message: ${response.statusText}`);
        } 
        const data = await response.json();
        console.log(data);

    }catch(error){
        console.log(error);

    }
})
