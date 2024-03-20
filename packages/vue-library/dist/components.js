import { defineContainer } from './vue-component-lib/utils';
export const AppCart = defineContainer('app-cart', undefined);
export const AppCartItem = defineContainer('app-cart-item', undefined, [
    'count',
    'pic',
    'name',
    'price'
]);
export const AppConfirmed = defineContainer('app-confirmed', undefined);
export const AppHeader = defineContainer('app-header', undefined);
export const AppLayout = defineContainer('app-layout', undefined);
export const AppShimmer = defineContainer('app-shimmer', undefined);
export const AppShipping = defineContainer('app-shipping', undefined);
export const AppShippingItem = defineContainer('app-shipping-item', undefined, [
    'pic',
    'name',
    'price',
    'selectedShippingMethod',
    'onChangeShippingMethod'
]);
export const MyComponent = defineContainer('my-component', undefined, [
    'first',
    'middle',
    'last'
]);
//# sourceMappingURL=components.js.map