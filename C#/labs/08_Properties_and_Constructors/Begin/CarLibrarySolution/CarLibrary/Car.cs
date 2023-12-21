namespace CarLibrary
{
    public class Car
    {
        // FIELDS
        private int speed;
        public int Speed
        {
            get { return speed; }
            set { if(value > 0 && value < 100) speed = value; }
        }

        public string RegistrationNumber { get; set; }

        public double SpeedInKilometers => Speed * 1.609344;

        public string Make { get; set; }
        public string Model { get; set; }
        public string Colour { get; set; }



        // CONSTRUCTORS
        public Car(string Make, string Model)
        {
            this.Make = Make;
            this.Model = Model;
        }
        public Car() :this("Unknown Make", "Unknown Model")
        {
            // this.Make = "Unknown";
            // this.Model = "Unknown";
            //this.Colour = "Black";

            this.Colour = "White";
        }
    }
}
