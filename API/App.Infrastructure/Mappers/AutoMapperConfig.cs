using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoMapper;
using App.Core.Domain;
using App.Infrastructure.DTO;

namespace App.Infrastructure.Mappers
{
    public static class AutoMapperConfig
    {
        public static IMapper Initialize()
            => new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<User, AccountDto>();
            })
            .CreateMapper();
    }
}