using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QAForum.Filters
{
    public class CustomErrorAttribute : Attribute, IExceptionFilter
    {
        private readonly string viewName;
        private readonly IWebHostEnvironment hostingEnvironment;

        public CustomErrorAttribute(string viewName, IWebHostEnvironment hostingEnvironment)
        {
            this.viewName = viewName;
            this.hostingEnvironment = hostingEnvironment;
        }

        public void OnException(ExceptionContext context)
        {
            if (hostingEnvironment.IsDevelopment())
            {
                return;
            }

            context.Result = new ViewResult
            {
                ViewName = viewName
            };
        }
    }
}
