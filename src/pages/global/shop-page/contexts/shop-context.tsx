import * as React from 'react';
import CategoriesService from 'services/categories-service';
import CupService from 'services/cup-service';
import MaterialTypesService from 'services/material-types-service';
import useFetchedState from 'hooks/use-fetched-state';
import useCheckboxFilter, { type CheckboxFilter } from '../hooks/use-checkbox-filter';
import useRangeFilter, { type RangeFilter } from '../hooks/use-range-filter';

type ShopContextValue = {
  cups: Cup[],
  priceFilter: RangeFilter,
  categoriesFilter: CheckboxFilter,
  materialTypesFilter: CheckboxFilter
};

const fetchCategoryOptions = async () => {
  const fetchedCategories = await CategoriesService.fetchMany();

  return fetchedCategories.map(({ id, title }) => ({
    value: id,
    label: title,
  }));
};

const fetchMaterialTypesOptions = async () => {
  const fetchedMaterialTypes = await MaterialTypesService.fetchMany();

  return fetchedMaterialTypes.map(({ id, title }) => ({
    value: id,
    label: title,
  }));
};

const ShopContext = React.createContext({} as ShopContextValue);

export const ShopContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const cups = useFetchedState({
    fetchEntities: CupService.fetchMany,
    watchUrl: true,
  });

  const categoriesFilter = useCheckboxFilter({
    urlParamName: 'categoryId',
    fetchOptions: fetchCategoryOptions,
  });

  const materialTypesFilter = useCheckboxFilter({
    urlParamName: 'materialTypeId',
    fetchOptions: fetchMaterialTypesOptions,
  });

  const priceFilter = useRangeFilter({
    urlParamNames: ['price_gte', 'price_lte'],
    fetchRange: CupService.fetchPriceRange,
  });

  const shopContextValue: ShopContextValue = React.useMemo(() => ({
    cups,
    priceFilter,
    categoriesFilter,
    materialTypesFilter,
  }), [cups, priceFilter, categoriesFilter, materialTypesFilter]);

  return (
    <ShopContext.Provider value={shopContextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContext;
