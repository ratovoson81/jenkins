import React from "react";
import axios from "axios";
import { URL_API } from "./constants/config";
import App from "./App";
import { getAllPost, getAllUser, getAllComment, getAllTodo } from "./api/index";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "regenerator-runtime/runtime";
const { render } = require("@testing-library/react");

jest.mock("axios");

test("fetches post", async () => {
  const data = {
    data: {
      hits: [
        {
          objectID: "1",
          title: "a",
        },
      ],
    },
  };

  axios.get.mockImplementationOnce(() => Promise.resolve(data));
  await expect(getAllPost("react")).resolves.toBeDefined();
  expect(axios.get).toHaveBeenCalledWith(`${URL_API}/posts`);
});

test("fetches users", async () => {
  const data = {
    data: {
      hits: [
        {
          objectID: "1",
          title: "a",
        },
      ],
    },
  };

  axios.get.mockImplementationOnce(() => Promise.resolve(data));
  await expect(getAllUser("react")).resolves.toBeDefined();
  expect(axios.get).toHaveBeenCalledWith(`${URL_API}/users`);
});

test("fetches comments", async () => {
  const data = {
    data: {
      hits: [
        {
          objectID: "1",
          title: "a",
        },
      ],
    },
  };

  axios.get.mockImplementationOnce(() => Promise.resolve(data));
  await expect(getAllComment("react")).resolves.toBeDefined();
  expect(axios.get).toHaveBeenCalledWith(`${URL_API}/comments`);
});

test("fetches todos", async () => {
  const data = {
    data: {
      hits: [
        {
          objectID: "1",
          title: "a",
        },
      ],
    },
  };

  axios.get.mockImplementationOnce(() => Promise.resolve(data));
  await expect(getAllTodo("react")).resolves.toBeDefined();
  expect(axios.get).toHaveBeenCalledWith(`${URL_API}/todos`);
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("Jenkins success");
  expect(linkElement).toBeInTheDocument();
});
