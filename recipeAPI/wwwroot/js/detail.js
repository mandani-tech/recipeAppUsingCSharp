var url_string = window.location.href
var url = new URL(url_string);
var recipeID = url.searchParams.get("recipeID");

fetch('api/recipe/' + recipeID)
    .then(data=>data.json())
    .then(recipeDetails => 
        {
            console.log(recipeDetails);
            let recipeStarter = document.getElementById("recipeStarter");
            let recipeDetailElement = document.createElement("div");
            recipeDetailElement.innerHTML =
                `<div id="detailedRecipe">
                    <h3 class="detailCenterText">${recipeDetails.recipe_name}</h3>
                    <p class="detailCenterText">${recipeDetails.author} published:${moment(recipeDetails.publishDate).format('MM/DD/YY, h:mm a')}</p>    
                    <div class="detailCenterText">
                        <img id="detailImageRecipe" src="${recipeDetails.pictureURL}" alt="Image of ${recipeDetails.recipe_name}">
                    </div>
                    <h5>Ingredients</h5> 
                    <ul id="ingredients">${recipeDetails.ingredients}</ul>
                    <h5>Instructions</h5>
                    <ol id="instructions">${recipeDetails.instructions}</ol>
                </div>`;
            recipeStarter.append(recipeDetailElement);

        }
    );