var F = require("./defs/_fs");
var G = require("./defs/_global");
var D = require("./defs/_fs_struct");

import {
  uris2caps
} from '../../fcaps'

export let auth = {
  sii: {
    name: "corner.auth",
    desc: "corner authentication service",
    owner_name: "bokri",
    host: null,
    address: {
      phone_number: "+251000000000",
      email: "corner@bokri.xyz"
    }
  },
  cii: {
    name: "corner.client.root",
    desc: "corner authentication root client",
    owner_name: "bokri",
    address: {
      phone_number: "+251000000000",
      email: "corner@bokri.xyz"
    }
  },
  api: G.auth,
  caps: [
    //"/platform/notif/heartbeat",
    "/platform/stream/heartbeat",
    "/platform/finance/heartbeat",
    "/platform/payment/heartbeat",
    "/platform/system/heartbeat",
    "/platform/admin/heartbeat",
    "/platform/asset/heartbeat",
    "/platform/issuance/heartbeat",
    "/platform/dedup/heartbeat",
    "/platform/dummy/heartbeat",
    "/platform/fsys/heartbeat",
    "/platform/ashera/heartbeat",
    "/iot/geofense/heartbeat",
    "/exch/scheme1/heartbeat",
    "/platform/dedup/identity/person/duplicate/list/read",
    "/platform/dedup/index/write",
    "/platform/dedup/index/update",
    "/platform/dedup/index/delete",
    "/platform/stream/open",
    "/platform/stream/close",
    //"/platform/stream/config/read",
    "/platform/auth/search/join",
    "/platform/auth/search/exit",
    "/platform/ashera/identity/person/fingerprint/verify"
  ]
};
auth.sii.host = auth.api.addr+":"+auth.api.port;

module.exports = {
  muxer: {
    name: "corner.muxer",
    conf: {
      api: G.muxer,
      assert: G.assert
    }
  },
  auth: {
    name: "corner.auth",
    sii: auth.sii,
    cii: auth.cii,
    conf: {
      proxy: G.proxy,
      stream: G.stream,
      asset: G.asset,
      api: auth.api,
      name: auth.sii.name,
    },
    caps: uris2caps(auth.caps),
    fsys: {
      version: "v1.0",
      conf: {
        fs: F.mongodb
      },
      dir: D.corner
    }
  }
}

