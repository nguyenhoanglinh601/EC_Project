using ec_project.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ec_project.Services
{
    public class OrderService
    {
        private readonly IMongoCollection<Order> _orders;

        public OrderService(IECProjectDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _orders = database.GetCollection<Order>(settings.OrdersCollectionName);
        }

        public List<Order> GetAll(string customer_id)
        {
            return _orders.Find(order => order.customer_id == customer_id).ToList();
        }

        public List<Order> Search(string customer_name, string customer_phone_number)
        {
            return _orders.Find(order => order.name == customer_name && order.phone_number == customer_phone_number).ToList();
        }

        public Order Get(string id) =>
            _orders.Find<Order>(order => order._id == id).FirstOrDefault();

        public Order Create(Order order)
        {
            _orders.InsertOne(order);
            return order;
        }

        public void Update(string id, Order orderIn) =>
            _orders.ReplaceOne(order => order._id == id, orderIn);

        public void Remove(Order orderIn) =>
            _orders.DeleteOne(order => order._id == orderIn._id);

        public void Remove(string id) =>
            _orders.DeleteOne(order => order._id == id);
    }
}

