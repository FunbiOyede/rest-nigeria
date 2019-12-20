const request = require("supertest");
const app = require("../App");

describe("GET /nigeria", () => {
  it("should return data about nigeria", async () => {
    const response = await request(app).get("/v1/api/nigeria");
    expect(response.body).toEqual({
      name: "Nigeria",
      capital: "Abuja",
      largestCity: "Lagos",
      officialLang: "English",
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
      currencies: [{ name: "Naira", code: "NGN", symbol: "₦" }],
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
    });
  });
});
describe("GET /states", () => {
  it("should send a response code of 200 and the response body should contain 25 elementS", async () => {
    const response = await request(app).get("/v1/api/states");
    expect(response.body).toHaveLength(25);
    expect(response.status).toEqual(200);
  });
});

describe("GET /state/:name", () => {
  it("should return data belonging to a particular state", async () => {
    const response = await request(app).get("/v1/api/state/lagos");

    expect(response.body[0].name).toEqual("Lagos");
    expect(response.body).toEqual([
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
    ]);
  });
});

describe("GET /state/:name/lga", () => {
  it("should return local government areas beloging to a particular state", async () => {
    const response = await request(app).get("/v1/api/state/kano/lga");
    expect(response.body).toEqual([
      [
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
    ]);
  });
});

describe(" GET /state/:name/phone", () => {
  it("should return emergency phone number of a particular state", async () => {
    const response = await request(app).get("/v1/api/state/jigawa/phone");
    expect(response.body).toEqual([
      ["08075391069", "07089846285", "08123821598"]
    ]);
  });
});

describe("GET /state/:name/code", () => {
  it("should return the iso code of a particular state", async () => {
    const response = await request(app).get("/v1/api/state/enugu/code");
    expect(response.body).toHaveLength(1);
    expect(response.body).toEqual(["NG-EN"]);
  });
});
