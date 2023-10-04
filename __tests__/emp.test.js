const request = require("supertest");
const response = require("express");
//test//
let serveur;
const TestValidEmp = {
  _id: "19244",
  lastName: "mekhalfia",
  firstName: "tayeb",
  dateCreated: "2023-5-4",
  departement: "IT",
};
const { application } = require("express");
const EmpModel = require("../model/employeeModel");

describe("employee", () => {
  beforeEach(() => {
    serveur = require("../server");
  });
  afterEach(() => {
    serveur.close();
    EmpModel.collection.deleteMany();
  });
  describe("teste err employe", () => {
    it("should return status 500 if validation kicks", async () => {
      const response = await request(serveur)
        .post("/addemployer/")
        .send({})
        .set({ Accept: "Application/json" });
      expect(response.status).toBe(500);
    }, 10000);

    it("should return status 201 if validation succes", async () => {
      const response = await request(serveur)
        .post("/addemployer/")
        .send(TestValidEmp)
        .set({ Accept: "Application/json" });
      expect(response.status).toBe(201);
    }, 10000);
  });
});
