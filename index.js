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
        <div>
            <h2>${character.name}</h2>
            <img class="img" src="${character.image_url}"></h2>
            <p>Species: ${character.species}</p>
        </div>
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
                <div>
                    <h2>${book.title}</h2>
                    <img class="img" src="${book.image_url}">
                    </h2><p>${book.release_date.slice(0,10)}</p>
                </div>
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
        console.log(house.image_url);
            maincontainer.innerHTML += `
            <div>
                <h2>${house.name}</h2>
                <img "src="${house.image_url}">
                <p>Members: ${house.members}</p>
            <div/>
           `
        }

    }catch(error){
        console.log(error);

    }finally {
    console.log('Will always run at the end, no matter the outcome of the request')
}
})