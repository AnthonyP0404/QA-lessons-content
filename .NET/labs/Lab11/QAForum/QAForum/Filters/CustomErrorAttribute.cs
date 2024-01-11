using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc;

namespace QAForum.Filters
{
    public class CustomErrorAttribute : Attribute, IExceptionFilter
    {
        private readonly string viewName;
        private readonly IWebHostEnvironment hostingEnvironment;
        public CustomErrorAttribute(string viewName,
        IWebHostEnvironment hostingEnvironment)
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
