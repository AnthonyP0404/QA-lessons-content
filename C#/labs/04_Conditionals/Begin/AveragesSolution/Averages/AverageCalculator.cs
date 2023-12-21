
internal class AverageCalculator
{
    internal void AveragesWithDoWhile()
    {
        double total = 0.0;
        int count = 0;

        Console.WriteLine("----- Do While -----");
        Console.Write("Enter the first number, or Q to quit:  ");
        string input = Console.ReadLine();
        do
        {
            total += double.Parse(input);
            count++;

            Console.Write("Enter another number,   or Q to quit:  ");
            input = Console.ReadLine();
        } while (input.ToUpper() != "Q");
        if (count == 0) Console.WriteLine("You did not enter any numbers");
        else Console.WriteLine($"The average of those numbers is {total / count}");
    }

    internal void AveragesWithFor()
    {
        Console.WriteLine("----- For -----");
        Console.Write("Please enter how many numbers you have:  ");
        string numbers = Console.ReadLine();

        double total = 0.0;
        int count = 0;

        string input;
        for (int i = 0; i < int.Parse(numbers); i++)
        {
            Console.Write("Enter a number, or Q to quit:  ");
            input = Console.ReadLine();

            total += double.Parse(input);
            count++;

        }
        if (count == 0) Console.WriteLine("You did not enter any numbers");
        else Console.WriteLine($"The average of those numbers is {total / count}");
    }

    internal void AverageWithWhile()
    {
        double total = 0.0;
        int count = 0;

        Console.WriteLine("----- While -----");
        Console.Write("Enter the first number, or Q to quit:  ");
        string input = Console.ReadLine();
        while (input.ToUpper() != "Q")
        {
            total += double.Parse(input);
            count++;

            Console.Write("Enter another number,   or Q to quit:  ");
            input = Console.ReadLine();
        }
        if (count == 0) Console.WriteLine("You did not enter any numbers");
        else Console.WriteLine($"The average of those numbers is {total / count}");

    }
}