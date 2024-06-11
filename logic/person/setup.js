import {
  uris2caps
} from '../fcaps'

/*
 * CORNER root user
 */
let admin = {
  pii: {
    name: "admin",
    fname: "user",
    gfname: "fana",
    mname: "zimam",
    mfname: "berhane",
    gender: "F",
    dob: "12/12/1985",
    address: {
      region: "ትግራይ",
      woreda: "ወርቃምባ",
      tabiya: "እንዳባኖ",
      phone_number: "0914198976"
    }
  },
  /*caps: [
    '/platform/admin/user/write',
    '/platform/admin/user/delete',
    '/platform/admin/user/list/read',
    '/platform/admin/user/role/write',
    '/platform/admin/user/role/delete',
    '/platform/admin/user/role/read',
    '/platform/admin/stats/read',
    '/platform/admin/access/write',
    '/platform/admin/access/delete',
    '/platform/admin/security/update'
  ]*/
}

module.exports = {
  admin: {
    name: admin.pii.name,
    pii: admin.pii,
    //caps: uris2caps(admin.caps)
  }
}


