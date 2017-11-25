using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using App.Core.Repositories;
using App.Infrastructure.Repositories;
using App.Infrastructure.Services;
using App.Infrastructure.Mappers;
using App.Infrastructure.Settings;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace App.Api
{
    public class Startup
    {
        IOptions<JwtSettings> jwtSettings;

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc()
                .AddJsonOptions(x => x.SerializerSettings.Formatting = Formatting.Indented);

            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IUserService, UserService>();
            services.AddSingleton<IJwtHandler, JwtHandler>();
            services.AddSingleton(AutoMapperConfig.Initialize());
            services.Configure<JwtSettings>(Configuration.GetSection("jwt"));

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                    .AddJwtBearer(options =>
                    {
                        options.TokenValidationParameters =

                             new TokenValidationParameters
                             {
                                 ValidIssuer = jwtSettings.Value.Issuer, 
                                 ValidateAudience = false,
                                 IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.Value.Key as string))
                             };
                    });

            services.AddAuthorization(x => x.AddPolicy("HasAdminRole", p => p.RequireRole("admin")));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            jwtSettings = app.ApplicationServices.GetService<IOptions<JwtSettings>>();

            app.UseCors(
                options => options.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod().AllowCredentials()
            );

            app.UseAuthentication();
            app.UseMvc();
        }
    }
}
