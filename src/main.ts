import { createApp } from 'vue';
import { Store } from 'vuex';
import App from './App.vue';
import router from './router/index';
import store from './store/index'
import { moment, MomentType, getImageUrl, GetImageUrlnType, d_Days, d_DaysType, movieIsRated, movieIsRatedType } from './plugins/Global'

interface State {
    count: number
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store<State>,
        $moment: MomentType,
        $getImageUrl: GetImageUrlnType,
        $d_Days: d_DaysType,
        $movieIsRated: movieIsRatedType,
    }
}

const app = createApp(App)
app.use(router)
app.use(store)
app.config.globalProperties.$moment = moment
app.config.globalProperties.$getImageUrl = getImageUrl
app.config.globalProperties.$d_Days = d_Days
app.config.globalProperties.$movieIsRated = movieIsRated
app.mount('#app')