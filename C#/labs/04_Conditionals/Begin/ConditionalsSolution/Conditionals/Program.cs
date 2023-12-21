using Conditionals;


Console.WriteLine("##### If Statement #####");

Pole pole = Pole.North;
String animal;

if (pole == Pole.North) animal = "Polar bear";
else animal = "Penguin";

Console.WriteLine($"The animal that lives in the {pole} Pole is the {animal}");



Console.WriteLine("##### Ternary Statement #####");

pole = Pole.South;
animal = (pole == Pole.North) ? "Polar bear" : "Penguin";

Console.WriteLine($"The animal that lives in the {pole} Pole is the {animal}");



Console.WriteLine("##### Switch Statement #####");
var city = CapitalCities.Madrid;
string countryMessage = ""; 

switch (city) {
    case CapitalCities.London: countryMessage = $"{city} is the capital of England"; break;
    case CapitalCities.Paris: countryMessage = $"{city} is the capital of France"; break;
    case CapitalCities.Rome: countryMessage = $"{city} is the capital of Italy"; break;
    case CapitalCities.Madrid: countryMessage = $"{city} is the capital of Spain"; break;
    default: break;
}
Console.WriteLine(countryMessage);



Console.WriteLine("##### Switch Expression #####");

city = CapitalCities.Paris;
countryMessage = city switch
{
    CapitalCities.London => $"{city} is the capital of England",
    CapitalCities.Paris => $"{city} is the capital of France",
    CapitalCities.Rome => $"{city} is the capital of Italy",
    CapitalCities.Madrid => $"{city} is the capital of Spain"
};
Console.WriteLine(countryMessage);