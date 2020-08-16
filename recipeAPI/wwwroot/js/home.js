let recipeListElement = document.getElementById("homeContainer");

fetch("/api/recipe")
.then(data=>data.json())
.then(response=>{
    response.forEach(eachRecipe => {    
        let newDivElement = document.createElement("div");
        newDivElement.setAttribute("class", "homeEachRecipe")
        newDivElement.innerHTML = 
            `<img src="${eachRecipe.pictureURL}" alt="recipe image" id="homeImageRecipe">
            <a id="homeRecipeName" href="/detail.html?recipeID=${eachRecipe.id}"><p id="homeRecipeNameText">${eachRecipe.recipe_name}</p></a>
            <p id="homeAuthorPublishRecipe">${eachRecipe.author} from ${moment(eachRecipe.publishDate).format('MM/DD/YY, h:mm a')}</p>`;
        recipeListElement.append(newDivElement);
    });
});