// See https://aka.ms/new-console-template for more information

using CarLibrary;
using System.Security.AccessControl;

Car c1 = new Car();
Console.WriteLine(nameof(c1));
c1.Make = "Ford";
Console.WriteLine(c1.Make);
Console.WriteLine(c1.Model);

Console.WriteLine("");

Car c2 = new Car("Audi", "TT");
Console.WriteLine(nameof(c2));
Console.WriteLine(c2.Make);
Console.WriteLine(c2.Model);
c2.Colour = "Red";
Console.WriteLine(c2.Colour);
c2.Speed = 30;
Console.WriteLine(c2.Speed + "mph");
Console.WriteLine(c2.SpeedInKilometers + "kph");

Console.WriteLine("");

Car c3 = new Car("BMW", "X5") { Colour = "Grey", RegistrationNumber = "ABC 123" };
Console.WriteLine($"{nameof(c3)}");
Console.WriteLine(c3.Make);
Console.WriteLine(c3.Model);
Console.WriteLine(c3.Colour);
Console.WriteLine(c3.RegistrationNumber);

Console.WriteLine("");

Car c4 = new Car();
Console.WriteLine(nameof(c4));
Console.WriteLine(c4.Make);
Console.WriteLine(c4.Model);
Console.WriteLine(c4.Colour);
Console.WriteLine(c4.RegistrationNumber);