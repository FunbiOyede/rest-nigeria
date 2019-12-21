[![Build Status](https://travis-ci.org/FunbiOyede/rest-nigeria.svg?branch=master)](https://travis-ci.org/FunbiOyede/rest-nigeria)

### Rest-Nigeria 🇳🇬

The Rest Nigeria is a open-source RESTful API based on Nigeria and her states. It is made for engineers who feel the need to build appilcations based Nigeria's data.

### Usage

All responses will return data in json.

#### Nigeria

To get all data about Nigeria. And the response would have the following properties.

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
  "officialLang": "English",
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
