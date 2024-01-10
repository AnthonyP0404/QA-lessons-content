using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QAForum.Areas.Users.ViewModels
{
    public class TagSearchViewModel
    {
        [Display(Name = "Tag to Search")]
        public string TagToSearch { get; set; }
    }
}
