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
    public class CustomersController : ControllerBase
    {
        private readonly CustomerService _customerService;

        public CustomersController(CustomerService customerService)
        {
            _customerService = customerService;
        }

        [HttpGet]
        public ActionResult<List<Customer>> Get() =>
            _customerService.Get();

        [HttpGet("{id:length(24)}", Name = "GetCustomer")]
        public ActionResult<Customer> Get(string id)
        {
            var customer = _customerService.Get(id);

            if (customer == null)
            {
                return NotFound();
            }

            return customer;
        }

        [HttpPost]
        public ActionResult<Customer> Create(Customer customer)
        {
            _customerService.Create(customer);

            return CreatedAtRoute("GetCustomer", new { id = customer._id.ToString() }, customer);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Customer customerIn)
        {
            var customer = _customerService.Get(id);

            if (customer == null)
            {
                return NotFound();
            }

            _customerService.Update(id, customerIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var customer = _customerService.Get(id);

            if (customer == null)
            {
                return NotFound();
            }

            _customerService.Remove(customer._id);

            return NoContent();
        }

        [HttpPost]
        [Route("Login")]
        public ActionResult<Customer> Login(Customer customerIn)
        {
            return _customerService.isExist(customerIn);
        }
    }
}
