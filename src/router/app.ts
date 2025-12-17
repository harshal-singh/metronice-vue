import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/stocks',
    name: 'stocks',
    component: () => import('../views/StocksView.vue'),
    meta: { requiresAuthentication: true, showLayout: true },
  },
] as RouteRecordRaw[]
