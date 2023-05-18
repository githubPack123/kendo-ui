import styled from 'styled-components';

const Row = styled.div`
   display:flex;
   flex-wrap: wrap; 
   @media (max-width: 600px) {
     flex-direction: column;
   }
`;

const EntityTypeContainer = styled.div`
  flex: 0.20;
  margin:10px;
  border: 1px solid black;
  height: 400px;
  display:flex;
  flex-direction:column;
`;

const NTNContainer = styled.div`
  flex: 0.15;
  margin:10px;
  border: 1px solid black;
  height: 400px;
  min-width: 200px;
  @media (max-width: 600px) {
    min-width: 100%;
  }
`;

const STRNContainer = styled.div`
  border: 1px solid black;
  flex: 0.65;
  margin:10px;
  height: 400px;
  min-width: 200px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    min-width: 100%;
  }
`;

const CardButton = styled.button`
  background-color: #f1f1f1;
  min-width:150px;
  min-height: 80px;
  color: #333;
  margin: 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid grey;
  transition: background-color 0.3s ease;
  flex: 2.55;

  &:hover {
    background-color: #ddd;
  }
`;

const CardButtonContainer = styled.div`
   display:flex;
   flex-direction:column;
`;

const EntityTypeContainerHeading = styled.div`
  flex:0.15;
`;
const EntityTypeContainerButtons = styled.div`
  flex: 0.85;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  @media (max-width: 600px) {
    flex-direction:row;
  }
`;

const CustomButtons = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    flex-direction:row;
  }
`;

const CustomCardButton = styled.div`
      flex:2.55;
`;

const STRNForm = styled.div`
  border: 1px solid green;
  flex:1;
  `;
const CompanyForm = styled.div`
  border: 1px solid green;
  flex:1;
`;

export {
  Row,
  EntityTypeContainer,
  NTNContainer,
  STRNContainer,
  CardButtonContainer,
  CardButton,
  EntityTypeContainerHeading,
  EntityTypeContainerButtons,
  CustomButtons,
  CustomCardButton,
  STRNForm,
  CompanyForm,
};
