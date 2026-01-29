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

    public IActionResult Browse(string? category = null, string? sort = "popular", string? tag = null)
    {
        ViewBag.Category = category;
        ViewBag.Sort = sort;
        ViewBag.Tag = tag;
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

    // Game Jams - Oyun Yarışmaları
    public IActionResult GameJams()
    {
        return View();
    }

    public IActionResult GameJamDetail(int id)
    {
        ViewBag.JamId = id;
        return View();
    }

    // Bundles - Paketler
    public IActionResult Bundles()
    {
        return View();
    }

    public IActionResult BundleDetail(int id)
    {
        ViewBag.BundleId = id;
        return View();
    }

    // Sales - İndirimler
    public IActionResult Sales()
    {
        return View();
    }

    // Collections - Koleksiyonlar
    public IActionResult Collections()
    {
        return View();
    }

    public IActionResult CollectionDetail(int id)
    {
        ViewBag.CollectionId = id;
        return View();
    }

    // Devlogs - Geliştirici Günlükleri
    public IActionResult Devlogs()
    {
        return View();
    }

    public IActionResult DevlogDetail(int id)
    {
        ViewBag.DevlogId = id;
        return View();
    }

    // Tags - Etiketler
    public IActionResult Tags()
    {
        return View();
    }

    // User Profile
    public IActionResult Profile(string? username = null)
    {
        ViewBag.Username = username;
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
