import { createStore } from 'vuex';
import MovieChart from './modules/MovieChart';

const store =  createStore({
    modules: {
        MovieChart,
    }
});
export default store