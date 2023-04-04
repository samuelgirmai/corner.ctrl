/*
 * filesystem SoT
 */
export let filesystem_m = {
  name: "mongodb",
  port: 27017,
  //host: "corner.fs"
  host: "0.0.0.0"
}

export let filesystem_r = {
  name: "rethinkdb",
  port: 28015,
  //host: "corner.fs"
  host: "0.0.0.0"
}

/*
 * in mempry fs config
 * FIXME: decouple filesystem and cache
*/
export let cachefs = {
  name: "redis",
  port: 6379,
  host: "0.0.0.0" /*internal network*/
}

/*
 * asset filesystem
 */
export let assetfs = {
  name: "seaweedfs",
  port: 9333,
  //host: "corner.asset"
  host: "0.0.0.0"
}

module.exports = {
  mongodb: {
    name: "mongodb",
    port: 27017,
    //host: "corner.fs"
    host: "0.0.0.0"
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
    host: "0.0.0.0"
  }
}
