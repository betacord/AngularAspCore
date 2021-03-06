using System;
using System.Collections.Generic;
using System.Text;

namespace App.Infrastructure.DTO
{
    public class AccountDto
    {
        public Guid Id { get; set; }

        public string Email { get; set; }

        public string Role { get; set; }

        public string Name { get; set; }
    }
}