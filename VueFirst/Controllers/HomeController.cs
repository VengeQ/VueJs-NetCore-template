using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using VueFirst.Models;

namespace VueFirst.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            var color = new Color { Id = 1, Description = "Red" };
            var model = new HomeModel(1, "Hello", color);
            return View(model);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }


        [HttpGet("NextColor")]
        public async Task<Color> NextColor()
        {
            var result = Task.Run(() =>
            {
                var colors = new List<Color> {
                new Color { Id = 1, Description = "Red"},
                new Color { Id = 2, Description = "Green"},
                new Color { Id = 3, Description = "Blue"}
            };

                var rnd = new Random();
                var id = rnd.Next(1, 4);

                return colors.First(color => color.Id == id);
            });
            return await result;

        }
    }
}
