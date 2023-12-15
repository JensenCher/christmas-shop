import { RootState } from "./state"

export function setSearchedProducts(state: RootState, products: string[]) {
    state.searchedProducts = products
}