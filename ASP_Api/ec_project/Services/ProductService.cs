using ec_project.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ec_project.Services
{
    public class ProductService
    {
        private readonly IMongoCollection<Product> _products;
        public ProductService(IECProjectDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _products = database.GetCollection<Product>(settings.ProductsCollectionName);
        }

        public List<Product> GetForAnalyse(int indexSkip)
        {
            return _products.Find(product => true)
                        .Skip(indexSkip * 12)
                        .Limit(12)
                        .SortByDescending(p => p.create_time)
                        .ToList();
        }
        public List<Product> GetAll()
        {
            return _products.Find(product => product.status != "Ngừng kinh doanh" && product.product_single==true)
                .SortByDescending(p => p.create_time).ToList();
        }
        public long countTotal()
        {
            return _products.Count(product => true);
        }
        public List<Product> Get(int indexSkip)
        {
            return _products.Find(product => product.status != "Ngừng kinh doanh")
                        .Skip(indexSkip*12)
                        .Limit(12)
                        .SortByDescending(p => p.create_time)
                        .ToList();
        }

        public List<Product> GetMoreProducts(string type, int indexSkip)
        {
            return _products.Find(product => product.status != "Ngừng kinh doanh" && product.category._id == type)
                .Skip(indexSkip * 8)
                .Limit(8)
                .SortByDescending(p => p.create_time)
                .ToList();
        }

        public List<Product> GetMoreProductSets(int indexSkip)
        {
            return _products.Find(product => product.status != "Ngừng kinh doanh" && product.product_set==true)
                .Skip(indexSkip * 8)
                .Limit(8)
                .SortByDescending(p => p.create_time)
                .ToList();
        }

        public List<Product> GetProductsBestSell(){
            return _products.Find(product => product.status!="Ngừng kinh doanh").SortByDescending(p => p.quantity_sale).Limit(6).ToList();
        }

        public List<Product> GetWifiCameras(int indexSkip)
        {
            return _products
                .Find(product => product.category._id == "606a628f4665f514bcd9b59e" && product.status != "Ngừng kinh doanh")
                .Skip(indexSkip * 8)
                .Limit(8)
                .SortByDescending(p => p.create_time)
                .ToList();
        }

        public List<Product> GetSecureCameras(int indexSkip)
        {
            return _products
                .Find(product => product.category._id == "606a62624665f514bcd9b59d" && product.status != "Ngừng kinh doanh")
                .Skip(indexSkip * 8)
                .Limit(8)
                .SortByDescending(p => p.create_time)
                .ToList();
        }

        public List<Product> GetCameraSets(int indexSkip)
        {
            return _products
                .Find(product => product.product_set==true && product.status != "Ngừng kinh doanh")
                .Skip(indexSkip * 8)
                .Limit(8)
                .SortByDescending(p => p.create_time)
                .ToList();
        }

        public List<Product> GetRecordDevices(int indexSkip)
        {
            return _products
                .Find(product => product.category._id == "606a62a54665f514bcd9b59f" && product.status != "Ngừng kinh doanh")
                .Skip(indexSkip * 8)
                .Limit(8)
                .SortByDescending(p => p.create_time)
                .ToList();
        }

        public List<Product> GetSimilarProducts(bool isSingleProduct, string type)
        {
            if (isSingleProduct == true)
            {
                return _products.Find(p => p.status != "Ngừng kinh doanh" && p.category._id == type)
                                .Limit(9)
                                .SortByDescending(p => p.create_time)
                                .ToList();
            }
            else
            {
                return _products.Find(p => p.product_set == true && p.status != "Ngừng kinh doanh")
                                .Limit(9)
                                .SortByDescending(p => p.create_time)
                                .ToList();
            }
        }

        public List<Product> GetSameBrandProducts(string brandId)
        {
            return _products.Find(p => p.status != "Ngừng kinh doanh" && p.brand._id == brandId)
                            .Limit(9)
                            .SortByDescending(p => p.create_time)
                            .ToList();
        }

        public Product Get(string id) =>
            _products.Find<Product>(product => product._id == id).FirstOrDefault();

        public List<Product> Search(string keyWord, string brands, string resolutions, string categories, bool product_type)
        {
            List<Product> searchList = new List<Product>();
            searchList = _products.Find(p => p.product_single==product_type)
                .SortByDescending(p => p.create_time)
                .ToList();

            if(keyWord != ""){
                searchList = searchList.Where(p => p.name.ToLower().Contains(keyWord.ToLower())).ToList();
            }

            if (product_type == true)
            {
                if (brands != "") searchList = Filter(searchList, brands, "brand");
                if (resolutions != "") searchList = Filter(searchList, resolutions, "resolution");
                if (categories != "") searchList = Filter(searchList, categories, "category");
            }

            return searchList;
        }

        private List<Product> Filter(List<Product> searchList, string ids, string filterType)
        {
            string[] idList = ids.Split("-");
            List<Product> filterList = new List<Product>();
            foreach(string id in idList)
            {
                if (filterType == "brand")
                {
                    List<Product> tempList = new List<Product>();
                    tempList = searchList.Where(p => p.brand._id == id).ToList();
                    filterList = filterList.Concat(tempList).ToList();
                }
                else if (filterType == "resolution")
                {
                    List<Product> tempList = searchList.Where(p => p.resolution._id == id).ToList();
                    filterList = filterList.Concat(tempList).ToList();
                }
                else if(filterType == "category")
                {
                    List<Product> tempList = searchList.Where(p => p.category._id == id).ToList();
                    filterList = filterList.Concat(tempList).ToList();
                }
            }
            return filterList;
        }

        public Product Create(Product product)
        {
            _products.InsertOne(product);
            return product;
        }

        public void Update(string id, Product productIn) =>
            _products.ReplaceOne(product => product._id == id, productIn);

        public void Remove(Product productIn) =>
            _products.DeleteOne(product => product._id == productIn._id);

        public void Remove(string id) =>
            _products.DeleteOne(product => product._id == id);
    }
}
