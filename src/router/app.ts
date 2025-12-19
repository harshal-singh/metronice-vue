import type { RouteRecordRaw } from 'vue-router';

export default [
	{
		path: '/stocks',
		name: 'stocks',
		component: () => import('../views/stocks/StocksView.vue'),
		meta: { requiresAuthentication: true, showLayout: true },
	},
	{
		path: '/stocks/add',
		name: 'stock-add',
		component: () => import('../views/stocks/StockFormView.vue'),
		meta: { requiresAuthentication: true, showLayout: true },
	},
	{
		path: '/stocks/edit/:id',
		name: 'stock-edit',
		component: () => import('../views/stocks/StockFormView.vue'),
		meta: { requiresAuthentication: true, showLayout: true },
	},
	{
		path: '/visit/:id',
		name: 'visit-detail',
		component: () => import('../views/visit/VisitDetailView.vue'),
		meta: { requiresAuthentication: true, showLayout: true },
	},
] as RouteRecordRaw[];
