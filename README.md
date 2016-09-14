# Leaderboard API Lab

This is a Pair Programming Activity: DevA & DevB.

Part 1

Each developer will build a seperate App.

Leaderboard API

DevA will build a Node/Express App to act as an API.

It should have CRUD functionality for leaderboard entries, for instance if we call our resource Entries, we might have the following endpoints:

GET /entries
GET /entries/1
POST /entries
PUT /entries/1
DELETE /entries/1
Each Leaderboard Entry should have Name:string & Score:number.

No database is needed. Data can be stored in a global array.

Use res.json(...) to return data to the client. This ensures the correct header information for the response is set.

Leaderboard Client

DevB will build a frontend that consumes the API using Ajax. It should just be HTML, CSS(reuse some exisiting styles) and JS (jquery is optional).

It will allow all CRUD actions: display a list of all entries, allow the addition, deletion & updating of exisiting ones.

The Ajax request will be to http://localhost:3000/

Testing

To test. Push both to gitHub and clone each others. Then run the node app and launch the client html page in the browser. It should be able to access the server running on localhost:3000.

Part 2

As a bonus. Swap Roles.

DevB should now extend the API to add an Initials field to each leaderboard record.

DevA should update the client to display this and allow the user to enter it when adding the highscore.
