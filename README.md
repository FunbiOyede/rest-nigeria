[![Build Status](https://travis-ci.org/FunbiOyede/rest-nigeria.svg?branch=master)](https://travis-ci.org/FunbiOyede/rest-nigeria)

### Rest-Nigeria 

The Rest Nigeria is a open-source RESTful API based on Nigeria and her states. It is made for engineers who feel the need to build appilcations based on Nigeria's data.

### How does it work?

 1. Send a GET request to rest nigeria with your preferred parameter

 2. Get back a JSON response.

#### Show me
 To get all data about Nigeria, we send a request:

_Request_

`https://restnigeria.herokuapp.com/v1/api/nigeria`

_Response_

```json
{
    "status": true,
    "data": {
        "name": "Nigeria",
        "capital": "Abuja",
        "largestCity": "Lagos",
        "officialLanguage": "English",
        "majorLanguages": [
            "Hausa",
            "Igbo",
            "Yoruba"
        ],
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
        "latlng": [
            10,
            8
        ],
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
        "borders": [
            "Benin",
            "Niger",
            "Cameroon",
            "Atlantic Ocean"
        ],
        "InternetTLD": ".ng",
        "flag": "https://en.wikipedia.org/wiki/File:Flag_of_Nigeria.svg"
    }
}
```

 ### Fields And Descriptions

  #### COUNTRY

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


  #### STATES

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

 

 #### AVAILABLE ENDPOINTS


| Description       | Endpoints                                            |
| ----------- | ------------------------------------------------------ |
| All States      | `https://restnigeria.herokuapp.com/v1/api/states`                                        |
| Search by state name  | `https://restnigeria.herokuapp.com/v1/api/state?name={name of state}`                                  |
| Search by capital     | `https://restnigeria.herokuapp.com/v1/api/state/capital?capital={capital of state}`                             |
| Get state by isocode      | `https://restnigeria.herokuapp.com/v1/api/state/code/{code}`                  |
| Get list of local government in a state | `https://restnigeria.herokuapp.com/v1/api/state/{state name}/lga` |
| Get emergency phone numbers in state       | `https://restnigeria.herokuapp.com/v1/api/state/{state name}/phone`                 |



#### Using the api locally

`git clone https://github.com/FunbiOyede/rest-nigeria.git`

`cd rest-nigeria`

`yarn or npm install`

`yarn or npm start (starts node server)`

`yarn or npm test (tests using jest)`



#### Roadmap



- [x] More endpoints
- [x] More improvements in certain areas such as the documentation
- [x] Helper libraries in Elxir, Javascript, Typescript and c# etc.

### Contribution

Free for all, Opened for improvements and feedbacks.

*E go be*😊
