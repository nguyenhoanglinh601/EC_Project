
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
    public class BrandsController : ControllerBase
    {
        private readonly BrandService _brandService;

        public BrandsController(BrandService brandService)
        {
            _brandService = brandService;
        }

        [HttpGet]
        public ActionResult<List<Brand>> Get() =>
            _brandService.Get();

        [HttpGet("{id:length(24)}", Name = "GetBrand")]
        public ActionResult<Brand> Get(string id)
        {
            var brand = _brandService.Get(id);

            if (brand == null)
            {
                return NotFound();
            }

            return brand;
        }

        [HttpPost]
        public ActionResult<Brand> Create(Brand brand)
        {
            _brandService.Create(brand);

            return CreatedAtRoute("GetBrand", new { id = brand._id.ToString() }, brand);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Brand brandIn)
        {
            var brand = _brandService.Get(id);

            if (brand == null)
            {
                return NotFound();
            }

            _brandService.Update(id, brandIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var brand = _brandService.Get(id);

            if (brand == null)
            {
                return NotFound();
            }

            _brandService.Remove(brand._id);

            return NoContent();
        }
    }
}

