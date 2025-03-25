import { Pineapple } from "@/models/pineapple";
import { defineStore } from "pinia";
import { ref } from "vue";

export const usePineappleStore = defineStore('pineapple', () => {
    const pineapples = ref<Pineapple[]>([]);

    return { pineapples }
})