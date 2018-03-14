using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace PortfolioWebApi.Migrations
{
    public partial class SeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            DateTime date = DateTime.Now;
            migrationBuilder.Sql($"INSERT INTO Articles (Title, Date, content) VALUES ('Test Article', '{ date}', 'test') ");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE * FROM Articles;");
        }
    }
}
