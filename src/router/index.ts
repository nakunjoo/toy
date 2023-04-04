import { RouteRecordRaw, createRouter, createWebHistory} from 'vue-router';
import index from '../views/index.vue';
import Movies from '../views/movies/index.vue';
import MoviesDetail from '../views/movies/Detail.vue';
import Theaters from '../views/theaters/index.vue';
import Ticket from '../views/ticket/index.vue';

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
	{
		path: '/movies/detail',
		component: MoviesDetail,
		name: 'MoviesDetail',
	},
	{
		path: '/theaters',
		component: Theaters,
		name: 'Theaters',
	},
	{
		path: '/ticket',
		component: Ticket,
		name: 'Ticket',
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes
});
export default router;