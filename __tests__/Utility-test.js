import "react-native";
import React from "react";
import { isEmptyField, isEmpty } from "../src/util/Utility";

it("is Empty", () => {
  expect(isEmpty({})).toEqual(true);
});

it("is Empty Field", () => {
  expect(isEmptyField()).toEqual(true);
});
