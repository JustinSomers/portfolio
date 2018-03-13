
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PortfolioWebApi.Models;
using PortfolioWebApi.Persistence;

namespace PortfolioWebApi.Controllers
{
    public class ArticleController: Controller
    {
        private readonly ArticleDbContext context;

        public ArticleController(ArticleDbContext context) {
            this.context = context;
        }
        [HttpGet("/api/Articles")]
        public async Task<IEnumerable<Article>> GetArticles()
        {
            return await context.Articles.ToListAsync();
            // return await context.Makes.Include(m => m.Models).ToListAsync();

        }
    }
}