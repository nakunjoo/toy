import { RouteRecordRaw, createRouter, createWebHistory} from 'vue-router';
import index from '../views/index.vue';
import Movies from '../views/movies/index.vue';
import MoviesDetail from '../views/movies/Detail.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'index',
		component: index,
	},
	{
		path: '/movies/:type',
		name: 'Movies',
		component: Movies,
	},
	{
		path: '/movies/:type/detail',
		component: MoviesDetail,
		name: 'MoviesDetail',
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});
export default router;