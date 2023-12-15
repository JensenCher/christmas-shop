export interface RootState {
    products: string[],
    searchedProducts: string[],
}

export default {
    products: ["Snowman"],
    searchedProducts: [],
} as RootState