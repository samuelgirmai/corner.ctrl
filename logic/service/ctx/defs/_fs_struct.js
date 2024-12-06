let corner = [
  {
    "name": "corner",
    "file": [
      {
        "name": "cap",
        "index": [
	  {key: "desc", val: 1, unq: false},
	  {key: "uri", val: 1, unq: true},
	  {key: "cap_id", val: 1, unq: true}
        ]
      },
      {
        "name": "identity",
        "index": [
	  {key: "pii.name", val: 1, unq: false},
	  {key: "sii.name", val: 1, unq: false},
	  {key: "cii.name", val: 1, unq: false},
	  {key: "type", val: 1, unq: false},
	  {key: "user_id", val: 1, unq: true},
	  {key: "access.token.tid", val: 1, unq: false},
	  {key: "security.license.lid", val: 1, unq: false},
	  {key: "pii.address.phone_number", val: 1, unq: false}
        ]
      },
      {
        "name": "user",
        "index": [
	  {key: "pii.name", val: 1, unq: false},
	  {key: "user_id", val: 1, unq: true},
	  {key: "pii.address.phone_number", val: 1, unq: false}
        ]
      },
      {
        "name": "access",
        "index": []
      },
      {
        "name": "notif",
        "index": []
      },
      {
        "name": "stats",
        "index": []
      },
      {
        "name": "prn",
        "index": [
	  {key: "value", val: 1, unq: true}
	]
      }      
    ]
  }
]

let finance = [
  {
    "name": "finance",
    "file": [
      {
        "name": "financeAccount",
        "index": []
      },
      {
        "name": "insuranceScheme",
        "index": []
      },
      {
        "name": "transaction",
        "index": []
      },
      {
        "name": "serviceOrder",
        "index": []
      },
      {
        "name": "bill",
        "index": []
      }
    ]
  }
]

let issuance = [
  {
    "name": "issuance",
    "file": [
      {
        "name": "identity",
        "index": [
	  {key: "pii.name", val: 1, unq: false},
	  {key: "pii.address.phone_number", val: 1, unq: false},
	  {key: "user_id", val: 1, unq: false},
	  {key: "reg_id", val: 1, unq: true}
        ]
      }
    ]
  }
]

let dedup = [
  {
    "name": "dedup",
    "file": [
      {
        "name": "index",
        "index": [
	  {key: "user_id", val: 1, unq: true}
	]
      }
    ]
  }
]

let dummy = [
  {
    "name": "dummy",
    "file": [
      {
        "name": "data",
        "index": [
	  {key: "data_id", val: 1, unq: true}
        ]
      }
    ]
  }
]

let geofense = [
  {
    "name": "geofense",
    "file": [
      {
        "name": "border",
        "index": [
          {key: "bid", val: 1, unq: true}
        ]
      },
      {
        "name": "sensor",
        "index": [
          {key: "sid", val: 1, unq: true}
        ]
      },
      {
        "name": "fense",
        "index": [
          {key: "fid", val: 1, unq: true}
        ]
      }
    ]
  }
]

let cexch = [
  {
    "name": "cexch",
    "file": [
      {
        "name": "transfer",
        "index": [
          {key: "req_id", val: 1, unq: true}
        ]
      },
      {
        "name": "fragment",
        "index": [
          {key: "req_id", val: 1, unq: false},
          {key: "frag_id", val: 1, unq: true}
        ]
      },
      {
        "name": "fcDeposite",
        "index": [
          {key: "req_id", val: 1, unq: false},
          {key: "fcDeposite_id", val: 1, unq: true}
        ]
      },
      {
        "name": "lcDeposite",
        "index": [
          {key: "req_id", val: 1, unq: false},
          {key: "frag_id", val: 1, unq: false},
          {key: "lcDeposite_id", val: 1, unq: true}
        ]
      },
      {
        "name": "txidInfo",
        "index": [
          {key: "req_id", val: 1, unq: false},
          {key: "frag_id", val: 1, unq: false},
          {key: "txidInfo_id", val: 1, unq: true}
        ]
      },
      {
        "name": "lcDepositeLock",
        "index": [
          {key: "req_id", val: 1, unq: false},
          {key: "frag_id", val: 1, unq: false},
          {key: "lock_id", val: 1, unq: true}
        ]
      },
      {
        "name": "txidInfoLock",
        "index": [
          {key: "req_id", val: 1, unq: false},
          {key: "frag_id", val: 1, unq: false},
          {key: "lock_id", val: 1, unq: true}
        ]
      },
      {
        "name": "sms",
        "index": [
          {key: "code", val: 1, unq: true},
          {key: "phone_number", val: 1, unq: false}
        ]
      },
      {
        "name": "firebaseToken",
        "index": [
          {key: "token", val: 1, unq: true},
          {key: "user_id", val: 1, unq: false}
        ]
      }
    ]
  }
]

module.exports = {
  corner: corner,
  finance: finance,
  issuance: issuance,
  dedup: dedup,
  dummy: dummy,
  geofense: geofense,
  cexch: cexch
}

