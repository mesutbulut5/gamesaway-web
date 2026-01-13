using Microsoft.AspNetCore.Mvc;
using GamesAway.Data;
using Microsoft.EntityFrameworkCore;

namespace GamesAway.Controllers;

public class DashboardController : Controller
{
    private readonly AppDbContext _db;

    public DashboardController(AppDbContext db)
    {
        _db = db;
    }

    private bool IsLoggedIn()
    {
        return HttpContext.Request.Cookies.ContainsKey("UserId");
    }

    public async Task<IActionResult> Index()
    {
        if (!IsLoggedIn()) return RedirectToAction("Login", "Auth");
        
        ViewBag.TotalUsers = await _db.Users.CountAsync();
        ViewBag.TotalGames = 8; // Placeholder
        ViewBag.ApprovalRate = 75.0;
        
        return View();
    }

    public IActionResult Analytics()
    {
        if (!IsLoggedIn()) return RedirectToAction("Login", "Auth");
        return View();
    }

    public async Task<IActionResult> Users()
    {
        if (!IsLoggedIn()) return RedirectToAction("Login", "Auth");
        
        var users = await _db.Users.OrderByDescending(u => u.CreatedAt).ToListAsync();
        return View(users);
    }

    public IActionResult Games()
    {
        if (!IsLoggedIn()) return RedirectToAction("Login", "Auth");
        return View();
    }

    public IActionResult Monetization()
    {
        if (!IsLoggedIn()) return RedirectToAction("Login", "Auth");
        return View();
    }

    public IActionResult SupportTickets()
    {
        if (!IsLoggedIn()) return RedirectToAction("Login", "Auth");
        return View();
    }

    public IActionResult Notifications()
    {
        if (!IsLoggedIn()) return RedirectToAction("Login", "Auth");
        return View();
    }
}
