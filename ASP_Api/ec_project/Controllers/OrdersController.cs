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
    public class OrdersController : Controller
    {
        private readonly OrderService _orderService;
        private readonly ProductService _productService;

        public OrdersController(OrderService orderService, ProductService productService)
        {
            _orderService = orderService;
            _productService = productService;
        }

        [HttpGet]
        [Route("GetAll")]
        public ActionResult<List<Order>> GetAll() =>
            _orderService.GetAll().OrderByDescending(o => o.order_time).ToList();

        [HttpGet]
        [Route("SearchOrder")]
        public ActionResult<List<Order>> Search(string customer_name, string customer_phone_number)
        {
            return _orderService.Search(customer_name, customer_phone_number).OrderByDescending(o => o.order_time).ToList();
        }

        [HttpGet("{id:length(24)}", Name = "GetOrder")]
        public ActionResult<Order> Get(string id)
        {
            var order = _orderService.Get(id);

            if (order == null)
            {
                return NotFound();
            }

            return order;
        }

        [HttpPost]
        public ActionResult<Order> Create(Order order)
        {
            _orderService.Create(order);

            foreach(CartItem item in order.carts)
            {
                Product product = _productService.Get(item._id);
                product.quantity = product.quantity - item.quantity;

                _productService.Update(product._id, product);
            }

            return CreatedAtRoute("GetOrder", new { id = order._id.ToString() }, order);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Order orderIn)
        {
            var order = _orderService.Get(id);

            if (order == null)
            {
                return NotFound();
            }

            if (orderIn.status == 0)
            {
                foreach(CartItem item in orderIn.carts)
                {
                    Product product = new Product();
                    product=_productService.Get(item._id);
                    product.quantity += item.quantity;
                    _productService.Update(product._id, product);
                }
            }

            _orderService.Update(id, orderIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var order = _orderService.Get(id);

            if (order == null)
            {
                return NotFound();
            }

            _orderService.Remove(order._id);

            return NoContent();
        }
    }
}
