function addRecipe(){
    let tempBody = {
        recipe_name: document.getElementById("recipe_name").value,
        author: document.getElementById("author").value,
        publishDate: moment(Date.now()).toDate(),
        pictureURL: document.getElementById("pictureURL").value,
        ingredients: document.getElementById("ingredients").value,
        instructions: document.getElementById("instructions").value,
    }
    fetch("api/recipe",{
        method:"POST",
        headers:{
            "Accept": "applications/json",
            "Content-Type": "application/json",
        },
        body:JSON.stringify(tempBody),
    })
    .then(data=>data.json())
    .then(response=>console.log(response))
    .then(()=>window.location.href="/home.html");
}