using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using App.Infrastructure.DTO;
using App.Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Caching.Memory;

namespace App.Api.Controllers
{
    [Route("[controller]")]
    public class BusinessController : ApiControllerBase
    {
        [HttpGet("admininfo")]
        [Authorize(Policy = "HasAdminRole")]
        public IActionResult AdminInfo()
            => Json($"Witaj administratorze");


        [HttpGet("userinfo")]
        [Authorize]
        public IActionResult UserInfo()
            => Json($"Witaj użytkowniku");

        
    }
}