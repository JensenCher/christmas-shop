import { Commit } from "vuex"
import axiosClient from "../axiosClient";

export function searchProducts({ commit }: { commit: Commit }, keyword: { value: string }) {
    axiosClient.get(`search.php?s=${keyword.value}`)
        .then(({ data }) => {
            commit('setSearchedProducts', data)
        })
}