using ec_project.Models;
using ec_project.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Net.Http.Headers;

namespace ec_project
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(
                options => options.AddPolicy("MyAllowHeadersPolicy",
                builder =>
                {
                    // requires using Microsoft.Net.Http.Headers;
                    builder.WithOrigins("http://localhost:4200")
                           .WithHeaders(HeaderNames.ContentType, "x-custom-header");
                })
            );

            // requires using Microsoft.Extensions.Options
            services.Configure<ECProjectDatabaseSettings>(
                Configuration.GetSection(nameof(ECProjectDatabaseSettings)));

            services.AddSingleton<IECProjectDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<ECProjectDatabaseSettings>>().Value);

            services.AddSingleton<AdminService>();
            services.AddSingleton<ProductService>();
            services.AddSingleton<BrandService>();
            services.AddSingleton<CategoryService>();


            services.AddControllers()
                .AddNewtonsoftJson(options => options.UseMemberCasing());
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "ec_project", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ec_project v1"));
            }

            app.UseCors(
                options => options.WithOrigins("http://localhost:4200")
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials()
            );

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

           
        }
    }
}
