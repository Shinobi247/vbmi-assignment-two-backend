"use strict";

const assert = require("chai").assert;
const { USER_DATA } = require("../MOCK_DATA");

describe("test BMi calculator", () => {
  it("test BMi calculator with valid input", () => {
    let response = require("../index").handler(USER_DATA);
    assert.equal(response, "There are 4 overweight people");
  });

  it("test BMi calculator with empty array input", () => {
    let response = require("../index").handler([]);
    assert.equal(response.message, "Please input an array of User Information");
  });

  it("test BMi calculator with invalid input with a string in array", () => {
    let response = require("../index").handler([""]);
    assert.equal(response.message, "Invalid Input");
  });

  it("test BMi calculator with invalid input a string", () => {
    let response = require("../index").handler("");
    assert.equal(response.message, "Invalid Input");
  });
});
