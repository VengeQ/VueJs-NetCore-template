using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VueFirst.Models
{
    public class HomeModel
    {
        public int Id { get; }
        public string Value { get; }
        public Color Color { get; }
        public HomeModel() { }
        public HomeModel(int id, string value, Color color) {
            Id = id;
            Value = value;
            Color = color;
        }
    }
}
