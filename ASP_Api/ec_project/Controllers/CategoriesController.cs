
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
    public class CategoriesController : ControllerBase
    {
        private readonly CategoryService _categoryService;

        public CategoriesController(CategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet]
        public ActionResult<List<Category>> Get() =>
            _categoryService.Get();

        [HttpGet("{id:length(24)}", Name = "GetCategory")]
        public ActionResult<Category> Get(string id)
        {
            var category = _categoryService.Get(id);

            if (category == null)
            {
                return NotFound();
            }

            return category;
        }

        [HttpPost]
        public ActionResult<Category> Create(Category category)
        {
            _categoryService.Create(category);

            return CreatedAtRoute("GetCategory", new { id = category._id.ToString() }, category);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Category categoryIn)
        {
            var category = _categoryService.Get(id);

            if (category == null)
            {
                return NotFound();
            }

            _categoryService.Update(id, categoryIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var category = _categoryService.Get(id);

            if (category == null)
            {
                return NotFound();
            }

            _categoryService.Remove(category._id);

            return NoContent();
        }
    }
}

