import styled from "styled-components";
import { Navbar } from "reactstrap";

export const StyledNavbar = styled(Navbar)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  font-weight: 600;
  font-size: 1.5rem;
  color: #000;
  padding: 0;
  margin: 0;
  font-weight: 600;
  color: #000;
`;
