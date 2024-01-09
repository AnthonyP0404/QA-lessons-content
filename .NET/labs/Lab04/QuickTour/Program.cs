using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using QuickTour.Configuration;
using QuickTour.Data;
using QuickTour.Middleware;
using QuickTour.Models;
using System.Configuration;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Logging.ClearProviders();
builder.Logging.AddConsole();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();

builder.Services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
    .AddEntityFrameworkStores<ApplicationDbContext>();
builder.Services.AddControllersWithViews();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



//lab 04 stuff
builder.Services.AddTransient<ITransient, TransientDependency>();
builder.Services.AddScoped<IScoped, ScopedDependency>();
builder.Services.AddSingleton<ISingleton, SingletonDependency>();

builder.Services.AddScoped<IForumContext, MockForumContext>();

builder.Services.AddTransient<IActionInjection,ActionInjectionDependency>();

builder.Services.Configure<FeaturesConfiguration>(builder.Configuration.GetSection("Features"));

//

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();


//lab 4 stuff
app.UseMiddleware<CustomMiddleware1>();
app.UseMiddleware<CustomMiddleware2>();

//

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");
app.MapControllerRoute(
    name: "areas",
    pattern:
      "{area:exists=Users}/{controller=Forum}/{action=Index}/{id?}");




app.Run();
