import { RootState } from "./state"

export function getSearchedProducts(state: RootState) {
    return state.searchedProducts
}

export function getAllProducts(state: RootState) {
    return state.products
}