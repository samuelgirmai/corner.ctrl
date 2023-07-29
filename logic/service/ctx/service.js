var G = require("./defs/_global");
var F = require("./defs/_fs");
var D = require("./defs/_fs_struct");

import {
  uris2caps
} from '../../fcaps'

let fsys = {
  sii: {
    name: "corner.fsys",
    desc: "corner filesystem service",
    host: null,
    address: {
      phone_number: "+251000000000",
      email: "corner@bokri.xyz"
    }
  },
  api: {
    port: 23001,
    bind: "0.0.0.0",
    addr: "0.0.0.0",
  },
  caps: []
};
fsys.sii.host = fsys.api.addr+":"+fsys.api.port;

/*
 * streaming service SoT
 */
/*let stream = {
  sii: {
    name: "corner.stream",
    desc: "corner streaming service",
    host: null,
    address: {
      phone_number: "+251000000000",
      email: "corner@bokri.xyz"
    }
  },
  api: {
    port: 22002,
    bind: "0.0.0.0",
    addr: "0.0.0.0",
  },
  stream: {
    driver: "socket-io",
    ...G.stream
  },
  caps: []
}
stream.sii.host = stream.api.addr+":"+stream.api.port;*/

/*
 * notif service SoT
 */
/*let notif = {
  sii: {
    name: "corner.notif",
    desc: "corner notification service",
    host: null,
    address: {
      phone_number: "+251000000000",
      email: "corner@bokri.xyz"
    }
  },
  api: {
    port: 22004,
    bind: "0.0.0.0",
    addr: "0.0.0.0",
  },
  caps: [
    "/platform/stream/open",
    "/platform/stream/close",
    "/platform/stream/config/read",
    "/platform/notif/join",
    "/platform/notif/exit",
  ]
}
notif.sii.host = notif.api.addr+":"+notif.api.port;*/

let finance = {
  sii: {
    name: "corner.finance",
    desc: "corner finance service",
    host: null,
    address: {
      phone_number: "+251000000000",
      email: "corner@bokri.xyz"
    }
  },
  api: {
    port: 22005,
    bind: "0.0.0.0",
    addr: "0.0.0.0",
  },
  caps: [
    "/platform/auth/identity/person/read",
    "/platform/auth/prng/write"
  ]
};
finance.sii.host = finance.api.addr+":"+finance.api.port;

let payment = {
  sii: {
    name: "corner.payment",
    desc: "corner payment service",
    host: null,
    address: {
      phone_number: "+251000000000",
      email: "corner@bokri.xyz"
    }
  },
  api: {
    port: 22006,
    bind: "0.0.0.0",
    addr: "0.0.0.0",
  },
  caps: [
    '/platform/finance/account/read',
    '/platform/finance/account/balance/read',
    '/platform/finance/order/write',
    '/platform/finance/invoice/write',
    '/platform/finance/invoice/read',
    '/platform/finance/account/transaction/write',
    '/platform/finance/receipt/write',
    '/platform/finance/insurance/scheme/write'
  ]
};
payment.sii.host = payment.api.addr+":"+payment.api.port;

let admin = {
  sii: {
    name: "corner.admin",
    desc: "corner admin service",
    host: null,
    address: {
      phone_number: "+251000000000",
      email: "corner@bokri.xyz"
    }
  },
  api: {
    port: 22007,
    bind: "0.0.0.0",
    addr: "0.0.0.0",
  },
  caps: [
    '/platform/auth/identity/access/write',
    '/platform/auth/identity/access/delete',
    '/platform/auth/identity/person/security/update',
    '/platform/auth/identity/person/write',
    '/platform/auth/identity/person/update',
    '/platform/auth/identity/person/delete',

    '/platform/auth/cap/list/allow',
    '/platform/auth/cap/list/revoke',

    /*for issuance user*/
    '/platform/issuance/user/write',
    '/platform/issuance/user/delete',
    '/platform/issuance/user/list/read',

    /*for deduplication user*/
    '/platform/dedup/user/write',
    '/platform/dedup/user/delete',
    '/platform/dedup/user/list/read',

    /*for dummy user*/
    '/platform/dummy/user/write',
    '/platform/dummy/user/delete',
    '/platform/dummy/user/list/read',

    /*for geofense user*/
    '/iot/geofense/user/write',
    '/iot/geofense/user/delete',
    '/iot/geofense/user/list/read'
  ]
};
admin.sii.host = admin.api.addr+":"+admin.api.port;

let system = {
  sii: {
    name: "corner.system",
    desc: "corner sys service",
    host: null,
    address: {
      phone_number: "+251000000000",
      email: "corner@bokri.xyz"
    }
  },
  api: {
    port: 22008,
    bind: "0.0.0.0",
    addr: "0.0.0.0",
  },
  caps: [
    "/platform/auth/identity/access/write",
    "/platform/auth/identity/access/delete",
    "/platform/auth/identity/person/security/update",

    '/platform/auth/identity/person/write',
    '/platform/auth/identity/person/delete',
    '/platform/auth/identity/person/list/read',
    '/platform/auth/identity/client/write',
    '/platform/auth/identity/client/delete',
    '/platform/auth/identity/client/list/read',
    '/platform/auth/identity/service/write',
    '/platform/auth/identity/service/delete',
    '/platform/auth/identity/service/list/read',
    '/platform/auth/cap/list/read',
    '/platform/auth/cap/list/delete',
    '/platform/auth/cap/list/allow',
    '/platform/auth/cap/list/revoke',
    '/platform/auth/cap/list/export',
    '/platform/auth/cap/state/update',
    '/platform/auth/stats/read',
    '/platform/auth/service/state/list/read'
  ]
};
system.sii.host = system.api.addr+":"+system.api.port;

/*
 * asset service SoT
 */
export var asset = {
  sii: {
    name: "corner.asset",
    desc: "corner asset service",
    host: null,
    address: {
      phone_number: "+251000000000",
      email: "corner@bokri.xyz"
    }
  },
  api: G.asset,
  caps: [
    "/platform/auth/identity/person/fingerprint/write",
    "/platform/auth/identity/person/photo/write",
    "/platform/issuance/identity/photo/write",
    "/platform/issuance/identity/photo/update"
  ]
}
asset.sii.host = asset.api.addr+":"+asset.api.port

let ashera = {
  sii: {
    name: "corner.ashera",
    desc: "corner ashera service",
    host: null,
    address: {
      phone_number: "+251000000000",
      email: "corner@bokri.xyz"
    }
  },
  api: {
    port: 22010,
    bind: "0.0.0.0",
    addr: "0.0.0.0",
  },
  fs: {
    name: "ashera",
    port: 29001,
    host: "127.0.0.1"
  },
  caps: []
}
ashera.sii.host = ashera.api.addr+":"+ashera.api.port;

let issuance = {
  sii: {
    name: "corner.issuance.test",
    desc: "corner issuance test service",
    host: null,
    address: {
      phone_number: "+251000000000",
      email: "corner@bokri.xyz"
    }
  },
  api: {
    port: 22011,
    bind: "0.0.0.0",
    addr: "0.0.0.0",
  },
  caps: [
    "/platform/auth/identity/person/write",
    "/platform/auth/identity/person/update",
    "/platform/auth/identity/person/delete",
    "/platform/auth/identity/access/write",
    "/platform/auth/identity/access/delete",
    "/platform/auth/identity/person/security/update",
    "/platform/auth/prng/write",
    "/platform/auth/identity/person/read"
  ]
};
issuance.sii.host = issuance.api.addr+":"+issuance.api.port;

let dedup = {
  sii: {
    name: "corner.dedup",
    desc: "corner deduplication service",
    host: null,
    address: {
      phone_number: "+251000000000",
      email: "corner@bokri.xyz"
    }
  },
  api: {
    port: 22012,
    bind: "0.0.0.0",
    addr: "0.0.0.0",
  },
  caps: [
    "/platform/auth/identity/person/write",
    "/platform/auth/identity/person/update",
    "/platform/auth/identity/person/delete",
    "/platform/auth/identity/access/write",
    "/platform/auth/identity/access/delete",
    "/platform/auth/identity/person/security/update",

    "/platform/auth/identity/person/read",
    "/platform/auth/identity/client/read",
    "/platform/auth/identity/service/read"
  ]
};
dedup.sii.host = dedup.api.addr+":"+dedup.api.port;

let dummy = {
  sii: {
    name: "corner.dummy",
    desc: "corner dummy test service",
    host: null,
    address: {
      phone_number: "+251000000000",
      email: "corner@bokri.xyz"
    }
  },
  api: {
    port: 32000,
    bind: "0.0.0.0",
    addr: "0.0.0.0",
  },
  caps: [
    "/platform/auth/identity/person/write",
    "/platform/auth/identity/person/update",
    "/platform/auth/identity/person/delete",
    "/platform/auth/identity/access/write",
    "/platform/auth/identity/access/delete",
    "/platform/auth/identity/person/security/update",
    "/platform/auth/prng/write",
    "/platform/auth/identity/person/read"
  ]
};
dummy.sii.host = dummy.api.addr+":"+dummy.api.port;

let geofense = {
  sii: {
    name: "corner.geofense",
    desc: "corner iot geofense PoC service",
    host: null,
    address: {
      phone_number: "+251000000001",
      email: "corner@synapse.io"
    }
  },
  api: {
    port: 42000,
    bind: "0.0.0.0",
    addr: "0.0.0.0",
  },
  caps: [
    "/platform/auth/identity/person/write",
    "/platform/auth/identity/person/update",
    "/platform/auth/identity/person/delete",
    "/platform/auth/identity/access/write",
    "/platform/auth/identity/access/delete",
    "/platform/auth/identity/person/security/update",
    "/platform/auth/prng/write",
    "/platform/auth/identity/person/read"
  ]
};
geofense.sii.host = geofense.api.addr+":"+geofense.api.port;

module.exports = {
  fsys: {
    name: "corner.fsys",
    sii: fsys.sii,
    conf: {
      proxy: G.proxy,
      api: fsys.api,
      name: fsys.sii.name,
    },
    caps: uris2caps(fsys.caps)
  },
  /*stream: {
    name: "corner.stream",
    sii: stream.sii,
    conf: {
      proxy: G.proxy,
      assert: G.auth,
      api: stream.api,
      cachefs: F.redis,
      stream: stream.stream,
      name: stream.sii.name
    },
    caps: uris2caps(stream.caps)
  },
  notif: {
    name: "corner.notif",
    sii: notif.sii,
    conf: {
      proxy: G.proxy,
      stream: G.stream,
      api: notif.api,
      name: notif.sii.name
    },
    caps: uris2caps(notif.caps)
  },*/
  finance: {
    name: "corner.finance",
    sii: finance.sii,
    conf: {
      proxy: G.proxy,
      //stream: G.stream,
      api: finance.api,
      name: finance.sii.name
    },
    caps: uris2caps(finance.caps),
    fsys: {
      version: "v1.0",
      conf: {
        fs: F.mongodb
      },
      dir: D.finance
    }
  },
  payment: {
    name: "corner.payment",
    sii: payment.sii,
    conf: {
      proxy: G.proxy,
      //stream: G.stream,
      api: payment.api,
      name: payment.sii.name
    },
    caps: uris2caps(payment.caps)
  },
  admin: {
    name: "corner.admin",
    sii: admin.sii,
    conf: {
      proxy: G.proxy,
      //stream: G.stream,
      /*
       * FIXME: this breaks the "Corner SoT" principle
       * i.e admin uservice should have its own fs
       * */
      fs: F.mongodb,
      api: admin.api,
      name: admin.sii.name
    },
    caps: uris2caps(admin.caps)
  },
  asset: {
    name: "corner.asset",
    sii: asset.sii,
    conf: {
      proxy: G.proxy,
      api: asset.api,
      fs: F.seaweedfs,
      name: asset.sii.name
    },
    caps: uris2caps(asset.caps)
  },
  ashera: {
    name: "corner.ashera",
    sii: ashera.sii,
    conf: {
      proxy: G.proxy,
      api: ashera.api,
      fs: ashera.fs,
      name: ashera.sii.name
    },
    caps: uris2caps(ashera.caps)
  },
  issuance: {
    name: "corner.issuance",
    sii: issuance.sii,
    conf: {
      proxy: G.proxy,
      //stream: G.stream,
      api: issuance.api,
      name: issuance.sii.name
    },
    caps: uris2caps(issuance.caps),
    fsys: {
      version: "v1.0",
      conf: {
        fs: F.mongodb
      },
      dir: D.issuance
    }
  },
  dedup: {
    name: "corner.dedup",
    sii: dedup.sii,
    conf: {
      proxy: G.proxy,
      fs: F.mongodb,
      api: dedup.api,
      name: dedup.sii.name
    },
    caps: uris2caps(dedup.caps),
    fsys: {
      version: "v1.0",
      conf: {
        fs: F.mongodb
      },
      dir: D.dedup
    }
  },
  dummy: {
    name: "corner.dummy",
    sii: dummy.sii,
    conf: {
      proxy: G.proxy,
      api: dummy.api,
      name: dummy.sii.name
    },
    caps: uris2caps(dummy.caps),
    fsys: {
      version: "v1.0",
      conf: {
        fs: F.mongodb
      },
      dir: D.dummy
    }
  },
  geofense: {
    name: "corner.geofense",
    sii: geofense.sii,
    conf: {
      proxy: G.proxy,
      api: geofense.api,
      name: geofense.sii.name
    },
    caps: uris2caps(geofense.caps),
    fsys: {
      version: "v1.0",
      conf: {
        fs: F.mongodb
      },
      dir: D.geofense
    }
  }
}

