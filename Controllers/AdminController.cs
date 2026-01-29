using Microsoft.AspNetCore.Mvc;
using GamesAway.Data;
using Microsoft.EntityFrameworkCore;

namespace GamesAway.Controllers;

public class AdminController : Controller
{
    private readonly AppDbContext _db;

    public AdminController(AppDbContext db)
    {
        _db = db;
    }

    private bool IsAdmin()
    {
        var userRole = HttpContext.Request.Cookies["UserRole"];
        return userRole == "Admin";
    }

    private bool IsLoggedIn()
    {
        return HttpContext.Request.Cookies.ContainsKey("UserId");
    }

    // Ana Sayfa - Genel Bakış
    public async Task<IActionResult> Index()
    {
        if (!IsLoggedIn()) return RedirectToAction("Login", "Auth");
        if (!IsAdmin()) return RedirectToAction("Index", "Home");

        ViewBag.TotalUsers = await _db.Users.CountAsync();
        ViewBag.TotalGames = 156; // Placeholder
        ViewBag.TotalRevenue = 45750; // Placeholder
        ViewBag.PendingApprovals = 12; // Placeholder
        ViewBag.ActiveJams = 5; // Placeholder
        ViewBag.ReportedContent = 3; // Placeholder
        
        return View();
    }

    // Kullanıcı Yönetimi
    public async Task<IActionResult> Users()
    {
        if (!IsAdmin()) return RedirectToAction("Index", "Home");
        
        var users = await _db.Users.OrderByDescending(u => u.CreatedAt).ToListAsync();
        return View(users);
    }

    // Oyun Yönetimi
    public IActionResult Games()
    {
        if (!IsAdmin()) return RedirectToAction("Index", "Home");
        return View();
    }

    // Onay Bekleyenler
    public IActionResult Approvals()
    {
        if (!IsAdmin()) return RedirectToAction("Index", "Home");
        return View();
    }

    // Gelir & Finans
    public IActionResult Finance()
    {
        if (!IsAdmin()) return RedirectToAction("Index", "Home");
        return View();
    }

    // Game Jam Yönetimi
    public IActionResult GameJams()
    {
        if (!IsAdmin()) return RedirectToAction("Index", "Home");
        return View();
    }

    // Bundle Yönetimi
    public IActionResult Bundles()
    {
        if (!IsAdmin()) return RedirectToAction("Index", "Home");
        return View();
    }

    // Raporlar
    public IActionResult Reports()
    {
        if (!IsAdmin()) return RedirectToAction("Index", "Home");
        return View();
    }

    // Site Ayarları
    public IActionResult Settings()
    {
        if (!IsAdmin()) return RedirectToAction("Index", "Home");
        return View();
    }

    // Duyurular
    public IActionResult Announcements()
    {
        if (!IsAdmin()) return RedirectToAction("Index", "Home");
        return View();
    }

    // Öne Çıkanlar
    public IActionResult Featured()
    {
        if (!IsAdmin()) return RedirectToAction("Index", "Home");
        return View();
    }
}
