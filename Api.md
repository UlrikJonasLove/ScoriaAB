## Paket
Paketen jag använde mig av är react-redux och redux-thunk jag installerade paketen med kommandot:

### npm install react react-redux redux-thunk
Redux används för att lägga in olika typer av data i en store.

Redux-thunk är ett middleware. det är till för att skapa tjänster som returnerar en funktion.

## Tjänster
Jag använder mig utav ett "fake RESTful API" Jag skapade en json fil som heter db.json. Först behövde jag installera:

## npm install -g json-server
Sedan skrev jag kommandot:

## json-server public/db.json --port 8000
8000 är vilken port mitt API kommer visas på. Vilket jag valde till 8000. Om man vill se API:et online på webbläsaren så är även detta kommandot som man måste skriva i terminalen.