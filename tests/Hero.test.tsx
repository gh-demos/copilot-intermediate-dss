import React from "react";
import { render, screen } from "@testing-library/react";
import { Hero } from "../src/components/ui/layout/Hero";

describe("Hero", () => {
  it("renders title and description", () => {
    render(<Hero title="My Title" description="My Description" />);

    expect(screen.getByRole("heading", { name: "My Title" })).toBeInTheDocument();
    expect(screen.getByText("My Description")).toBeInTheDocument();
  });
});
