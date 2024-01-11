using Microsoft.AspNetCore.Mvc;
using QAForum.Areas.Users.ViewModels;
using QAForum.EF;
using QAForum.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QAForum.Areas.Users.ViewComponents
{
    public class PostListViewComponent : ViewComponent
    {
        private readonly ForumDbContext context;
        public PostListViewComponent(ForumDbContext context)
        {
            this.context = context;
        }

        public IViewComponentResult Invoke(int? threadId)
        {
            IQueryable<Post> posts = context.Posts;
            if (threadId.HasValue)
            {
                posts = posts.Where(p => p.ThreadId == threadId);
            }
            return View(PostViewModel.FromPosts(posts));
        }
    }
}
