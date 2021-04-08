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

        public List<Product> Get(int indexSkip)
        {
            return _products.Find(product => true)
                        .Skip(indexSkip*4)
                        .Limit(4)
                        .ToList();
        }

        public List<Product> GetProductsBestSell(){
            return _products.Find(product => true).SortByDescending(p => p.quantity_sale).Limit(6).ToList();
        }
            
        public Product Get(string id) =>
            _products.Find<Product>(product => product._id == id).FirstOrDefault();

        public List<Product> Search(string keyWord)
        {
            return _products.Find(p => p.name.Contains(keyWord)).ToList();
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
