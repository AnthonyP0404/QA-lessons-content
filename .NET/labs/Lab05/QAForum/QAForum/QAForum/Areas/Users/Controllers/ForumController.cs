using Microsoft.AspNetCore.Mvc;

namespace QAForum.Areas.Users.Controllers
{
    [Area("Users")]
    public class ForumController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
