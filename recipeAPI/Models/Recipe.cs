using System;

namespace recipeAPI.Models
{
    public class Recipe
    {
        public long id { get; set; }
        public string recipe_name { get; set; }
        public string author {get; set;}
        public DateTime publishDate {get; set;}
        public string pictureURL {get; set;}
        public string ingredients {get; set;}
        public string instructions {get; set;}
    }
}