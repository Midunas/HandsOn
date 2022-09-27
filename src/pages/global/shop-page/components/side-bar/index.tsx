import React from 'react';
import { Divider } from '@mui/material';

import CheckboxGroup from 'components/form-controls/checkbox-group';
import RangeField from 'components/form-controls/range-field/index';
import SideBarContainer from './side-bar-container';
import DrawerHeader from '../drawer-header';
import ShopContext from '../../contexts/shop-context';
import DrawerContext from '../../contexts/drawer-context';

type SideBarProps = {
  isExtendedLayout: boolean
};

const SideBar: React.FC<SideBarProps> = ({ isExtendedLayout }) => {
  const { open } = React.useContext(DrawerContext);

  const { priceFilter, categoriesFilter, materialTypesFilter } = React.useContext(ShopContext);

  return (
    <SideBarContainer variant={isExtendedLayout ? 'permanent' : 'temporary'} open={open}>
      <DrawerHeader />
      <RangeField
        label="Price"
        min={priceFilter.bounds[0]}
        max={priceFilter.bounds[1]}
        value={priceFilter.range}
        onChange={(_, newRange) => priceFilter.onChange(newRange)}
      />
      <Divider sx={{ my: 2 }} />
      <CheckboxGroup
        label="Categories"
        name="categories"
        options={categoriesFilter.options}
        value={categoriesFilter.selectedOptions}
        onChange={(_, newCategories) => categoriesFilter.onChange(newCategories)}
      />
      <Divider sx={{ my: 2 }} />
      <CheckboxGroup
        label="Material types"
        name="materialTypes"
        options={materialTypesFilter.options}
        value={materialTypesFilter.selectedOptions}
        onChange={(_, newMaterialTypes) => materialTypesFilter.onChange(newMaterialTypes)}
      />
    </SideBarContainer>
  );
};

export default SideBar;
