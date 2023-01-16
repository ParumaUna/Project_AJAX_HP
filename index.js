const char = document.getElementById('characters')
const book = document.getElementById('books')
const house = document.getElementById('houses')
const theClickedLink = document.getElementsByTagName('a')



char.addEventListener('click',async function(e){
e.preventDefault();
try {

    const response = await fetch('https://legacy--api.herokuapp.com/api/v1/characters');
    const data = await response.json();
    //console.log(data);

    const characters = data;
    maincontainer.innerHTML= "";

    for(let character of characters){

        maincontainer.innerHTML += `
            <h2>${character.name}</h2>
            <img src="${character.image_url}"></h2>
            <p>${character.species}</p>
        `
    }
} catch (error) {
        console.log(error)
} finally {
    console.log('Will always run at the end, no matter the outcome of the request')
}
})

book.addEventListener('click',async function(e){
    
    try {
        const response = await fetch('https://legacy--api.herokuapp.com/api/v1/books'); 
        const data = await response.json();
        console.log(data);
        
        const books = data;
        maincontainer.innerHTML = "";
        for(let book of books){
        
                maincontainer.innerHTML += `
                <h2>${book.title}</h2>
                <img src="${book.image_url}">
                </h2><p>${book.release_date.slice(0,10)}</p>
           `
        }

    }catch(error){
        console.log(error);

    }finally {
    console.log('Will always run at the end, no matter the outcome of the request')
}
})

house.addEventListener('click',async function(e){
    
    try {
        const response = await fetch('https://legacy--api.herokuapp.com/api/v1/houses'); 
        const data = await response.json();
        console.log(data);
        
        const houses = data;
        maincontainer.innerHTML = "";
        for(let house of houses){
        
                maincontainer.innerHTML += `
                <h2>${house.name}</h2>
                <img src="${house.image_url}">
                </h2><p>${'Members: '+house.members}</p>
           `
        }

    }catch(error){
        console.log(error);

    }finally {
    console.log('Will always run at the end, no matter the outcome of the request')
}
})