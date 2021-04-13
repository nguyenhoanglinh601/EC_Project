
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
    public class ResolutionsController : ControllerBase
    {
        private readonly ResolutionService _resolutionService;

        public ResolutionsController(ResolutionService resolutionService)
        {
            _resolutionService = resolutionService;
        }

        [HttpGet]
        public ActionResult<List<Resolution>> Get() =>
            _resolutionService.Get();

        [HttpGet("{id:length(24)}", Name = "GetResolution")]
        public ActionResult<Resolution> Get(string id)
        {
            var resolution = _resolutionService.Get(id);

            if (resolution == null)
            {
                return NotFound();
            }

            return resolution;
        }

        [HttpPost]
        public ActionResult<Resolution> Create(Resolution resolution)
        {
            _resolutionService.Create(resolution);

            return CreatedAtRoute("GetResolution", new { id = resolution._id.ToString() }, resolution);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Resolution resolutionIn)
        {
            var resolution = _resolutionService.Get(id);

            if (resolution == null)
            {
                return NotFound();
            }

            _resolutionService.Update(id, resolutionIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var resolution = _resolutionService.Get(id);

            if (resolution == null)
            {
                return NotFound();
            }

            _resolutionService.Remove(resolution._id);

            return NoContent();
        }
    }
}

