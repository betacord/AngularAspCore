using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using App.Core.Domain;
using App.Core.Repositories;

namespace App.Infrastructure.Extensions
{
    public static class RepositoryExtensions
    {
        public static async Task<User> GetOrFailAsync(this IUserRepository repository, Guid id)
        {
            var user = await repository.GetAsync(id);

            if (user == null)
            {
                throw new Exception($"User with id {id} does not exists!");
            }

            return user;
        }
    }
}