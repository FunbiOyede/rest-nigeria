[![Build Status](https://travis-ci.org/FunbiOyede/rest-nigeria.svg?branch=master)](https://travis-ci.org/FunbiOyede/rest-nigeria)

### Rest-Nigeria 🇳🇬

The Rest Nigeria is a open-source RESTful API based on Nigeria and her states. It is made for engineers who feel the need to build appilcations based on Nigeria's data.

### Usage

All responses will return data in json format.

#### Nigeria

To get all data about Nigeria.call this endpoint https://restnigeria.herokuapp.com/v1/api/nigeria. The response has the following properties.

| Field            | Description                                                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| name             | Well Nigeria                                                                                                                   |
| capital          | The capital of Nigeria                                                                                                         |
| largestCity      | The Largest city in Nigeria, By population                                                                                     |
| officialLanguage | The official language spoken in Nigeria                                                                                        |
| majorLanguages   | The major languages spoken in Nigeria                                                                                          |
| otherLangauges   | The other langauges spoken in other parts of Nigeria                                                                           |
| demonym          | Identification of residents in Nigeria                                                                                         |
| callingCode      | The calling code used in Nigeria                                                                                               |
| region           | The location of Nigeria on planet earth                                                                                        |
| subRegion        | The location of Nigeria in a region                                                                                            |
| timeZone         | The time zone of Nigeria                                                                                                       |
| IsoCode          | The iso code representing Nigeria                                                                                              |
| coordinates      | A set of numbers that represents Nigeria's location                                                                            |
| currencies       | The currencies used in nigeria. The currency is also sub-divided into name,code and symbol of the currency                     |
| government       | The first class citizens of Nigeria, which includes the President, Vice President, Senate President, Speaker and Chief Justice |
| borders          | Locations surrounding Nigeria                                                                                                  |
| InternetTLD      | The domain name system used in nigeria                                                                                         |
| flag             | 🇳🇬                                                                                                                             |

_Sample Request_

`https://restnigeria.herokuapp.com/v1/api/nigeria`

_Response_

```json
{
  "name": "Nigeria",
  "capital": "Abuja",
  "largestCity": "Lagos",
  "officialLanguage": "English",
  "majorLanguages": ["Hausa", "Igbo", "Yoruba"],
  "otherlanguages": [
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
  "demonym": "Nigerian",
  "callingCode": "+234",
  "region": "Africa",
  "subRegion": "Western Africa",
  "timeZone": "[UTC+01:00]",
  "iso3166Code": "NG",
  "latlng": [10, 8],
  "currencies": [
    {
      "name": "Naira",
      "code": "NGN",
      "symbol": "₦"
    }
  ],
  "government": [
    {
      "President": "Muhammadu Buhari",
      "VicePresident": "Yemi Osinbajo",
      "SenatePresident": "Ahmed Ibrahim Lawan",
      "HouseSpeaker": "Femi Gbajabiamila",
      "ChiefJustice": "Justice Ibrahim Tanko Muhammad"
    }
  ],
  "borders": ["Benin", "Niger", "Cameroon", "Atlantic Ocean"],
  "InternetTLD": ".ng",
  "flag": "https://en.wikipedia.org/wiki/File:Flag_of_Nigeria.svg"
}
```

#### States

To get a list of all states in Nigeria and their information, call this endpoint https://restnigeria.herokuapp.com/v1/api/states, and the response has the following properties for each states in Nigeria

| Field       | Description                                            |
| ----------- | ------------------------------------------------------ |
| id          | id of the state                                        |
| name        | The name of the state                                  |
| capital     | The capital of the state                               |
| region      | The location of the state in Nigeria                   |
| coordinates | A set of numbers that represents the states's location |
| code        | The iso code representing the state                    |
| numberOfLga | The number od local government areas in the state      |
| lga         | The list of all local government areas in the state    |
| government  | The first class citizens of the state                  |
| phone       | Emergency phone numbers of the state                   |
| flag        | State's flag                                           |

_Sample Request_

`https://restnigeria.herokuapp.com/v1/api/states`

_Response_

_This is not a complete response for all the states. Its just an example_

```json
[
  {
    "id": 1,
    "name": "Abia",
    "capital": "Umuahia",
    "region": "South East nigeria",
    "coordinates": ["5°25′N", "7°30′E"],
    "code": "NG-AB",
    "numberOfLga": "17",
    "lga": [
      "Aba North",
      "Aba South",
      "Arochukwu",
      "Bende",
      "Ikwuano",
      "Isiala Ngwa North",
      "Isiala Ngwa South",
      "Isuikwuato",
      "Obi Ngwa",
      "Ohafia",
      "Osisioma Ngwa",
      "Ugwunagbo",
      "Ukwa East",
      "Ukwa West",
      "Umuahia North",
      "Umuahia South",
      "Umu Nneochi"
    ],
    "government": {
      "Governor": "Okezie Ikpeazu",
      "DeputyGovernor": "Ude Oko Chukwu "
    },
    "phones": ["0803541540", "08079210003", "08079210004", "08079210005"],
    "flag": "https://en.wikipedia.org/wiki/File:Flag_of_Abia_State.png"
  },
  {
    "id": 2,
    "name": "Adamawa",
    "capital": "Yola",
    "region": "North East Nigeria",
    "coordinates": ["9°20′N", "12°30′E"],
    "code": "NG-AD",
    "numberOfLga": "21",
    "lga": [
      "Demsa",
      "Fufore",
      "Ganye",
      "Girei",
      "Gombi",
      "Guyuk",
      "Hong",
      "Jada",
      "Lamurde",
      "Madagali",
      "Maiha",
      "Mayo-Belwa",
      "Michika",
      "Mubi North",
      "Mubi South",
      "Numan",
      "Shelleng",
      "Song",
      "Toungo",
      "Yola",
      "Jimeta"
    ],
    "government": {
      "Governor": "Umaru Fintiri"
    },
    "phones": ["08089671313"],
    "flag": "https://en.wikipedia.org/wiki/File:Flag_of_Adamawa_State.png"
  },
  {
    "id": 3,
    "name": "Akwa Ibom",
    "capital": "Uyo",
    "region": "Southern Nigeria",
    "coordinates": ["05°00′N", "07°50′E"],
    "code": "NG-AK",
    "numberOfLga": "31",
    "lga": [
      "Abak",
      "Eastern Obolo",
      "Esit-Eket",
      "Eket",
      "Essien Udim",
      "Etim-Ekpo",
      "Etinan",
      "Ibeno",
      "Ibesikpo-Asutan",
      "Ibiono-Ibom",
      "Ika",
      "Ikono",
      "Ikot Abasi",
      "Ikot Ekpene",
      "Ini",
      "Itu",
      "Mkpat-Enin",
      "Mbo",
      "Nsit-Atai",
      "Nsit-Ibom",
      "Nsit-Ubium",
      "Obot-Akara",
      "Okobo",
      "Onna",
      "Oron",
      "Oruk Anam",
      "Ukanafun",
      "Udung-Uko",
      "Uruan",
      "Urue-Offong/Oruko",
      "Uyo"
    ],
    "government": {
      "Governor": "Udom Gabriel Emmanuel",
      "DeputyGovernor": "Moses Ekpo"
    },
    "phones": ["08039213071", "08020913810"]
  },
  {
    "Id": 4,
    "name": "Anambra",
    "capital": "Awka",
    "region": "Southern Nigeria",
    "coordinates": ["6°20′N", "7°00′E"],
    "code": "NG-AN",
    "numberOfLga": "21",
    "lga": [
      "Aguata",
      "Awka South",
      "Awka North",
      "Anambra East",
      "Anambra West",
      "Anaocha",
      "Ayamelum",
      "Dunukofia",
      "Ekwusigo",
      "Idemili North",
      "Idemili South",
      "Ihiala",
      "Njikoka",
      "Nnewi North",
      "Nnewi South",
      "Ogbaru",
      "Onitsha North",
      "Onitsha South",
      "Orumba North",
      "Orumba South",
      "Oyi"
    ],
    "government": {
      "Governor": "Willie Obiano",
      "DeputyGovernor": "Nkem Okeke"
    },
    "phones": ["07039194332", "08024922772", "08075390511", "08182951257"]
  },
  {
    "id": 5,
    "name": "Bauchi",
    "capital": "Bauchi",
    "region": "North East Nigeria",
    "coordinates": ["10°18′57″N", "09°50′39″E"],
    "code": "NG-BA",
    "numberOfLga": "20",
    "lga": [
      "Bauchi",
      "Tafawa Balewa",
      "Dass",
      "Toro",
      "Bogoro",
      "Ningi",
      "Warji",
      "Ganjuwa",
      "Kirfi",
      "Alkaleri",
      "Darazo",
      "Misau",
      "Giade",
      "Shira",
      "Jama’are",
      "Katangum",
      "Itas/Gadau",
      "Zaki",
      "Gamawa",
      "Damban"
    ],
    "government": {
      "Governor": "Bala Mohammed",
      "DeputyGovernor": "Baba Tela"
    },
    "phones": ["08151849417", "08127162434", "08084763669", "08073794920"]
  }
]
```

#### State

To get data of a particular state in Nigeria call this endpoint https://restnigeria.herokuapp.com/v1/api/state/:name where `:name` represents the name of a state and response has the following properties.

| Field       | Description                                                                       |
| ----------- | --------------------------------------------------------------------------------- |
| id          | id of the state                                                                   |
| name        | The name of the state                                                             |
| capital     | The capital of the state                                                          |
| region      | The location of the state in Nigeria                                              |
| coordinates | A set of numbers that represents the states's location                            |
| code        | The iso code representing the state                                               |
| numberOfLga | The number of local government areas in the state                                 |
| lga         | The list of all local government areas in the state                               |
| government  | The first class citizens of the state, which includes the Governor and the Deputy |
| phone       | Emergency phone numbers of the state                                              |
| flag        | State's flag                                                                      |

_Sample Request_

`https://restnigeria.herokuapp.com/v1/api/state/kano`

_Response_

```json
[
  {
    "id": 19,
    "name": "Kano",
    "capital": "Kano",
    "region": "Northern Nigeria",
    "coordinates": ["11°30′N", "8°30′E"],
    "code": "NG-KN",
    "numberOfLga": "44",
    "lga": [
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
    ],
    "government": {
      "Governor": "Abdullahi Umar Ganduje",
      "DeputyGovernor": "Nasiru Yusuf Gawuna"
    },
    "phones": ["08032419754", "08123821575", "08064977004", "08064977005"],
    "flag": "https://en.wikipedia.org/wiki/File:Kano_flag.svg"
  }
]
```

#### LGA

To get a list of all local government in a particular state call this endpoint https://restnigeria.herokuapp.com/v1/api/state/:name/lga where `:name` represents the name of a state.

_Sample Request_

`https://restnigeria.herokuapp.com/v1/api/state/bauchi/lga`

_Response_

```json
[
  [
    "Bauchi",
    "Tafawa Balewa",
    "Dass",
    "Toro",
    "Bogoro",
    "Ningi",
    "Warji",
    "Ganjuwa",
    "Kirfi",
    "Alkaleri",
    "Darazo",
    "Misau",
    "Giade",
    "Shira",
    "Jama’are",
    "Katangum",
    "Itas/Gadau",
    "Zaki",
    "Gamawa",
    "Damban"
  ]
]
```

#### Emergency Phone Numbers 📱

To get a list of emergnecy phone numbers in a particular state call this endpoint https://restnigeria.herokuapp.com/v1/api/state/:name/phone where `:name` represents the name of a state. See https://github.com/mykeels/police-ng-emergency for more info

_Sample Request_

`https://restnigeria.herokuapp.com/v1/api/state/osun/phone`

_Response_

```json
[["08075872433", "08039537995", "08123823981"]]
```

#### Iso Code

To get the iso code of a particular state call this endpoint https://restnigeria.herokuapp.com/v1/api/state/:name/code where `:name` represents the name of a state.

_Sample Request_

`https://restnigeria.herokuapp.com/v1/api/state/imo/code`

_Response_

```json
["NG-IM"]
```

### List of all endpoints

This is a summmary of all the endpoints you can call. All are GET requests

| Endpoint              | Description                                               |
| --------------------- | --------------------------------------------------------- |
| `/v1/api/states`      | returns a list of all states in nigeria                   |
| `/v1/api/state/:name` | returns data of a particular stat                         |
| `/state/:name/lga`    | returns all local government areas in a particular state  |
| `/state/:name/phone`  | returns all emergency phone numbers in a particular state |
| `/state/:name/code`   | return an iso code for a particular state                 |

### Using the api locally

```
git clone https://github.com/FunbiOyede/rest-nigeria.git

cd rest-nigeria

yarn or npm install

yarn or npm start (starts node server)

yarn or npm test (tests using jest)


```

### Here's a rough roadmap of things to come

- [ ] More endpoints
- [ ] More improvements in certain areas such as the documentation
- [ ] Helper libraries in Elxir, Javascript or Typescript and .Net etc.

### Contribution

Free for all, Opened for improvements and feedbacks.

*E go be*😊
