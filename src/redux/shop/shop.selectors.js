import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => (collections ? Object.keys(collections).map(key => collections[key]) : [])
)

export const selectCollection = collectionParamUrl => 
    createSelector(
        [selectShopCollections],
        collections => (collections ? collections[collectionParamUrl] : null)
    )

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);
