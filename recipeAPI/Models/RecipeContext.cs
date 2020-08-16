using Microsoft.EntityFrameworkCore;

namespace recipeAPI.Models
{
    public class RecipeContext : DbContext
    {
        public RecipeContext(DbContextOptions<RecipeContext> options)
            : base(options)
        {
        }

        public DbSet<Recipe> RecipeArray { get; set; }
    }
}