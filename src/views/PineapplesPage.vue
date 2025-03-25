<template>
    <VContainer>
        <h1 class="heading">Pineapples</h1>
        <VCard>
            <VCardTitle>Add a Pineapple</VCardTitle>
            <VCardItem>
                <VTextField v-model="nameInput" label="Name"></VTextField>
                <VTextField v-model="weightInput" label="Weight" :rules="[validateNumber]"></VTextField>
                <VCheckbox v-model="ripeInput" label="Ripe"></VCheckbox>
                <VBtn text="Add Pineapple" color="primary" :disabled="addButtonDisabled" @click="addPineapple"></VBtn>
            </VCardItem>
            <VCardItem>
                <VList density="compact">
                    <VListItemTitle>Current Pineapples</VListItemTitle>
                    <VListItem v-for="(pineapple, index) in pineappleStore.pineapples" :key="index">
                        {{ index + 1 }} | name: {{ pineapple.name }}, weight: {{ pineapple.weight }}g, ripe: {{ pineapple.ripe }} 🍍
                    </VListItem>
                    <VListItem v-if="pineappleStore.pineapples.length === 0">No Pineapples</VListItem>
                </VList>
            </VCardItem>
            <VCardItem>
                <VCardTitle>Latest Pineapple</VCardTitle>
                <VCardText>Name: <strong>{{ pineappleStore.pineapples[pineappleStore.pineapples.length - 1]?.name ?? "N/A" }}</strong></VCardText>
                <VBtn text="Delete" color="primary" :disabled="deleteButtonDisabled" @click="deletePineapple"></VBtn>
            </VCardItem>
        </VCard>
    </VContainer>
</template>

<script setup lang="ts">
import { Pineapple } from '@/models/pineapple';
import { usePineappleStore } from '@/stores/pineappleStore';
import { computed, ref } from 'vue';
import { VCardText, VListItemTitle } from 'vuetify/lib/components/index.mjs';

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