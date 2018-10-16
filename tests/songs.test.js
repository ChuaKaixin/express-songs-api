const app = require("../app");
const request = require("supertest");

//Fill in the test case below for the Songs API

describe("routes/songs", () => {

  
  it("POST /songs should return a new song object", () => {
    //expected return value
    expected = {name: "Song name", artist: "Song Artist"}
    let expectedOutput = {id: 1, name: "Song name", artist: "Song Artist"}
    //trigger post request
    return request(app).post("/songs").send(expected)
    .then(response => {

      //check response returned
      expect(response.status).toEqual(201);
      //check response body = expected (note that we could test that the ID is set correctly. This below does not verify the ID)
      expect(response.body).toEqual(expectedOutput);

    })
  });
  
  it("GET /songs should return a non empty array", () => {
       //expected return value
      expected = {name: "Song name", artist: "Song Artist"}
      let expectedOutput = {id: 1, name: "Song name", artist: "Song Artist"}
      //trigger post request
      return request(app).get("/songs")
      .then(response => {
        //check response returned
        expect(response.status).toEqual(200);
        //check response body = expected
        expect(response.body).toEqual([expectedOutput]);
      
    })

  });
  
  it("PUT /songs should return the updated song", () => {
     //expected return value
     expected = {name: "New Song name", artist: "New Song Artist"}
     let expectedOutput = {id: 1, name: "New Song name", artist: "New Song Artist"}
     //trigger post request
     return request(app).put("/songs/1").send(expected)
     .then(response => {
       //check response returned
       expect(response.status).toEqual(200);
       //check response body = expected
       expect(response.body).toEqual(expectedOutput);
 
     })

  });

  it("DELETE /songs/:id should return the deleted song", () => {
    //expected return value
    expected = {name: "New Song name", artist: "New Song Artist"}
    let expectedOutput = {id: 1, name: "New Song name", artist: "New Song Artist"}

    //trigger post request
    return request(app).delete("/songs/1").send(expected)
    .then(response => {

      //check response returned
      expect(response.status).toEqual(200);
      //check response body = expected
      expect(response.body).toEqual(expectedOutput);

    })

  });
  
  it("GET /songs should return an empty array", () => {
     //trigger post request
     return request(app).get("/songs")
     .then(response => {
       //check response returned
       expect(response.status).toEqual(200);
       //check response body = expected
       expect(response.body.length).toEqual(0);
   })
    
  });

});

