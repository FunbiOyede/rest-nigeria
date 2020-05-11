const request = require("supertest");
const app = require("../App");

describe("GET /nigeria", () => {
  it("should return data about nigeria", async () => {
    const response = await request(app).get("/v1/api/nigeria");
    expect(response.body).toEqual({
      
        status:true,
        data:{

          name: "Nigeria",
          capital: "Abuja",
          largestCity: "Lagos",
          officialLanguage: "English",
          majorLanguages: ["Hausa", "Igbo", "Yoruba"],
          otherlanguages: [
            "Berom",
            "Edo",
            "Efik",
            "Fulfulde",
            "Ebira",
            "Eleme",
            "Gbagyi",
            "Hyam",
            "Ibibio",
            "Idoma",
            "Igala",
            "Ijaw",
            "Ikwerre",
            "Itsekiri",
            "Jju",
            "Jukun",
            "Kanuri",
            "Margi",
            "Nupe",
            "Tiv",
            "Tyap",
            "Urhobo-Isoko",
            "Okrika"
          ],
          demonym: "Nigerian",
          callingCode: "+234",
          region: "Africa",
          subRegion: "Western Africa",
          timeZone: "[UTC+01:00]",
          iso3166Code: "NG",
          latlng: [10, 8],
          currencies: [
            {
              name: "Naira",
              code: "NGN",
              symbol: "₦"
            }
          ],
          government: [
            {
              President: "Muhammadu Buhari",
              VicePresident: "Yemi Osinbajo",
              SenatePresident: "Ahmed Ibrahim Lawan",
              HouseSpeaker: "Femi Gbajabiamila",
              ChiefJustice: "Justice Ibrahim Tanko Muhammad"
            }
          ],
          borders: ["Benin", "Niger", "Cameroon", "Atlantic Ocean"],
          InternetTLD: ".ng",
          flag: "https://en.wikipedia.org/wiki/File:Flag_of_Nigeria.svg"
        }
      
     
    });
  });
});
describe("GET /states", () => {
  it("should send a response code of 200, The data array in theresponse body should contain 37 States and the status property in the response body should be true", async () => {
    const response = await request(app).get("/v1/api/states");
    expect(response.body.status).toEqual(true);
    expect(response.status).toEqual(200);
  });
});

describe("GET /state", () => {
 it("should return data belonging to a particular state", async () => {
    const response = await request(app).get("/v1/api/state").query({name:'lagos'})

    
    expect(response.body.data[0].name).toEqual("Lagos");
    expect(response.status).toEqual(200)
    expect(response.body.status).toEqual(true)
    expect(response.body).toEqual(
      {
        status:true,
        data:[
          {
            id: 24,
            name: "Lagos",
            capital: "Ikeja",
            region: "South West Nigeria",
            coordinates: ["6.583333", "3.75"],
            code: "NG-LA",
            numberOfLga: "20",
            lga: [
              "Agege",
              "Alimosho",
              "Amuwo-Odofin",
              "Ifako-Ijaye",
              "Ikeja",
              "Kosofe",
              "Mushin",
              "Oshodi-Isolo",
              "Shomolu",
              "Apapa",
              "Eti-Osa",
              "Lagos Island",
              "Lagos Mainland",
              "Surulere",
              "Ajeomi Ifelodun",
              "Amuwo Odofin",
              "Ojo",
              "Badagry",
              "Ikorodu",
              "Ibeju Lekki",
              "Epe"
            ],
            government: {
              Governor: "Babajide Sanwo-Olu",
              DeputyGovernor: "Kadiri Hamzat"
            },
            phones: ["07055462708", "08035963919"],
            flag: "https://en.wikipedia.org/wiki/File:Flag_of_Lagos_State.png"
          }
        ]
      
      }
    );
  });
});

describe(" GET /state/:name/lga", () => {
  it("should return a 404 code if the lga was not found", async () => {
    const response = await request(app).get("/v1/api/state/texas/phone");
    expect(response.status).toEqual(404)
    expect(response.body).toEqual({
      status:false,
      message:'Sorry, not found'
    })
});
})



describe("GET /state/:name/lga", () => {
  it("should return local government areas beloging to a particular state", async () => {
    const response = await request(app).get("/v1/api/state/kano/lga")
    expect(response.status).toEqual(200)
    
    expect(response.body.status).toEqual(true)
    expect(response.body).toEqual({
      "status": true,
      data: [ [
        "Ajingi",
        "Albasu",
        "Bagwai",
        "Bebeji",
        "Bichi",
        "Bunkure",
        "Dala",
        "Dambatta",
        "Dawakin Kudu",
        "Dawakin Tofa",
        "Doguwa",
        "Fagge",
        "Gabasawa",
        "Garko",
        "Garun Mallam",
        "Gaya",
        "Gezawa",
        "Gwale",
        "Gwarzo",
        "Kabo",
        "Kano Municipal",
        "Karaye",
        "Kibiya",
        "Kiru",
        "Kumbotso",
        "Kunchi",
        "Kura",
        "Madobi",
        "Makoda",
        "Minjibir",
        "Nasarawa",
        "Rano",
        "Rimin Gado",
        "Rogo",
        "Shanono",
        "Sumaila",
        "Takai",
        "Tarauni",
        "Tofa",
        "Tsanyawa",
        "Tudun Wada",
        "Ungogo",
        "Warawa",
        "Wudil"
      
    ]
  ]
    }
     );
  });
});

describe(" GET /state/:name/phone", () => {
  it("should return emergency phone number of a particular state", async () => {
    const response = await request(app).get("/v1/api/state/jigawa/phone");
    expect(response.status).toEqual(200)
    expect(response.body.status).toEqual(true)
    expect(response.body.data).toEqual([
      ["08075391069", "07089846285", "08123821598"]
    ]);
  });
});
describe(" GET /state/:name/phone", () => {
  it("should return a 404 code if the emergency number was not found", async () => {
    const response = await request(app).get("/v1/api/state/texas/phone");
    expect(response.status).toEqual(404)
    expect(response.body).toEqual({
      status:false,
      message:'Sorry, not found'
    })
});
})


describe("GET /state/capital",() =>{
  it("should fetch state by searching for capital",async () =>{
    const response = await request(app).get("/v1/api/state/capital").query({capital:'ikeja'})
    expect(response.status).toEqual(200)
    expect(response.body.status).toEqual(true)
    expect(response.body.data).toEqual([
      {
          "id": 24,
          "name": "Lagos",
          "capital": "Ikeja",
          "region": "South West Nigeria",
          "coordinates": [
              "6.583333",
              "3.75"
          ],
          "code": "NG-LA",
          "numberOfLga": "20",
          "lga": [
              "Agege",
              "Alimosho",
              "Amuwo-Odofin",
              "Ifako-Ijaye",
              "Ikeja",
              "Kosofe",
              "Mushin",
              "Oshodi-Isolo",
              "Shomolu",
              "Apapa",
              "Eti-Osa",
              "Lagos Island",
              "Lagos Mainland",
              "Surulere",
              "Ajeomi Ifelodun",
              "Amuwo Odofin",
              "Ojo",
              "Badagry",
              "Ikorodu",
              "Ibeju Lekki",
              "Epe"
          ],
          "government": {
              "Governor": "Babajide Sanwo-Olu",
              "DeputyGovernor": "Kadiri Hamzat"
          },
          "phones": [
              "07055462708",
              "08035963919"
          ],
          "flag": "https://en.wikipedia.org/wiki/File:Flag_of_Lagos_State.png"
      }
  ])
  })
})


describe('GET /state/capital',() =>{
  it('should return a 404 code if the name of capital was not found', async() =>{
    const response =  await request(app).get("/v1/api/state/capital").query({capital:'singapore'})
    expect(response.status).toEqual(404)
    expect(response.body).toEqual({
      status:false,
      message:'Sorry, not found'
    })
  })
})


describe('GET /capital',() =>{
  it('should return a 404 code if the iso of the state was not found', async() =>{
    const response =  await request(app).get("/v1/api/state/code/qw")
    expect(response.status).toEqual(404)
    expect(response.body).toEqual({
      status:false,
      message:'Sorry, not found'
    })
  })
})

describe('GET /state',() =>{
  it('should return a 404 code if  the state was not found', async() =>{
    const response = await request(app).get("/v1/api/state").query({name:'texas'})
    expect(response.status).toEqual(404)
    expect(response.body).toEqual({
      status:false,
      message:'Sorry, not found'
    })
  })
})



describe("GET /state/code", () => {
  it("should fetch state by searching for iso code", async () => {
    const response = await request(app).get("/v1/api/state/code/la");
    expect(response.status).toEqual(200)
    expect(response.body.status).toEqual(true)
     expect(response.body.data).toEqual([
      {
          "id": 24,
          "name": "Lagos",
          "capital": "Ikeja",
          "region": "South West Nigeria",
          "coordinates": [
              "6.583333",
              "3.75"
          ],
          "code": "NG-LA",
          "numberOfLga": "20",
          "lga": [
              "Agege",
              "Alimosho",
              "Amuwo-Odofin",
              "Ifako-Ijaye",
              "Ikeja",
              "Kosofe",
              "Mushin",
              "Oshodi-Isolo",
              "Shomolu",
              "Apapa",
              "Eti-Osa",
              "Lagos Island",
              "Lagos Mainland",
              "Surulere",
              "Ajeomi Ifelodun",
              "Amuwo Odofin",
              "Ojo",
              "Badagry",
              "Ikorodu",
              "Ibeju Lekki",
              "Epe"
          ],
          "government": {
              "Governor": "Babajide Sanwo-Olu",
              "DeputyGovernor": "Kadiri Hamzat"
          },
          "phones": [
              "07055462708",
              "08035963919"
          ],
          "flag": "https://en.wikipedia.org/wiki/File:Flag_of_Lagos_State.png"
      }
  ])
  });
});
