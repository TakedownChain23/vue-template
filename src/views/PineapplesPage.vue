<template>
    <v-container>
        <h1 class="heading">Pineapples</h1>
        <v-card>
            <v-card-title>Add a Pineapple</v-card-title>
            <v-card-item>
                <v-text-field v-model="nameInput" label="Name"></v-text-field>
                <v-text-field v-model="weightInput" label="Weight" :rules="[validateNumber]"></v-text-field>
                <v-checkbox v-model="ripeInput" label="Ripe"></v-checkbox>
                <v-btn text="Add Pineapple" color="primary" :disabled="addButtonDisabled" @click="addPineapple"></v-btn>
            </v-card-item>
            <v-card-item>
                <v-list density="compact">
                    <v-list-item-title>Current Pineapples</v-list-item-title>
                    <v-list-item v-for="(pineapple, index) in pineappleStore.pineapples" :key="index">
                        {{ index + 1 }} | name: {{ pineapple.name }}, weight: {{ pineapple.weight }}g, ripe: {{ pineapple.ripe }} 🍍
                    </v-list-item>
                    <v-list-item v-if="pineappleStore.pineapples.length === 0">No Pineapples</v-list-item>
                </v-list>
            </v-card-item>
            <v-card-item>
                <v-card-title>Latest Pineapple</v-card-title>
                <v-card-text>Name: <strong>{{ pineappleStore.pineapples[pineappleStore.pineapples.length - 1]?.name ?? "N/A" }}</strong></v-card-text>
                <v-btn text="Delete" color="primary" :disabled="deleteButtonDisabled" @click="deletePineapple"></v-btn>
            </v-card-item>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">
import { Pineapple } from '@/models/pineapple';
import { usePineappleStore } from '@/stores/pineappleStore';
import { computed, ref } from 'vue';

const nameInput = ref('');
const weightInput = ref('');
const ripeInput = ref(false);

const pineappleStore = usePineappleStore();

const addButtonDisabled = computed(() => {
    return !nameInput.value || !weightInput.value || isNaN(+weightInput.value);
});

const deleteButtonDisabled = computed(() => {
    return pineappleStore.pineapples.length === 0;
})

const addPineapple = () => {
    const pineapple = new Pineapple(nameInput.value, +weightInput.value, ripeInput.value);
    pineappleStore.pineapples.push(pineapple);
}

const deletePineapple = () => {
    pineappleStore.pineapples.pop();
}

const validateNumber = (value: string) => {
    if (!isNaN(+value)) {
        return true;
    }

    return "Field must be a number";
}
</script>