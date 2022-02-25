<template>
  <div id="contaniner">
    <div class="contents">
      <TheaterList
        :select-area="select_area"
        :cgv-area="cgv_area"
      />
      <div class="wrap-theater">
        <h3>
          <img
            src="../../assets/theaters_img/h3_theater.gif"
            alt=""
          >
        </h3>
        <TheaterInfo
          v-if="get_theater === true"
          :theater-info="theaterInfo"
        />
      </div>
      <div>{{ dateList }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import TheaterList from '@/components/theaters/TheaterList.vue'
import TheaterInfo from '@/components/theaters/TheaterInfo.vue'
import { mapGetters } from 'vuex'

export default defineComponent({
    components: {
        TheaterList,
        TheaterInfo,
    },
    data() {
        return {
            cgv_area: ['서울', '경기', '인천', '부산', '대구'] as Array<string>,
            select_area: '서울' as string,
            theaterInfo: {} as any,
            get_theater: false as boolean,
        }
    },
    computed: {
    ...mapGetters({
      theater_list: 'Theater/theater_list',
      hall_list: 'Theater/hall_list',
      movie_list: 'MovieChart/movie_list',
    }),
    dateList() {
      const toDay = this.$moment(new Date).format('YYYY-MM-DD')
      const twoWeeks = this.$moment(new Date).add('14', 'd').format('YYYY-MM-DD')
      let dateList = []
      let curDate = new Date(toDay)
      while(curDate <= new Date(twoWeeks)) {
        const date = curDate.toISOString().split('T')[0]
        const content = {
          month: this.$moment(date).format('MM'),
          week: this.$moment(date).format('DD'),
          day: this.$moment(date).day()
        }
        dateList.push(content);
        curDate.setDate(curDate.getDate() + 1);
      }
      return dateList
    }
  },
    mounted() {
        this.getArea()
        this.getSchedule()
    },
    methods: {
        getArea() {
            const areaIndex = Number(this.$route.query.area)
            this.select_area = this.cgv_area[areaIndex]
        },
        async getSchedule() {
            const index = Number(this.$route.query.theater)
            let theater = this.theater_list[index]
            this.hall_list.map((data:any)=>{
                if (theater.hall_id.includes(data.id)) {
                    theater.hall = data
                }
            })
            await this.getMovies(theater)
        },
        async getMovies(theater:any) {
          let screenMovie = theater.hall.screenMovie
          screenMovie.map((screen:any)=>{
            this.movie_list.map((movie:any)=>{
              if (movie.id === screen.movies_id) {
                return screen.movies = movie
              }
            })
          })
          this.theaterInfo = theater
          this.get_theater = true
          console.log(this.theaterInfo)
        }
    }
})
</script>

<style scoped lang="scss">
#contaniner {
    overflow: hidden;
    position: relative;
    width: 100%;
    z-index: 7;

    > .contents {
        clear: both;
        padding-bottom: 50px;
        position: relative;
        width: 980px;
        margin: 0 auto;

        > .wrap-theater {
            > h3 {
                height: 41px;
                margin: 30px 0 15px;
                background: url(../../assets/theaters_img/bg_h3_line.jpg) repeat-x 0 50%;
                line-height: 41px;
                text-align: center;
                font-weight: 500;

                > img {
                    padding: 0 8px;
                    background-color: #fdfcf0;
                }
            }
        }
    }
}
</style>