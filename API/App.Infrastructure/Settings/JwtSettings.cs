using System;
using System.Collections.Generic;
using System.Text;

namespace App.Infrastructure.Settings
{
    public class JwtSettings
    {
        public string Key { get; set; }

        public string Issuer { get; set; }

        public string Audience { get; set; }

        public int ExpiryMinutes { get; set; }
    }
}