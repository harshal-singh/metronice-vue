// import { useAuthStore } from '@/stores/auth'
import { createRouter, createWebHistory } from 'vue-router';
import { nextTick } from 'vue';
import appRoutes from './app';
import authRoutes from './auth';

import KTUI from '@keenthemes/ktui/src/index';
import KTComponent from '../metronic/core/index';
import KTLayout from '../metronic/app/layouts/demo1';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		...authRoutes,
		...appRoutes,
		{
			path: '/:pathMatch(.*)*',
			redirect: '/login',
		},
	],
});

// Navigation guards
router.beforeEach((to, _from, next) => {
	// Get the store instance
	// const authStore = useAuthStore()

	// Check authentication status from localStorage
	const storedUser = localStorage.getItem('auth_user');
	const isAuthenticated = !!storedUser;

	// Not logged in & trying to access protected route
	if (to.meta.requiresAuthentication && !isAuthenticated) {
		return next({ name: 'login' });
	}

	//  Logged in & trying to access auth routes (login)
	if (isAuthenticated && to.meta.showLayout === false) {
		return next({ name: 'stocks' });
	}

	// Allow navigation
	return next();
});

// Re-init KTUI & Metronic core after each successful navigation
router.afterEach(async () => {
	await nextTick();

	// Initialize KTUI components (modals, accordions, datatable, toggles, etc.)
	KTUI.init();

	// Initialize Metronic core components (menus, layout helpers)
	KTComponent.init();
	KTLayout.init();
});

export default router;
