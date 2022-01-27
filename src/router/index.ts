import { RouteRecordRaw, createRouter, createWebHistory} from 'vue-router';
import index from '../views/index.vue';
import Movies from '../views/movies/index.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'index',
		component: index,
	},
	{
		path: '/movies',
		name: 'Movies',
		component: Movies,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes
});
export default router;