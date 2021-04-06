using ec_project.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ec_project.Services
{
    public class CategoryService
    {
        private readonly IMongoCollection<Category> _categories;
        public CategoryService(IECProjectDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _categories = database.GetCollection<Category>(settings.CategoriesCollectionName);
        }

        public List<Category> Get()
        {
            return _categories.Find(category => true).ToList();
        }

        public Category Get(string id) =>
            _categories.Find<Category>(category => category._id == id).FirstOrDefault();

        public Category Create(Category category)
        {
            _categories.InsertOne(category);
            return category;
        }

        public void Update(string id, Category categoryIn) =>
            _categories.ReplaceOne(category => category._id == id, categoryIn);

        public void Remove(Category categoryIn) =>
            _categories.DeleteOne(category => category._id == categoryIn._id);

        public void Remove(string id) =>
            _categories.DeleteOne(category => category._id == id);
    }
}
