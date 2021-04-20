using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ec_project.Models
{
    public class Order
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string _id { get; set; }
        public string customer_id { get; set; }
        public Boolean location_home { get; set; }
        public Boolean location_showroom { get; set; }
        public string name { get; set; }
        public string phone_number { get; set; }
        public string email { get; set; }
        public string city { get; set; }
        public string district { get; set; }
        public string ward { get; set; }
        public string street { get; set; }
        public string home_number { get; set; }
        public string showroom_info { get; set; }
        public string note { get; set; }
        public string payment_method { get; set; }
        public Boolean export_bill { get; set; }
        public CartItem[] carts { get; set; }
        public ulong order_time { get; set; }
        public decimal deliver_expense { get; set; }
        public ulong shipping_time { get; set; }
        public int status { get; set; }
    }
}
