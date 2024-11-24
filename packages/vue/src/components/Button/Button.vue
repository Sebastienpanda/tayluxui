<script setup lang="ts">
withDefaults(defineProps(), {
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
