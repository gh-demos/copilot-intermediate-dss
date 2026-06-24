import React from "react";
import { render, screen } from "@testing-library/react";
import { SectionTitle } from "../src/components/ui/layout/SectionTitle";

describe("SectionTitle", () => {
  it("renders title", () => {
    render(<SectionTitle title="Recent Uploads" />);

    expect(
      screen.getByRole("heading", { name: "Recent Uploads" })
    ).toBeInTheDocument();
  });

  it("renders view all link when provided", () => {
    render(<SectionTitle title="Gallery" viewAllLink="/gallery" />);

    expect(screen.getByRole("link", { name: "View All →" })).toHaveAttribute(
      "href",
      "/gallery"
    );
  });
});
