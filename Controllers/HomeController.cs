using MNaylor_portfolio_MVC.App_Start;
using MNaylor_portfolio_MVC.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace MNaylor_portfolio_MVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public async Task<ActionResult> ContactAsync(EmailModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var body = "<p>Email From: <bold>{0}</bold>({1})</p><p>Message:</p><p>{2}</p>";
                    var from = "MattsBlog<MBNaylor1997@gmail.com>";
                    model.Body = "this is a message from your portfolio site. The name and the email of the contacting person is above.";

                    var email = new MailMessage(from,
                        ConfigurationManager.AppSettings["emailto"])
                    {
                        Subject = "Portfolio Contact Email",
                        Body = string.Format(body, model.FromName, model.FromEmail, model.Body),
                        IsBodyHtml = true
                    };

                    var svc = new PersonalEmail();
                    await svc.SendAsync(email);

                    return View(new EmailModel());
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    await Task.FromResult(0);
                }
            }

            return View();
        }

        public ActionResult Grid()
        {
            
            return View();
        }

        public ActionResult Sum()
        {
            return View();
        }

        public ActionResult Factorial()
        {
            return View();
        }

        public ActionResult FizzBuzz()
        {
            return View();
        }

        public ActionResult model()
        {
            return View();
        }
    }
}