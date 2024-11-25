<script setup lang="ts">
import type { ButtonProps } from '../../../../core/src/types/Button/button';
withDefaults(defineProps<ButtonProps>(), {
	size: 'md',
	variant: 'primary',
	loading: false,
	disabled: false,
	loadingPosition: 'right',
});

defineEmits<{
	(e: 'click', event: MouseEvent): void;
}>();
</script>

<template>
	<button @click="$emit('click', $event)">
		<slot />
	</button>
</template>
