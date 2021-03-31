using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ec_project.Models
{
    public class Product
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string _id { get; set; }
        public string name { get; set; }
        public Brand brand { get; set; }
        public string warranty { get; set; }
        public string color { get; set; }
        public Resolution resolution { get; set; }
        public string sensor { get; set; }
        public string lens { get; set; }
        public string feature { get; set; }
        public string power_source { get; set; }
        public string connect_type { get; set; }
        public string dimension { get; set; }
        public string quanlity { get; set; }
        public decimal price { get; set; }
        public string quantity { get; set; }
        public string[] images { get; set; }
        public string description { get; set; }
        public string deliver { get; set; }
        public string thumbnail { get; set; }
        public Category category { get; set; }
        public string status { get; set; }
    }
}
