using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using QAForum.Data;
using QAForum.EF;
using QAForum.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("Forum.Users") ?? throw new InvalidOperationException("Connection string 'Forum.Users' not found.");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();
builder.Services.AddDbContext<ForumDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("Forum.Data")));

builder.Services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
    .AddEntityFrameworkStores<ApplicationDbContext>();
builder.Services.AddControllersWithViews();
builder.Services.AddSingleton<CompanyDetails>(new CompanyDetails
{
    CompanyName = "QA Forums",
    Email = "admin@qaforums.com"
});


var app = builder.Build();
app.UseStatusCodePagesWithReExecute("/Home/Status", "?code={0}");
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseMigrationsEndPoint();
}
else
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
                    name: "tags",
                    pattern: "Tagged/{tag?}",
                    defaults: new
                    {
                        area = "Users",
                        controller = "Post",
                        action = "TagSearch"
                    });

app.MapControllerRoute(
                    name: "users-area",
                    pattern: "{controller}/{action=Index}/{id?}",
                    defaults: new { area = "Users" });

app.MapControllerRoute(
    name: "areas",
    pattern: "{area:exists}/{controller}/{action=Index}/{id?}");

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.MapRazorPages();

app.Run();
