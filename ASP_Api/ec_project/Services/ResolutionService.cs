using ec_project.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ec_project.Services
{
    public class ResolutionService
    {
        private readonly IMongoCollection<Resolution> _resolutions;
        public ResolutionService(IECProjectDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _resolutions = database.GetCollection<Resolution>(settings.ResolutionsCollectionName);
        }

        public List<Resolution> Get()
        {
            return _resolutions.Find(resolution => true).ToList();
        }

        public Resolution Get(string id) =>
            _resolutions.Find<Resolution>(resolution => resolution._id == id).FirstOrDefault();

        public Resolution Create(Resolution resolution)
        {
            _resolutions.InsertOne(resolution);
            return resolution;
        }

        public void Update(string id, Resolution resolutionIn) =>
            _resolutions.ReplaceOne(resolution => resolution._id == id, resolutionIn);

        public void Remove(Resolution resolutionIn) =>
            _resolutions.DeleteOne(resolution => resolution._id == resolutionIn._id);

        public void Remove(string id) =>
            _resolutions.DeleteOne(resolution => resolution._id == id);
    }
}
