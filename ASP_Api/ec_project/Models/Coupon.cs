using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ec_project.Models
{
    public class Coupon
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string _id { get; set; }
        public string name { get; set; }
        public decimal value { get; set; }
        public int quantity { get; set; }
        public int use_quantity { get; set; }
        public ulong exp { get; set; }
        public ulong create_time { get; set; }
        public ulong edit_time { get; set; }
        public Admin[] modifier { get; set; }
        public string note { get; set; }
        public string status { get; set; }
    }
}
