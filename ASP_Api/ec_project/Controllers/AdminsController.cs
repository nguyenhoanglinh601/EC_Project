using ec_project.Models;
using ec_project.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ec_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminsController : Controller
    {
        private readonly AdminService _adminService;

        public AdminsController(AdminService adminService)
        {
            _adminService = adminService;
        }

        [HttpGet]
        [Route("Login")]
        public ActionResult<Admin> login(string phoneNumber, string password)
        {
            return _adminService.getAdmin(phoneNumber, password);
        }

        [HttpGet]
        public ActionResult<List<Admin>> Get() =>
            _adminService.Get();

        [HttpGet("{id:length(24)}", Name = "GetAdmin")]
        public ActionResult<Admin> Get(string id)
        {
            var admin = _adminService.Get(id);

            if (admin == null)
            {
                return NotFound();
            }

            return admin;
        }

        [HttpPost]
        public ActionResult<Admin> Create(Admin admin)
        {
            _adminService.Create(admin);

            return CreatedAtRoute("GetAdmin", new { id = admin._id.ToString() }, admin);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Admin adminIn)
        {
            var admin = _adminService.Get(id);

            if (admin == null)
            {
                return NotFound();
            }

            _adminService.Update(id, adminIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var admin = _adminService.Get(id);

            if (admin == null)
            {
                return NotFound();
            }

            _adminService.Remove(admin._id);

            return NoContent();
        }
    }
}
