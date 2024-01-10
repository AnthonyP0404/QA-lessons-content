namespace QAForum.DTOs
{
    using QAForum.Models;
    //'''
public class ThreadDTO
    {
        public int ThreadId { get; set; }
        public string Title { get; set; }
        public string UserName { get; set; }
        public static ThreadDTO FromThread(Models.Thread thread)
        {
            return new ThreadDTO
            {
                ThreadId = thread.ThreadId,
                Title = thread.Title,
                UserName = thread.UserName
            };
        }
        public static IEnumerable<ThreadDTO> FromThreads(IEnumerable<Models.Thread>
        threads)
        {
            return threads.Select(t => FromThread(t));
        }
    }
}
