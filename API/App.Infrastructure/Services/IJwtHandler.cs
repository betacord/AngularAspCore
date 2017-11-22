using System;
using System.Collections.Generic;
using System.Text;
using App.Infrastructure.DTO;

namespace App.Infrastructure.Services
{
    public interface IJwtHandler
    {
        JwtDto CreateToken(Guid userId, string role);
    }
}