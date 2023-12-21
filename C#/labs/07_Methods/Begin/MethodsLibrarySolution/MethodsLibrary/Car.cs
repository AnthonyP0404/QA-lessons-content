namespace MethodsLibrary
{
    public partial class Car
    {
        public Car()
        {
            Count++;
        }

        public static int Count { get; private set; }

        public bool Start()
        {
            return true;
        }
    }
}