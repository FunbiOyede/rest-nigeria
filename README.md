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


##### NB 
 - The All states endpoint returns a paginated data, All you need to is add the page number as query parameter.
 - Page limit is 10
 
 ###### Example: For the first page

 _request_

  `https://restnigeria.herokuapp.com/v1/api/states?page=1`

  _response_

  ```
    {
    "status": true,
    "data": {
        "page_info": {
            "currentPage": 1,
            "hasNextPage": true,
            "hasPrevPage": false,
            "nextPage": 2,
            "prevPage": 0
        },
        "states": [
            {
                "id": 1,
                "name": "Abia",
                "capital": "Umuahia",
                "region": "South East nigeria",
                "coordinates": [
                    "5°25′N",
                    "7°30′E"
                ],
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
                "phones": [
                    "0803541540",
                    "08079210003",
                    "08079210004",
                    "08079210005"
                ],
                "flag": "https://en.wikipedia.org/wiki/File:Flag_of_Abia_State.png"
            },
            {
                "id": 2,
                "name": "Adamawa",
                "capital": "Yola",
                "region": "North East Nigeria",
                "coordinates": [
                    "9°20′N",
                    "12°30′E"
                ],
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
                "phones": [
                    "08089671313"
                ],
                "flag": "https://en.wikipedia.org/wiki/File:Flag_of_Adamawa_State.png"
            },
            {
                "id": 3,
                "name": "Akwa Ibom",
                "capital": "Uyo",
                "region": "Southern Nigeria",
                "coordinates": [
                    "05°00′N",
                    "07°50′E"
                ],
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
                "phones": [
                    "08039213071",
                    "08020913810"
                ]
            },
            {
                "Id": 4,
                "name": "Anambra",
                "capital": "Awka",
                "region": "Southern Nigeria",
                "coordinates": [
                    "6°20′N",
                    "7°00′E"
                ],
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
                "phones": [
                    "07039194332",
                    "08024922772",
                    "08075390511",
                    "08182951257"
                ]
            },
            {
                "id": 5,
                "name": "Bauchi",
                "capital": "Bauchi",
                "region": "North East Nigeria",
                "coordinates": [
                    "10°18′57″N",
                    "09°50′39″E"
                ],
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
                "phones": [
                    "08151849417",
                    "08127162434",
                    "08084763669",
                    "08073794920"
                ]
            },
            {
                "id": 6,
                "name": "bayelsa",
                "capital": "yenagoa",
                "region": "South South Nigeria",
                "coordinates": [
                    "4°45′0″N,",
                    "6°5′0″E"
                ],
                "code": "NG-BY",
                "numberOfLga": "8",
                "lga": [
                    "Brass",
                    "Ekeremor",
                    "Kolokuma/Opokuma",
                    "Nembe",
                    "Ogbia",
                    "Sagbama",
                    "Southern Ijaw",
                    "Yenagoa"
                ],
                "government": {
                    "Governor": "Henry Dickson",
                    "DeputyGovernor": "Gboribiogha John Jonah"
                },
                "phones": [
                    "07034578208"
                ],
                "flag": "https://en.wikipedia.org/wiki/File:Flag_of_Bayelsa_State.png"
            },
            {
                "id": 7,
                "name": "Benue",
                "capital": "Makurdi",
                "region": "North central Nigeria",
                "coordinates": [
                    "7°20′N",
                    "8°45′E"
                ],
                "code": "NG-BE",
                "numberOfLga": "23",
                "lga": [
                    "Ado",
                    "Agatu",
                    "Apa",
                    "Buruku",
                    "Gboko",
                    "Guma",
                    "Gwer East",
                    "Gwer West",
                    "Katsina-Ala",
                    "Kwande",
                    "Konshisha",
                    "Logo",
                    "Makurdi",
                    "Obi",
                    "Ogbadibo",
                    "Ohimini",
                    "Oju",
                    "Okpokwu",
                    "Otukpo",
                    "Tarka",
                    "Ukum",
                    "Ushongo",
                    "Vandeikya"
                ],
                "government": {
                    "Governor": "Samuel Ortom",
                    "DeputyGovernor": "Benson Abounu"
                },
                "phones": [
                    "08066006475",
                    "08053039936",
                    "07075390977"
                ]
            },
            {
                "id": 8,
                "name": "Borno",
                "capital": "Maiduguri",
                "region": "North East Nigeria",
                "coordinates": [
                    "11°30′N",
                    "13°00′E"
                ],
                "code": "NG-BO",
                "numberOfLga": "27",
                "lga": [
                    "Abadam",
                    "Askira/Uba",
                    "Bama",
                    "Bayo",
                    "Biu",
                    "Chibok",
                    "Damboa",
                    "Dikwa",
                    "Gubio",
                    "Guzamala",
                    "Gwoza",
                    "Hawul",
                    "Jere",
                    "Kaga",
                    "Kala/Balge",
                    "Konduga",
                    "Kukawa",
                    "Kwaya Kusar",
                    "Mafa",
                    "Magumeri",
                    "Maiduguri",
                    "Marte",
                    "Mobbar",
                    "Monguno",
                    "Ngala",
                    "Nganzai",
                    "Shani"
                ],
                "government": {
                    "Governor": "BabaGana Umara",
                    "DeputyGovernor": "Umar Usman Kadafur"
                },
                "phones": [
                    "08068075581",
                    "08036071667",
                    "08123823322"
                ],
                "flag": "https://en.wikipedia.org/wiki/File:Flag_of_Borno_State.png"
            },
            {
                "id": 9,
                "name": "Cross River",
                "capital": "Calabar",
                "region": "South South Nigeria",
                "coordinates": [
                    "5°45′N",
                    "8°30′E"
                ],
                "code": "NG-CR",
                "numberOfLga": "18",
                "lga": [
                    "Abi",
                    "Akamkpa",
                    "Akpabuyo",
                    "Bekwarra",
                    "Bakassi",
                    "Biase",
                    "Boki",
                    "Calabar Municipal",
                    "Calabar South",
                    "Etung",
                    "Ikom",
                    "Obanliku",
                    "Obubra",
                    "Obudu",
                    "Odukpani",
                    "Ogoja",
                    "Yakuur",
                    "Yala"
                ],
                "government": {
                    "Governor": "Benedict Ayade",
                    "DeputyGovernor": "Ivara Esu"
                },
                "phones": [
                    "08133568456",
                    "07053355415"
                ],
                "flag": "https://en.wikipedia.org/wiki/File:Flag_of_Cross_River_State.png"
            },
            {
                "id": 10,
                "name": "Delta",
                "capital": "Asaba",
                "region": "South South Nigeria",
                "coordinates": [
                    "5°30′N",
                    "6°00′E"
                ],
                "code": "NG-DE",
                "numberOfLga": "25",
                "lga": [
                    "Aniocha North",
                    "Aniocha South",
                    "Bomadi",
                    "Burutu",
                    "Ethiope East",
                    "Ethiope West",
                    "Ika North East",
                    "Ika South",
                    "Isoko North",
                    "Isoko South",
                    "Ndokwa East",
                    "Ndokwa West",
                    "Oshimili North",
                    "Oshimili South",
                    "Patani",
                    "Sapele",
                    "Udu",
                    "Ughelli North",
                    "Ughelli South",
                    "Ukwuani",
                    "Uvwie",
                    "Warri",
                    "Warri North",
                    "Warri South",
                    "Warri South West"
                ],
                "government": {
                    "Governor": "Ifeanyi Okowa",
                    "DeputyGovernor": "Kingsley Otuaro"
                },
                "phones": [
                    "08036684974"
                ],
                "flag": "https://en.wikipedia.org/wiki/File:Flag_of_Delta_State.png"
            }
        ]
    }
}
  ```

 



#### Using the api locally

`git clone https://github.com/FunbiOyede/rest-nigeria.git`

`cd rest-nigeria`

`yarn or npm install`

`yarn or npm start (starts node server)`

`yarn or npm test (tests using jest)`



#### Roadmap



- [x] More endpoints
- [x] More improvements in certain areas such as the documentation
- [ ] Helper libraries in Elxir, Javascript, Typescript and c# etc.

### Contribution

Free for all, Opened for improvements and feedbacks.

*E go be*😊
