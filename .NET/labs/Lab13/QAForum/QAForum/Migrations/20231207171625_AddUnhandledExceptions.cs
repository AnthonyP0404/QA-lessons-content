using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace QAForum.Migrations
{
    /// <inheritdoc />
    public partial class AddUnhandledExceptions : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UnhandledExceptions",
                columns: table => new
                {
                    UnhandledExceptionId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ExceptionDateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Path = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ExceptionMessage = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BaseExceptionMessage = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StackTrace = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UnhandledExceptions", x => x.UnhandledExceptionId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UnhandledExceptions");
        }
    }
}
