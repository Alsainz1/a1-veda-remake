// Here all versions are located, the same as app.js but this time its apps.js because all versions info is located in this one file
// To add more versions, copy the versions.v1 and replace with versions.v2, and the same with others (it support more than 9 versions)

versions.v1 = {
  name: "Veda",
  version: "track1",
  date: "2025",
  folder: "asset-v1/", // ← If you are adding more versions, make sure follder is correct, for example "asset-v2/" for v2
  looptime: 8e3,
  bpm: 120,
  totalframe: 544,
  nbpolo: 7,
  bonusloopA: false, // ← It makes bonus start on loop A, if its false, bonus will start after 1 loop
  bonusendloopA: true,
  colBck: "#00483A",
  col0: "#0D8A6C",
  col1: "#06B187",
  col2: "#0a7359",
  col3: "#09634E",
  col4: "#ffffff",
  animearray: [
    {
      name:"1_kick",
      color:"2487C2",
      uniqsnd:!1
    },

    {
      name:"2_hit",
      color:"2487C2"
      ,uniqsnd:!0
    },

    {
      name:"3_snare",
      color:"2487C2",
      uniqsnd:!0
    },

    {
      name:"4_tucbell",
      color:"2487C2",
      uniqsnd:!0
    },

    {
      name:"5_perc",
      color:"2487C2",
      uniqsnd:!1
    },

    {
      name:"6_bass",
      color:"06B187",
      uniqsnd:!1
    },
    
    {
      name:"7_shaker",
      color:"06B187",
      uniqsnd:!1
    },

    {
      name:"8_birdo",
      color:"06B187",
      uniqsnd:!0
    },

    {
      name:"9_desc",
      color:"06B187",
      uniqsnd:!0
    },

    {
      name:"10_electro",
      color:"06B187",
      uniqsnd:!0
    },

    {
      name:"11_wave",
      color:"C12727",
      uniqsnd:!1
    },

    {
      name:"12_ramat",
      color:"C12727",
      uniqsnd:!1
    },

    {
      name:"13_arp",
      color:"C12727",
      uniqsnd:!1
    },

    {
      name:"14_picto",
      color:"C12727",
      uniqsnd:!1
    },

    {
      name:"15_carmel",
      color:"C12727",
      uniqsnd:!1
    },
    
    {
      name:"16_caring",
      color:"C39F29",
      uniqsnd:!0
    },

    {
      name:"17_ooh",
      color:"C39F29",
      uniqsnd:!1
    },

    {
      name:"18_coming",
      color:"C39F29",
      uniqsnd:!0
    },

    {
      name:"19_day",
      color:"C38F29",
      uniqsnd:!1},

    {
      name:"20_fallen",
      color:"C38F29",
      uniqsnd:!1
    },
    ],
  bonusarray: [
    {
      name: "Arrival",
      src: "b1-v1-blank-hb",
      code: "1,3,5,14,17",
      sound: "bonus-arrival",
      aspire: "aspire-arrival",
      loop: 5, // ← Every bonus have its own loops in this version
    },
  ],
};

// versions.v2 = {
//  name: "New Version",
// version: "2",
// date: "2025",
// ...