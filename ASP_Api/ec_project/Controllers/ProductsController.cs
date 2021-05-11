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
    public class ProductsController : ControllerBase
    {
        private readonly ProductService _productService;

        public ProductsController(ProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        [Route("CountProductsTotal")]
        public ActionResult<long> CountProductsTotal()
        {
            return _productService.countTotal();
        }

        [HttpGet]
        public ActionResult<List<Product>> Get(int index = 0)
        {
            return _productService.Get(index);
        }

        [HttpGet]
        [Route("GetForAnalyse")]
        public ActionResult<List<Product>> GetForAnalyse(int index = 0)
        {
            return _productService.GetForAnalyse(index);
        }

        [HttpGet]
        [Route("GetAll")]
        public ActionResult<List<Product>> GetAll()
        {
            return _productService.GetAll();
        }

        [HttpGet]
        [Route("GetProductsBestSell")]
        public ActionResult<List<Product>> GetProductsBestSell()
        {
            return _productService.GetProductsBestSell();
        }

        [HttpGet("{id:length(24)}", Name = "GetProduct")]
        public ActionResult<Product> Get(string id)
        {
            var product = _productService.Get(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        [HttpGet]
        [Route("GetWifiCameras")]
        public ActionResult<List<Product>> GetWifiCameras(int indexSkip)
        {
            return _productService.GetWifiCameras(indexSkip);
        }

        [HttpGet]
        [Route("GetSecureCameras")]
        public ActionResult<List<Product>> GetSecureCameras(int indexSkip)
        {
            return _productService.GetSecureCameras(indexSkip);
        }

        [HttpGet]
        [Route("GetCameraSets")]
        public ActionResult<List<Product>> GetCameraSets(int indexSkip)
        {
            return _productService.GetCameraSets(indexSkip);
        }

        [HttpGet]
        [Route("GetRecordDevices")]
        public ActionResult<List<Product>> GetRecordDevices(int indexSkip)
        {
            return _productService.GetRecordDevices(indexSkip);
        }

        [HttpGet]
        [Route("GetMoreProducts")]
        public ActionResult<List<Product>> GetMoreProducts(string type, int indexSkip)
        {
            return _productService.GetMoreProducts(type, indexSkip);
        }

        [HttpGet]
        [Route("GetSimilarProducts")]
        public ActionResult<List<Product>> GetSimilarProducts(bool isSingleProduct, string type)
        {
            return _productService.GetSimilarProducts(isSingleProduct, type);
        }

        [HttpGet]
        [Route("GetSameBrandProducts")]
        public ActionResult<List<Product>> GetSameBrandProduct(string brandId)
        {
            return _productService.GetSameBrandProducts(brandId);
        }

        [HttpGet]
        [Route("GetMoreProductSets")]
        public ActionResult<List<Product>> GetMoreProductSets(int indexSkip)
        {
            return _productService.GetMoreProductSets(indexSkip);
        }

        [HttpGet]
        [Route("SearchProducts")]
        public ActionResult<List<Product>> Search(string keyWord="", string brands="", string categories="", string resolutions="", bool product_type=true)
        {
            string[] categoriesList = categories.Split("-");
            foreach (string category in categoriesList)
            {
                if (category == "606a62d44665f514bcd9b5a0") product_type = false;
            }
            return _productService.Search(keyWord, brands, resolutions, categories, product_type);
        }



        [HttpPost]
        public ActionResult<Product> Create(Product product)
        {
            _productService.Create(product);

            return CreatedAtRoute("GetProduct", new { id = product._id.ToString() }, product);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Product productIn)
        {
            var product = _productService.Get(id);

            if (product == null)
            {
                return NotFound();
            }

            _productService.Update(id, productIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var product = _productService.Get(id);

            if (product == null)
            {
                return NotFound();
            }

            _productService.Remove(product._id);

            return NoContent();
        }
    }
}
