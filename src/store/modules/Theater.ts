import { Module, GetterTree, MutationTree, ActionTree, ActionContext } from 'vuex';
import { TheatersInfo, screenMovie, hallInfo } from '@/types/TheatersInterface'

export class Theater {
    public theater_list: Array<TheatersInfo> = [
        {
            id: '0',
            name: 'CGV강남',
            area: '서울',
            theater_img: '../assets/theaters_img/CGVgangnam.jpg',
            address: '서울특별시 강남구 역삼동 814-6',
            road_address: '서울특별시 강남구 강남대로 438 (역삼동)',
            detail_address: '스타플렉스',
            special_hall: ['sweetbox', 'screenX'],
            call: '1544-1122',
            show_number: 6,
            total_seats: 874,
            information: '',
            hall_id: ['0', '1'],
        }
    ]
    public hall_list: Array<hallInfo> = [
        {
            id: '0',
            theater_id: '0',
            name: '1관 6층',
            seats: 158,
            screen: '2D',
            screenMovie: [
                {
                    movies_id: '0',
                    start_time: '11:15',
                    end_time: '13:30',
                    reserved_seats: 158,
                    unreserved_seats: 0,
                },
                {
                    movies_id: '1',
                    start_time: '13:50',
                    end_time: '15:30',
                    reserved_seats: 158,
                    unreserved_seats: 0,
                },
                {
                    movies_id: '2',
                    start_time: '16:00',
                    end_time: '18:30',
                    reserved_seats: 158,
                    unreserved_seats: 0,
                },
                {
                    movies_id: '3',
                    start_time: '19:15',
                    end_time: '21:30',
                    reserved_seats: 158,
                    unreserved_seats: 0,
                },
            ]
        },
        {
            id: '1',
            theater_id: '0',
            name: '2관(LASER) 6층',
            seats: 124,
            screen: '2D',
            screenMovie: [
                {
                    movies_id: '0',
                    start_time: '10:15',
                    end_time: '13:30',
                    reserved_seats: 124,
                    unreserved_seats: 0,
                },
                {
                    movies_id: '3',
                    start_time: '15:50',
                    end_time: '17:30',
                    reserved_seats: 124,
                    unreserved_seats: 0,
                },
            ]
        }
    ]
}

const getters: GetterTree<Theater, any> = {
    theater_list(state: Theater): Array<TheatersInfo> {
      return state.theater_list
    },
    hall_list(state: Theater): Array<hallInfo> {
      return state.hall_list
    }
  }
  
  const mutations: MutationTree<any> = {
  }
  
  const actions: ActionTree<Theater, any> = {
  }
  
  const TheaterInfo: Module<Theater, any> = {
    namespaced: true,
    state: new Theater(),
    getters,
    mutations,
    actions,
  }
  
  export default TheaterInfo