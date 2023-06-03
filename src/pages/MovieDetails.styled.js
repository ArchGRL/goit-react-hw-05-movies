import styled from 'styled-components';
import { Link } from "react-router-dom";

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-color: HotPink;
  border-radius: 5px;
  background-color: HotPink;
`;


export const DetailsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid #000;
`;

export const TextDetailsBox = styled.div`
padding-left: 30px;
`;

export const GenresBox = styled.div`
  display: flex;
  gap: 30px;
`;

export const AdditionalBox = styled.div`
border-bottom: 1px solid #000;
`;

export const AdditionalLink = styled(Link)`
text-decoration: none;
color: #000;

:hover,
:focus {
    color: DeepPink;
  }
`;