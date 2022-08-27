import React from "react";
import styled from "@emotion/styled";
import SimpleAccordionDoc from "./SimpleAccordionDoc";

const Sidebar = styled.aside`
  -webkit-flex-basis: 20%;
  -ms-flex-preferred-size: 20%;
  flex-basis: 20%;
  min-width: 300px;
  height: 100vh;
  overflow: auto;
  position: sticky;
  top: 0;
`;
function SidebarDoc() {
  return (
    <Sidebar>
      <SimpleAccordionDoc />
    </Sidebar>
  );
}

export default SidebarDoc;
