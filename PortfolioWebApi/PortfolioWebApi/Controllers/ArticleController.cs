
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
    [Route("api/[controller]")]
    public class ArticleController : Controller
    {
        private readonly ArticleDbContext context;

        public ArticleController(ArticleDbContext context) {
            this.context = context;
        }
        [HttpGet]
        public IEnumerable<Article> GetArticles()
        {
            return context.Articles.ToList();
            // return await context.Makes.Include(m => m.Models).ToListAsync();

        }

        [HttpGet("{id}", Name = "GetArticle")]
        public IActionResult GetArticleById(int id)
        {
            var article = context.Articles.FirstOrDefaultAsync(x => x.Id == id);
            if (article == null)
            {
                return NotFound();
            }
            return new ObjectResult(article);
        }

        [HttpGet("{Date}", Name = "GetArticlesByDate")]
        public IEnumerable<Article> GetArticlesByDate([FromBody] DateTime date)
        {
            var articles = context.Articles.Where(x => x.Date == date);
            if (articles == null)
            {
                // return articles?
            }

            return articles;
        }

        [HttpPost]
        public IActionResult Create([FromBody] Article article)
        {
            //todo: add exceptions
            if (article == null)
            {
                return BadRequest();
            } else if (article.Title == null)
            {
                return BadRequest();
            }
            if (article.Date == null || string.IsNullOrWhiteSpace(article.Date.ToString()) || article.Date == DateTime.MinValue )
            {
                article.Date = DateTime.Now;
            }

            context.Articles.Add(article);
            context.SaveChanges();

            return CreatedAtRoute("GetArticle", new { id = article.Id }, article);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] Article article)
        {
            if(article == null || article.Id != id)
            {
                return BadRequest();
            }

            var entry = context.Articles.FirstOrDefault(x => x.Id == id);
            if(entry == null)
            {
                return NotFound();
            }

            entry.Title = article.Title;
            entry.Date = article.Date;
            entry.content = article.content;

            context.Articles.Update(entry);
            context.SaveChanges();

            return new NoContentResult();
        }

        [HttpDelete("{Id}")]
        public IActionResult Delete(int id)
        {
            var article = context.Articles.FirstOrDefault(x => x.Id == id);
            if (article == null)
            {
                return NotFound();
            }

            context.Articles.Remove(article);
            context.SaveChanges();
            return new NoContentResult();
        }



    }
}