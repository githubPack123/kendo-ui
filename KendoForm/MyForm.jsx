import React from 'react';
import { Input } from '@progress/kendo-react-all';
import '@progress/kendo-theme-material/dist/all.css';
import {
  EntityTypeContainer,
  NTNContainer,
  Row,
  STRNContainer,
  CardButton,
  CardButtonContainer,
  EntityTypeContainerHeading,
  EntityTypeContainerButtons,
  CustomButtons,
  CustomCardButton,
  CompanyForm,
  STRNForm,
} from '../KendoForm/MyForm.style';
import TextField from '../Elements/Basic/TextField';
import Button from '../Elements/Basic/Button';
import KendoSelectBox from '../Elements/Basic/SelectBox';

const MyForm = () => {
  return (
    <div>
      <Row>
        <EntityTypeContainer>
          <EntityTypeContainerHeading>
            <p>Please select entity type:</p>
          </EntityTypeContainerHeading>
          <EntityTypeContainerButtons>
            <CustomButtons>
              <CardButton>NTN HOLDER</CardButton>
              <CardButton>FTN HOLDER</CardButton>
              {/* <CustomCardButton>
              </CustomCardButton> */}
            </CustomButtons>
            <CardButton>NON-NTN/FTN Holder</CardButton>
          </EntityTypeContainerButtons>
        </EntityTypeContainer>
        <NTNContainer>
          <TextField label="Enter FTN" placeholder="Enter FTN" type="text" />
          <Button text="Validate" />
        </NTNContainer>
        <STRNContainer>
          <STRNForm>
            <p>STRN</p>
            <label htmlFor="selectBox">Principle Activity</label>
            <KendoSelectBox
              data={[]}
              onChange={(e) => console.log(e.target.value)}
              value={'View'}
            />
            <label htmlFor="selectBox">Business Name</label>
            <KendoSelectBox
              data={[]}
              onChange={(e) => console.log(e.target.value)}
              value={'View'}
            />
            <hr />
          </STRNForm>
          <CompanyForm>
            <p>Company</p>
          </CompanyForm>
        </STRNContainer>
      </Row>
    </div>
  );
};

export default MyForm;
