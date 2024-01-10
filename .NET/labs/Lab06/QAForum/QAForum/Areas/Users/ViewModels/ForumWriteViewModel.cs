using Microsoft.AspNetCore.Mvc;
using QAForum.Models;

namespace QAForum.Areas.Users.ViewModels
{
    public class ForumWriteViewModel
    {
        public string Title { get; set; }
        public static ForumWriteViewModel FromForum(Forum forum)
        {
            return new ForumWriteViewModel
            {
                Title = forum.Title,
            };
        }
    }
}
