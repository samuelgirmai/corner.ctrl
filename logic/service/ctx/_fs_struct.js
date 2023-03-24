let corner = [
  {
    "name": "corner",
    "file": [
      {
        "name": "cap",
        "index": [
          "desc",
	  "uri",
	  "cap_id"
        ]
      },
      {
        "name": "identity",
        "index": [
          "pii.name",
          "sii.name",
          "cii.name",
	  "type",
	  "user_id",
	  "access.token.tid",
	  "security.license.lid",
	  "pii.address.phone_number"
        ]
      },
      {
        "name": "user",
        "index": [
          "pii.name",
          "user_id",
	  "pii.address.phone_number"
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
	  "value"
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
          "pii.name",
	  "pii.address.phone_number",
	  "user_id",
	  "reg_id"
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
	  "user_id"
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
          "data_id"
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
  dummy: dummy
}

