using Microsoft.AspNetCore.Mvc;
using GamesAway.Data;
using GamesAway.Models;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace GamesAway.Controllers;

public class AuthController : Controller
{
    private readonly AppDbContext _db;

    public AuthController(AppDbContext db)
    {
        _db = db;
    }

    public IActionResult Login()
    {
        return View();
    }

    [HttpPost]
    public async Task<IActionResult> Login(string email, string password)
    {
        var user = await _db.Users.FirstOrDefaultAsync(u => u.Email == email);
        
        if (user != null && VerifyPassword(password, user.PasswordHash))
        {
            // Update last login
            user.LastLoginAt = DateTime.UtcNow;
            await _db.SaveChangesAsync();
            
            // Set cookie
            HttpContext.Response.Cookies.Append("UserId", user.Id.ToString(), new CookieOptions
            {
                Expires = DateTimeOffset.UtcNow.AddDays(30),
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.Strict
            });
            
            HttpContext.Response.Cookies.Append("UserName", user.Name, new CookieOptions
            {
                Expires = DateTimeOffset.UtcNow.AddDays(30)
            });
            
            return RedirectToAction("Index", "Dashboard");
        }
        
        ViewBag.Error = "Invalid email or password";
        return View();
    }

    public IActionResult Register()
    {
        return View();
    }

    [HttpPost]
    public async Task<IActionResult> Register(string name, string email, string password)
    {
        // Check if email already exists
        if (await _db.Users.AnyAsync(u => u.Email == email))
        {
            ViewBag.Error = "Email already registered";
            return View();
        }
        
        // Create new user
        var user = new User
        {
            Name = name,
            Email = email,
            PasswordHash = HashPassword(password),
            CreatedAt = DateTime.UtcNow
        };
        
        _db.Users.Add(user);
        await _db.SaveChangesAsync();
        
        // Auto login
        HttpContext.Response.Cookies.Append("UserId", user.Id.ToString(), new CookieOptions
        {
            Expires = DateTimeOffset.UtcNow.AddDays(30),
            HttpOnly = true,
            Secure = true,
            SameSite = SameSiteMode.Strict
        });
        
        HttpContext.Response.Cookies.Append("UserName", user.Name, new CookieOptions
        {
            Expires = DateTimeOffset.UtcNow.AddDays(30)
        });
        
        TempData["Success"] = "Registration successful!";
        return RedirectToAction("Index", "Dashboard");
    }

    public IActionResult Logout()
    {
        HttpContext.Response.Cookies.Delete("UserId");
        HttpContext.Response.Cookies.Delete("UserName");
        return RedirectToAction("Index", "Home");
    }
    
    // Password hashing
    private string HashPassword(string password)
    {
        using var sha256 = SHA256.Create();
        var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
        return Convert.ToBase64String(bytes);
    }
    
    private bool VerifyPassword(string password, string hash)
    {
        return HashPassword(password) == hash;
    }
}
