module.exports = {
  "DB": {
    "Type":"postgres",
    "User":"duo",
    "Password":"DuoS123",
    "Port":5432,
    "Host":"192.168.3.200",
    "Database":"dvpdb"
  },
  "Redis":
  {
    "ip": "192.168.3.200",
    "port": "6379"

  },

  "Host":
  {
    "domain": "0.0.0.0",
    "port": "8083",
    "version":"6.0",
    "hostpath":"./config",
    "logfilepath": ""
  }
};