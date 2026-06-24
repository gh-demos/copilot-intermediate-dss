import React from "react";
import { render, screen } from "@testing-library/react";
import { SectionContainer } from "../src/components/ui/layout/SectionContainer";

describe("SectionContainer", () => {
  it("renders children", () => {
    render(
      <SectionContainer>
        <span>Child content</span>
      </SectionContainer>
    );

    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("applies optional classes", () => {
    const { container } = render(
      <SectionContainer className="custom-class" bgColor="bg-slate-100">
        <span>Styled content</span>
      </SectionContainer>
    );

    expect(container.querySelector("section")).toHaveClass(
      "py-16",
      "px-4",
      "custom-class",
      "bg-slate-100"
    );
  });
});
