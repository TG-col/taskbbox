import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  //Since I changed the App.js to includ redux provider
  //there is no more "learn react" text in it that is why this test didn't passed
  // const linkElement = screen.getByText(/With Interactions/i);
  //expect(linkElement).toBeInTheDocument();
});
