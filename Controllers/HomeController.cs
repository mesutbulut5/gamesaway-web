using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using GamesAway.Models;

namespace GamesAway.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Browse(string? category = null, string? sort = "popular")
    {
        ViewBag.Category = category;
        ViewBag.Sort = sort;
        return View();
    }

    public IActionResult GameDetail(int id)
    {
        ViewBag.GameId = id;
        return View();
    }

    public IActionResult ForDevelopers()
    {
        return View();
    }

    public IActionResult Download()
    {
        return View();
    }

    public IActionResult QuickStart()
    {
        return View();
    }

    public IActionResult Contact()
    {
        return View();
    }

    public IActionResult Blog()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    public IActionResult Terms()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
