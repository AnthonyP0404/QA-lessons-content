using System;
using System.Collections.Generic;
using System.Text;

namespace EFRefresh
{
    public class Zoo
    {
        // TODO 4 [DONE]
        public int ZooId { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Animal> Animals { get; set; } = new List<Animal>();
    }
    public class Animal
    {
        // TODO 4 [DONE]
        public int AnimalId { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
        //public double Weight { get; set; }
        public virtual Zoo Zoo { get;set;}
    }

}
