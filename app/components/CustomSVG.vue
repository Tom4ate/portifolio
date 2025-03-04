<template>
    <nuxt-icon :name="props.name" :alt="props.name" :class="props.colorClass" :style="`font-size: ${props.size}; ${getColor(props.color)}`"/>
</template>

<script setup lang="ts">
    const vuetifyColors = ['primary', 'secondary', 'error', 'info', 'success', 'warning']

    const props = defineProps({
        name: {
            type: String,
            required: true
        },
        size: {
            type: String,
            default: '32px'
        },
        color: {
            type: String,
            default: null
        },
        colorClass: {
            type: String,
            default: ''
        },
        deafaultTextColor: {
            type: Boolean,
            default: true
        }
    })

    function getColor(color: string) {
        if(color){
            if(color.includes('#')) {
                return `color: ${color};`
            } else if(vuetifyColors.includes(color)) {
                return 'color: rgb(var(--v-theme-' + color + '))'
            }
            return 'color: ' + color;
        } else if(props.deafaultTextColor) {
            return 'color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity))'
        }
        return '';
    }
</script>