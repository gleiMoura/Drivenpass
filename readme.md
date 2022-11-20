<p align="center">
  <img  src="https://i.ibb.co/tBC6CgV/2525754.png"
    width="200px" height="200px" >
</p>
<h1 align="center">
  DrivenPass
</h1>
<div align="center">

  <h3>Built With:</h3>

  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

# Description

Drivenpass simulates a password manager. You can create an account and save your website passwords, card data etc.

</br>

## Features

-   Create an account
-   Save credentials
-   Save private notes
-   Save card data
-   Save data from a WiFi network

</br>

## API Reference

#### SignUp

```http
POST /signUp
```

#### Request:

| Body              | Type     | Description                    |
| :---------------- | :------- | :----------------------------- |
| `email`           | `string` | **Required**. valid email      |
| `password`        | `string` | **Required**. password         |


#

#### SignIn

```http
POST /signin
```

#### Request:

| Body       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `email`    | `string` | **Required**. valid email |
| `password` | `string` | **Required**. password    |

</br>

#### Response:

```json
{
    "email": "nome@email.com",
	"token": "jsonwebtoken"
}
```

<br/>

# Authorization headers

| Headers         | Type     | Description               |
| :-------------- | :------- | :------------------------ |
| `Authorization` | `string` | **Required**. valid token |

`Authorization format: Bearer jsonwebtoken`

**All following routes request authorization header**

<br/>

# Credentials

#### Create a new credential

```http
POST /credential
```

#### Request:

| Body       | Type     | Description                             |
| :--------- | :------- | :-------------------------------------- |
| `url`      | `string` | **Required**. valid url                 |
| `username` | `string` | **Required**. user name                 |
| `title`    | `string` | **Required**. identifier for credential |
| `password` | `string` | **Required**. password   

</br>



#### Response:

```json
{
    "url": "https://alienated-pregnancy.name",
	"userName": "MissWilbertWilliamson83",
    "title": "bumpy-hexagon.net",
    "userId" : "id"
}
```

#

#### Get all credentials associated with the user

```http
GET /credential
```

#### Response:

```json
[
	{
		"id": 4,
		"url": "https://alienated-pregnancy.name",
        "userId": "2",
		"username": "MissWilbertWilliamson83",
        "password": "233445656655",
        "title": "bumpy-hexagon.net",
	},
	{
		"id": 5,
		"url": "https://alienated-judicial.name",
        "userId": "2",
		"username": "MissWilbertWilliamson83",
        "password": "3020305405050",
        "title": "bumpy-hexagon.net",
	}
]
```
#

#### Get a credential by identifier

```http
GET /credential/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

#### Response:

```json
{
	"id": 4,
	"url": "https://alienated-pregnancy.name",
    "userId": "1",
	"username": "MissWilbertWilliamson83",
	"password": "8B0fdl1YHxyBWda",
	"title": "bumpy-hexagon.net"

}
```
#

#### Delete a credential by identifier

```http
DELETE /credential/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

# Notes

#### Create a new note

```http
POST /note
```

#### Request:

| Body      | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`   | `string` | **Required**. Identifier for note |
| `content` | `string` | **Required**. Note content        |

`Title max length: 50`

`Content max length: 1000`

</br>

#### Response:

```json
"note was created!"
```

#

#### Get all notes associated with the user

```http
GET /note
```

#### Response:

```json
[
	{
		"id": 3,
		"title": "labore et ea",
		"content": "Dignissimos architecto eos. Rerum quos consequatur vel doloremque consequatur. Velit voluptates qui voluptatum eum officiis illo dolorum consequatur. Cupiditate aut illo nobis. Explicabo officiis fuga.",
		"userId": 1
	},
	{
		"id": 4,
		"title": "inventore dolorem id",
		"content": "Rerum aut aut accusantium qui quis non. Dolores culpa voluptate iure exercitationem hic. Voluptatem et amet ipsum et ut qui id aliquid.",
		"userId": 1
	}
]
```

#

#### Get a note by identifier

```http
GET /note/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

#### Response:

```json
{
	"id": 4,
	"title": "inventore dolorem id",
	"content": "Rerum aut aut accusantium qui quis non. Dolores culpa voluptate iure exercitationem hic. Voluptatem et amet ipsum et ut qui id aliquid.",
	"userId": 1
}
```

#

#### Delete a note by identifier

```http
DELETE /note/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

# Cards

# Create a new card

```http
POST /card
```

#### Request:

| Body         | Type      | Description                        |
| :----------- | :-------- | :--------------------------------- |
| `title`      | `string`  | **Required**. identifier for card  |
| `cardNumber`     | `string`  | **Required**. card number          |
| `holderName` | `string`  | **Required**. card holder name     |
| `password`       | `string`  | **Required**. card password        |
| `secureCode`        | `string`  | **Required**. card cvv             |
| `expireDate` | `string`  | **Required**. card expiration date |
| `isVirtual`  | `boolean` | **Required**. card number          |
| `type`       | `string`  | **Required**. card type            |

`Date format: MM/YY`

`Valid types: ["credit", "debit", "credit_debit"]`

</br>

#### Response:

```json
{
  "title": "novo cartao",
  "cardNumber": "2223334444555566666",
  "holderName": "FULANO B CALDAS",
  "expireDate": "07/09",
  "isVirtual": true,
  "type": "credit",
  "userId": 3
}
```

#

#### Get all cards associated with the user

```http
GET /card
```

#### Response:

```json
[
	{
		"id": 2,
		"title": "unde in sit",
		"cardNumber": "6377-5066-7282-1608",
		"holderName": "Rudy McKenzie",
		"expireCode": "098",
		"expireDate": "11/24",
		"isVirtual": true,
		"type": "credit",
		"userId": 1
	},
	{
	    "id": 3,
		"title": "unde in sit",
		"cardNumber": "6397-5076-7682-1408",
		"holderName": "Rudy McKenzie",
		"expireCode": "043",
		"expireDate": "14/26",
		"isVirtual": true,
		"type": "debit",
		"userId": 1
	}
]
```

#

#### Get a card by identifier

```http
GET /card/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

#### Response:

```json
{
	"id": 3,
	"title": "unde in sit",
	"cardNumber": "6397-5076-7682-1408",
	"holderName": "Rudy McKenzie",
	"expireCode": "043",
	"expireDate": "14/26",
	"isVirtual": true,
	"type": "debit",
	"userId": 1
}
```

#

#### Delete a card by identifier

```http
DELETE /card/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

# Wifi

# Create data from a new wifi network

```http
POST /note
```

#### Request:

| Params     | Type     | Description                          |
| :--------- | :------- | :----------------------------------- |
| `title`    | `string` | **Required**. identifier for network |
| `name`     | `string` | **Required**. network name           |
| `password` | `string` | **Required**. network password       |

</br>

#### Response:

```json
{
	"title": "quo maxime voluptas",
	"networdName": "wifi16",
	"userId": 3
}
```

#

#### Get all networks associated with the user

```http
GET /wifi
```

#### Response:

```json
[
	{
		"id": 2,
		"title": "autem odit consequatur",
		"networkName": "wifi.Carvalho16",
		"password": "1fc741d03a09834e3c9f7e598b1c02734017b4f5dedb1415390abe877daaf05c36ce73ce0cb4f5da2653c51b4b4f36f3db10360d66cf6175b163199e7df31b84bff9a7630a85d869bedad2b3bdfba1a01019fc8c5e9f19b6234b4638f374d257f1e22a354397d8bbe65100",
		"userId": 1
	},
	{
		"id": 3,
		"title": "et adipisci eum",
		"networdName": "wifi.Moreira",
		"password": "1fc741d03a09834e3c9f7e598b1c02734017b4f5dedb1415390abe877daaf05c36ce73ce0cb4f5da2653c51b4b4f36f3db10360d66cf6175b163199e7df31b84bff9a7630a85d869bedad2b3bdfba1a01019fc8c5e9f19b6234b4638f374d257f1e22a354397d8bbe65100",
		"userId": 1
	}
]
```

#

#### Get a network by identifier

```http
GET /wifi/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

#### Response:

```json
{
	"id": 2,
	"title": "autem odit consequatur",
	"networdName": "wifi.Carvalho16",
	"password": "23gv1TeAPQsBmS1",
	"userId": 1
}
```

#

#### Delete a network by identifier

```http
DELETE /wifi/${id}
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

#

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = number #recommended:5000`

`SECRET = any string`

</br>

## Run Locally

Clone the project

```bash
  git clone https://github.com/gleiMoura/projeto19-drivenpass
```

Go to the project directory

```bash
  cd projeto19-drivenpass/
```

Install dependencies

```bash
  npm install
```

Create database

```bash
  npx prisma migrate reset
```

Start the server

```bash
  npm run start
```

</br>

## Lessons Learned

In this project I learned a lot about how to structure an API with TypeScript

</br>

## Acknowledgements

-   [Awesome Badges](https://github.com/Envoy-VC/awesome-badges)

</br>

## Authors

-   [@gleiMoura](https://www.github.com/gleiMoura) 🪐

<br/>
<br/>
<br/>

#

<a  href="mailto:contato.lucasalv@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg"></a>
