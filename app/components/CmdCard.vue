<script setup lang="ts">
const buttons = ref([{ text: '—' },{ text: '▢' }, { text: 'X', red: true }]);

const props = defineProps({
    title: {
        type: String,
        defult: 'C:/System32/xxx.exe'
    }
})
</script>

<template>
    <v-card>
        <v-card-actions class="bg-black">
            <div class="text-primary">{{ props.title }}</div>
            <v-spacer></v-spacer>
            <v-btn 
                v-for="button in buttons" 
                :key="button.text" 
                :color="button.red ? 'red' : 'gray'">
                {{ button.text }}
            </v-btn>
        </v-card-actions>
        <slot></slot>
    </v-card>
</template>