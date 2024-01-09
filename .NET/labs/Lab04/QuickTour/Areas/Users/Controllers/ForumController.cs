using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using QuickTour.Models;
using QuickTour.ViewModels;

namespace QuickTour.Controllers
{
    [Area("Users")]
    public class ForumController : Controller
    {
        private readonly ILogger<ForumController> _logger;

        public ForumController(ILogger<ForumController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            _logger.LogInformation("In the Forums Index() method <=======");

            MockForumContext mockForum = new MockForumContext();
            IEnumerable<Forum> forums = mockForum.GetForums();

            _logger.LogDebug($"Number of forums: {forums.Count()}");
            return View(ForumViewModel.FromForums(forums));
        }

        //public IActionResult Rare([FromServices]IActionInjection ai)
        //{
        //    ai.WriteGuidToConsole();
        //    return View();
        //}
    }
}