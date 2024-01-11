using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using QAForum.Areas.Users.Controllers;
using QAForum.Areas.Users.ViewModels;
using QAForum.EF;
using QAForum.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace QAForumTests
{
    public class ForumControllerTests
    {
        private Forum GetMockForumWith2Threads()
        {
            var threads = new List<QAForum.Models.Thread>
            {
                new QAForum.Models.Thread { ThreadId = 1, Title = "Thread 1", UserName="Ted"},
                new QAForum.Models.Thread { ThreadId = 2, Title = "Thread 2", UserName="Ted"},
            };
            return new Forum
            {
                ForumId = 1,
                Title = "Test Forum",
                Threads = threads
            };
        }

        private IServiceProvider GetServiceProvider()
        {
            ServiceCollection services = new ServiceCollection();
            // Add whatever services we need to our dependency injection here
            services.AddDbContext<ForumDbContext>(options =>
                    options.UseInMemoryDatabase("MockForumData"));
            services.AddScoped<ForumController>();
            services.AddScoped<ThreadController>();

            return services.BuildServiceProvider();
        }

        [Fact]
        public void Model_Contains_Correct_Thread_Count_Test()
        {
            // Arrange
            var services = GetServiceProvider();
            using (var scope = services.CreateScope())
            {
                var context = scope.ServiceProvider.GetService<ForumDbContext>();

                context.Forums.Add(GetMockForumWith2Threads());
                context.SaveChanges();

                var controller = scope.ServiceProvider.GetService<ForumController>();

                // Act
                var result = controller.Index() as ViewResult;
                var model = result.Model as IEnumerable<ForumViewModel>;

                // Assert
                Assert.Equal(2, model.Single().NumberOfThreads);
            }
        }

        [Fact]
        public void Welcome_Post_Added_Test()
        {
            // Arrange
            var services = GetServiceProvider();
            using (var scope = services.CreateScope())
            {
                var context = scope.ServiceProvider.GetService<ForumDbContext>();
                var controller = scope.ServiceProvider.GetService<ThreadController>();
                var viewModel = new ThreadCreateViewModel
                {
                    ForumId = 1,
                    Title = "Test thread",
                    UserName = "Test user",
                    AddWelcomePost = true
                };

                // Act
                controller.Create(viewModel);
                var post = context.Posts.Single();

                // Assert
                Assert.Equal("Welcome to this thread. We hope it provides you with useful information", post.PostBody);
            }
        }
    }
}
