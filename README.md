# Greenicious

Greenicious is a RESTful API for plant based receipes and products. Since there is new plant based food that did not exist many years ago (such as the impossible burger), the purpose of this API is to store these plant based products as a reminder of trying them later on.

## Planned features / TODO

- Store receipes along with a review.
- A review of the stored product if it has already been tested.

## Endpoints

### Get all food

#### Request

> GET /food/

    curl -i -H 'Accept: application/json' http://localhost:3000/food/

#### Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Content-Length: 1271
    Date: Tue, 03 Aug 2021 02:22:04 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    [
      {
        "_id": "610844767fac134a14c64d1f",
        "title": "Alpro Soya Milk",
        "stores": [
          "ICA",
          "Coop"
        ],
        "ingrediens": "Water, Hulled SOYA beans (8%), Sugar, Calcium (Calcium carbonate), Acidity regulator (Potassiumphosphates), Flavouring, Sea salt, Stabiliser (Gellan gum), Vitamins (B2, B12, D2), Iodine (Potassium Iodide).",
        "measurement": {
          "unit": "L",
          "amount": 1
        }
      },
      {
        "_id": "6108453b33c1b428e84aeef6"
        "title": "Violife Original Flavour Block",
        "stores": [
          "ICA"
        ],
        "ingrediens": "Water, Coconut oil (21%), Starch, Modified Starch*, Sea salt, Flavourings, Olive extract, Colour: B-Carotene, Vitamin B12.",
        "measurement": {
          "unit": "g",
          "amount": 200
        }
      }
    ]

### Search food by name

#### Request

> GET /food/name

    curl -i -H 'Accept: application/json' http://localhost:3000/food/alpro

#### Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Content-Length: 1271
    Date: Tue, 03 Aug 2021 02:22:04 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    [
      {
        "_id": "610844767fac134a14c64d1f",
        "title": "Alpro Soya Milk",
        "stores": [
          "ICA",
          "Coop"
        ],
        "ingrediens": "Water, Hulled SOYA beans (8%), Sugar, Calcium (Calcium carbonate), Acidity regulator (Potassiumphosphates), Flavouring, Sea salt, Stabiliser (Gellan gum), Vitamins (B2, B12, D2), Iodine (Potassium Iodide).",
        "measurement": {
          "unit": "L",
          "amount": 1
        }
      }
    ]

### Get food by id

#### Request

> GET /food/name

    curl -i -H 'Accept: application/json' http://localhost:3000/food/610844767fac134a14c64d1f

#### Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Content-Length: 1271
    Date: Tue, 03 Aug 2021 02:22:04 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    {
      "_id": "610844767fac134a14c64d1f",
      "title": "Alpro Soya Milk",
      "stores": [
        "ICA",
        "Coop"
      ],
      "ingrediens": "Water, Hulled SOYA beans (8%), Sugar, Calcium (Calcium carbonate), Acidity regulator (Potassiumphosphates), Flavouring, Sea salt, Stabiliser (Gellan gum), Vitamins (B2, B12, D2), Iodine (Potassium Iodide).",
      "measurement": {
        "unit": "L",
        "amount": 1
      }
    }

### Add food

#### Request

> POST /food/

    curl --location --request POST 'localhost:5000/food/' \--header 'Content-Type: application/json' \--data-raw '{  "title": "Magnum Vegan Almond Ice Cream",  "stores": [    "Lidl"  ],  "ingrediens": "Water, sugar, cocoa butter¹, cocoa mass¹, glucose syrup, coconut oil, ALMONDS, glucose-fructose syrup, pea protein, flavourings, emulsifiers (sunflower lecithin, E471), exhausted vanilla bean pieces, stabilisers (E412, E410, E407), salt, colour (E160a). May contain: milk and other nuts. ¹Rainforest Alliance Certified™ Chocolate couverture containing vegetable fats in addition to cocoa butter.",  "measurement": {    "unit": "g",    "amount": 216  }}'

#### Successful Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Content-Length: 1271
    Date: Tue, 03 Aug 2021 02:22:04 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    {
      "_id": "610844767fac134a14c64d1f",
      "title": "Alpro Soya Milk",
      "stores": [
        "ICA",
        "Coop"
      ],
      "ingrediens": "Water, Hulled SOYA beans (8%), Sugar, Calcium (Calcium carbonate), Acidity regulator (Potassiumphosphates), Flavouring, Sea salt, Stabiliser (Gellan gum), Vitamins (B2, B12, D2), Iodine (Potassium Iodide).",
      "measurement": {
        "unit": "L",
        "amount": 1
      }
    }

#### Failure Response

    HTTP/1.1 400 Bad Request
    Content-Type: text/html; charset=utf-8
    Content-Length: 125
    Date: Tue, 03 Aug 2021 22:45:17 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    {errorMessage: Provided input is invalid. Please make sure that all the required input are provided and that no additional data is provided.}

### Modify a food product

#### Request

> PUT /food/:id

    curl --location --request POST 'localhost:5000/food/' \--header 'Content-Type: application/json' \--data-raw '{  "title": "Foo",  "stores": [    "Lidl"  ],  "ingrediens": "Water, sugar, cocoa butter¹, cocoa mass¹, glucose syrup, coconut oil, ALMONDS, glucose-fructose syrup, pea protein, flavourings, emulsifiers (sunflower lecithin, E471), exhausted vanilla bean pieces, stabilisers (E412, E410, E407), salt, colour (E160a). May contain: milk and other nuts. ¹Rainforest Alliance Certified™ Chocolate couverture containing vegetable fats in addition to cocoa butter.",  "measurement": {    "unit": "g",    "amount": 216  }}'

#### Successful Response

    PUT /food/610844767fac134a14c64d1f HTTP/1.1 204 No Content
    Content-Type: application/json
    Date: Tue, 03 Aug 2021 22:45:17 GMT
    Connection: keep-alive

#### Failure Response

    HTTP/1.1 400 Bad Request
    Content-Type: text/html; charset=utf-8
    Content-Length: 125
    Date: Tue, 03 Aug 2021 22:45:17 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    {errorMessage: Provided input is invalid. Please make sure that all the required input are provided and that no additional data is provided.}

OR

    HTTP/1.1 404 Not Found
    Content-Type: text/html; charset=utf-8
    Date: Tue, 03 Aug 2021 22:45:17 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

### Delete a food product

#### Request

> DELETE /food/:id

    curl --location --request DELETE 'localhost:5000/food/6106cba114a05f0e88b96971'

#### Successful Response

    PUT /food/6106cba114a05f0e88b96971 HTTP/1.1 204 No Content
    Content-Type: application/json
    Date: Tue, 03 Aug 2021 22:45:17 GMT
    Connection: keep-alive
    Content-Length: 561

#### Failure Response

    HTTP/1.1 400 Bad Request
    Content-Type: text/html; charset=utf-8
    Content-Length: 125
    Date: Tue, 03 Aug 2021 22:45:17 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    {errorMessage: Provided input is invalid. Please make sure that all the required input are provided and that no additional data is provided.}

OR

    HTTP/1.1 404 Not Found
    Content-Type: text/html; charset=utf-8
    Date: Tue, 03 Aug 2021 22:45:17 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
