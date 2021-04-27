using ec_project.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ec_project.Services
{
    public class BrandService
    {
        private readonly IMongoCollection<Brand> _brands;

        public BrandService(IECProjectDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _brands = database.GetCollection<Brand>(settings.BrandsCollectionName);
        }

        public List<Brand> GetAll() =>
           _brands.Find(brand => true).ToList();

        public List<Brand> Get() =>
            _brands.Find(brand => brand.status==true).ToList();

        public Brand Get(string id) =>
            _brands.Find<Brand>(brand => brand._id == id).FirstOrDefault();

        public Brand Create(Brand brand)
        {
            _brands.InsertOne(brand);
            return brand;
        }

        public void Update(string id, Brand brandIn) =>
            _brands.ReplaceOne(brand => brand._id == id, brandIn);

        public void Remove(Brand brandIn) =>
            _brands.DeleteOne(brand => brand._id == brandIn._id);

        public void Remove(string id) =>
            _brands.DeleteOne(brand => brand._id == id);
    }
}

