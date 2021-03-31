using ec_project.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ec_project.Services
{
    public class AdminService
    {
        private readonly IMongoCollection<Admin> _admins;

        public AdminService(IECProjectDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _admins = database.GetCollection<Admin>(settings.AdminsCollectionName);
        }

        public List<Admin> Get() =>
            _admins.Find(admin => true).ToList();

        public Admin Get(string id) =>
            _admins.Find<Admin>(admin => admin._id == id).FirstOrDefault();

        public Admin Create(Admin admin)
        {
            _admins.InsertOne(admin);
            return admin;
        }

        public void Update(string id, Admin adminIn) =>
            _admins.ReplaceOne(admin => admin._id == id, adminIn);

        public void Remove(Admin adminIn) =>
            _admins.DeleteOne(admin => admin._id == adminIn._id);

        public void Remove(string id) =>
            _admins.DeleteOne(admin => admin._id == id);
    }
}

