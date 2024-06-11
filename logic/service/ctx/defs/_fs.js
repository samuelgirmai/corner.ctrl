module.exports = {
  mongodb: {
    name: "mongodb",
    port: 27017,
    //user: "corner",
    //passwd: "cornerpasswd",
    host: "127.0.0.1"
  },
  rethinkdb: {
    name: "rethinkdb",
    port: 28015,
    //host: "corner.fs"
    host: "0.0.0.0"
  },
  redis: {
    name: "redis",
    port: 6379,
    host: "0.0.0.0" /*internal network*/
  },
  seaweedfs: {
    name: "seaweedfs",
    port: 9333,
    //host: "corner.asset"
    host: "127.0.0.1"
  }
}
