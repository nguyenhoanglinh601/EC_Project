using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ec_project.Models
{
    public class ECProjectDatabaseSettings: IECProjectDatabaseSettings
    {
        public string ProductsCollectionName { get; set; }
        public string AdminsCollectionName { get; set; }
        public string BrandsCollectionName { get; set; }
        public string CategoriesCollectionName { get; set; }
        public string ResolutionsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IECProjectDatabaseSettings
    {
        string ProductsCollectionName { get; set; }
        string AdminsCollectionName { get; set; }
        string BrandsCollectionName { get; set; }
        string CategoriesCollectionName { get; set; }
        string ResolutionsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
