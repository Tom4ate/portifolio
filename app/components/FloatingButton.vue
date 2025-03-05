<template> 
    <div
        class="text-end"
        :style="getSide()"
        style="
            z-index: 1004;
            transform: translateY(0%);
            position: fixed;
            height: 88px;
            width: calc((100% - 0px) - 0px);
            pointer-events: none;">
        <v-btn
            ref="button"
            :icon="props.icon"
            :color="$props.color"
            :variant="props.variant"
            :disabled="props.disabled"
            v-bind="props.bind"
            position="relative"
            class="ma-4"
            style="pointer-events: all;"
            :to="props.to ?? ''"
            @click="emit('buttonClicked')">
            <v-icon v-if="props.icon" :icon="props.icon" />
            <span v-if="props.text">{{ props.text }}</span>
        </v-btn>
    </div>

    <v-menu v-if="props.menuOptions?.length" :activator="button" offset="7">
        <slot name="menu" :options="props.menuOptions">
            <v-card elevation="10">
                <v-list class="py-0">
                    <slot name="menu-option" v-for="(item, index) in props.menuOptions" :key="index" :option="item" :index="index">
                        <slot :name="`menu-option-${item}`">
                            <v-list-item :value="index" @click="emit('menu:option',item)" :color="$props.color">
                                <v-list-item-title>
                                    <slot :name="`menu-option-title`" :option="item">
                                        {{ item }}
                                    </slot>
                                </v-list-item-title>
                            </v-list-item>
                            <v-divider v-if="index < props.menuOptions.length - 1"></v-divider>
                        </slot>
                    </slot>
                </v-list>
            </v-card>
        </slot>
    </v-menu>
    
</template>

<script setup lang="ts">

    const button = ref();

    const emit = defineEmits([
        'buttonClicked',
        'menu:option'
    ])

    const props = defineProps({
        icon: {
            type: String,
            default: undefined
        },
        text: {
            type: String,
            default: undefined
        },
        color: {
            type: String,
            default: 'success'
        },
        variant: {
            type: String as PropType<'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain'>,
            default: 'elevated'
        },
        bind: {
            type: Object,
            default: undefined
        },
        menuOptions: {
            type: Array<String>,
            required: false
        },
        to: {
            type: String,
            required: false
        },
        top: {
            type: Number,
            default: undefined
        },
        bottom: {
            type: Number,
            default: undefined
        },
        right: {
            type: Number,
            default: undefined
        },
        left: {
            type: Number,
            default: undefined
        },
        disabled: {
            type: Boolean,
            default: false
        }
    });

    function getSide() {
        let sideCSS = '';

        if(props.top) sideCSS += `top: ${props.top}px;`;
        else if(props.bottom) sideCSS += `bottom: ${props.bottom}px;`;
        else sideCSS += 'bottom: 0px;';

        if(props.right) sideCSS += `right: ${props.right}px;`;
        else if(props.left) sideCSS += `left: ${props.left}px;`;
        else sideCSS += 'left: 0px;';

        return sideCSS;
    }
</script>