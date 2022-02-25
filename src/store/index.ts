import { createStore } from 'vuex';
import MovieChart from './modules/MovieChart';
import Theater from './modules/Theater';

const store =  createStore({
    modules: {
        MovieChart,
        Theater,
    }
});
export default store