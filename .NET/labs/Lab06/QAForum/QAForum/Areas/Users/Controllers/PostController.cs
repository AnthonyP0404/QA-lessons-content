﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QAForum.Areas.Users.ViewModels;
using QAForum.EF;

namespace QAForum.Areas.Users.Controllers
{
    [Area("Users")]
    public class PostController : Controller
    {
        private readonly ForumDbContext context;

        public PostController(ForumDbContext context)
        {
            this.context = context;
        }

        public IActionResult Index()
        {
            return View(PostViewModel.FromPosts(context.Posts));
        }
    }
}