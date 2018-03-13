using Microsoft.EntityFrameworkCore;
using PortfolioWebApi.Models;

namespace PortfolioWebApi.Persistence
{
    public class ArticleDbContext: DbContext
    {
        public ArticleDbContext(DbContextOptions<ArticleDbContext> options): base(options){
            
        }
        public DbSet<Article> Articles {get; set;}

    }
}