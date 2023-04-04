/*import {muxer, auth} from './basic'
import {asset, corner_stream} from './service'

export let proxy = {
  url: "http://"+muxer.addr+":"+muxer.port
}

export let asset_proxy = {
  url: "http://"+asset.api.addr+":"+asset.api.port
}

export let assert = {
  url: "http://"+auth.api.addr+":"+auth.api.port
}

export let stream = {
  url: "http://"+corner_stream.stream.addr+":"+corner_stream.stream.port
}*/

var MUXER_PORT = 22000
var MUXER_ADDR = "0.0.0.0"
var MUXER_BIND = "0.0.0.0"

var AUTH_PORT = 22001
var AUTH_ADDR = "0.0.0.0"
var AUTH_BIND = "0.0.0.0"

var ASSET_PORT = 22009
var ASSET_ADDR = "0.0.0.0"
var ASSET_BIND = "0.0.0.0"

var STREAM_PORT = 22003
var STREAM_ADDR = "0.0.0.0"
var STREAM_BIND = "0.0.0.0"

module.exports = {
  muxer: {
    addr: MUXER_ADDR,
    port: MUXER_PORT,
    bind: MUXER_BIND,
    url: "http://"+MUXER_ADDR+":"+MUXER_PORT 
  },
  auth: {
    addr: AUTH_ADDR,
    port: AUTH_PORT,
    bind: AUTH_BIND,
    url: "http://"+AUTH_ADDR+":"+AUTH_PORT
  },
  asset: {
    addr: ASSET_ADDR,
    port: ASSET_PORT,
    bind: ASSET_BIND,
    url: "http://"+ASSET_ADDR+":"+ASSET_PORT
  },
  stream: {
    addr: STREAM_ADDR,
    port: STREAM_PORT,
    bind: STREAM_BIND,
    url: "http://"+STREAM_ADDR+":"+STREAM_PORT
  }
}

