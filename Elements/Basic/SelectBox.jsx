import React from 'react';
import { DropDownList } from '@progress/kendo-react-dropdowns';

const KendoSelectBox = ({ data, value, onChange }) => {
  return <DropDownList data={data} value={value} onChange={onChange} />;
};

export default KendoSelectBox;
