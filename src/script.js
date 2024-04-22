import React from "react";
import ReactDOM from "react-dom/client";
import AccordianPanel from "./AccordianPanel";

const accordionData = [
  {
    index: 1,
    title: "What is an accordion panel?",
    content:
      "An accordion panel is a UI component that allows users to expand and collapse sections of content. It's like a foldable menu where only one section can be open at a time.",
  },
  {
    index: 2,
    title: "How does it work?",
    content:
      "When a user clicks on the header of an accordion panel, the content below it expands or collapses. This allows users to focus on specific information without being overwhelmed by a large amount of text.",
  },
  {
    index: 3,
    title: "What are some benefits of using accordion panels?",
    content:
      "Accordion panels can improve the organization and readability of your content. They are also a great way to save space on a webpage, especially when dealing with a lot of information.",
  },
  {
    index: 4,
    title: "Are there any drawbacks to using accordion panels?",
    content:
      "One potential drawback of using accordion panels is that important information may be hidden if users don't know to expand the relevant section. It's important to ensure clear and concise headers so users understand what information is contained within each panel.",
  },
];

const AppLayout = () => {
    return (
        <>
            <AccordianPanel data={accordionData}/>
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
