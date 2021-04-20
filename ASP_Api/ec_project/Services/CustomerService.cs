using ec_project.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ec_project.Services
{
    public class CustomerService
    {
        private readonly IMongoCollection<Customer> _customers;

        public CustomerService(IECProjectDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _customers = database.GetCollection<Customer>(settings.CustomersCollectionName);
        }

        public List<Customer> Get() =>
            _customers.Find(customer => true).ToList();

        public Customer Get(string id) =>
            _customers.Find<Customer>(customer => customer._id == id).FirstOrDefault();

        public Customer Create(Customer customer)
        {
            _customers.InsertOne(customer);
            return customer;
        }

        public void Update(string id, Customer customerIn) =>
            _customers.ReplaceOne(customer => customer._id == id, customerIn);

        public void Remove(Customer customerIn) =>
            _customers.DeleteOne(customer => customer._id == customerIn._id);

        public void Remove(string id) =>
            _customers.DeleteOne(customer => customer._id == id);

        public Customer isExist(Customer customerIn) {
            Customer customer = _customers.Find(c => c.phone_number == customerIn.phone_number && c.password == customerIn.password).FirstOrDefault();
            if(customer!=null) customer.password = "";
            return customer;
        }
    }
}
