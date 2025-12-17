<template>
	<component :is="layout" v-if="layout">
		<RouterView />
	</component>
	<RouterView v-else />
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import AppLayout from './layouts/AppLayout.vue';

import KTUI from '@keenthemes/ktui/src/index';
import KTLayout from './metronic/app/layouts/demo1';
import KTComponent from './metronic/core/index';

onMounted(() => {
	nextTick(() => {
		KTUI.init();
		KTComponent.init();
		KTLayout.init();
	});
});

const route = useRoute();

const layout = computed(() => {
	return route.meta.showLayout ? AppLayout : null;
});
</script>
