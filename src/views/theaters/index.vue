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
        <TheaterShowTime
          v-if="get_theater === true"
          :week-date="weekDate"
          :theater-info="theaterInfo"
          :theater-movies="theaterMovies"
          @week-change="weekChange()"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import TheaterList from '@/components/theaters/TheaterList.vue'
import TheaterInfo from '@/components/theaters/TheaterInfo.vue'
import TheaterShowTime from '@/components/theaters/TheaterShowTime.vue'
import { mapGetters } from 'vuex'

type weekNum = 0 | 1

export default defineComponent({
    components: {
        TheaterList,
        TheaterInfo,
        TheaterShowTime,
    },
    data() {
        return {
            cgv_area: ['서울', '경기', '인천', '부산', '대구'] as Array<string>,
            select_area: '서울' as string,
            theaterInfo: {} as any,
            get_theater: false as boolean,
            week_num: 0 as weekNum,
            theaterMovies: {},
        }
    },
    computed: {
    ...mapGetters({
      theater_list: 'Theater/theater_list',
      hall_list: 'Theater/hall_list',
      movie_list: 'MovieChart/movie_list',
    }),
    // 오늘 날짜를 기준으로 2주후 까지의 날짜 값 배열로 반환
    dateList() {
      const toDay = this.$moment(new Date).format('YYYY-MM-DD')
      const twoWeeks = this.$moment(new Date).add('13', 'd').format('YYYY-MM-DD')
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
    },
    // dateList에 있는 날짜값에서 이번주 혹은 다음주의 날짜 값 반환
    weekDate() {
      let weekDate:any = []
      const start = this.week_num * 7
      const end = start + 7
      for(let i = start; i < end; i++) {
        weekDate.push(this.dateList[i])
      }
      return weekDate
    },
  },
  mounted() {
      this.getArea()
      this.getSchedule()
  },
  methods: {
    // 페이지 로딩시 query값에서 선택된 지역값을 받아오기
    getArea() {
      const areaIndex = Number(this.$route.query.area)
      this.select_area = this.cgv_area[areaIndex]
    },
    // 페이지 로딩시 query값에서 선택된 극장의 정보를 불러옴
    async getSchedule() {
        const index = Number(this.$route.query.theater)
        let theater = this.theater_list[index]
        let hall:any = []
        await this.hall_list.map((data:any)=>{
            if (theater.hall_id.includes(data.id)) {
              hall.push(data)
            }
        })
        theater.hall = hall
        await this.getMovies(theater)
    },
    // 극장에서 상영중인 영화 및 상영관 값을 불러옴
    async getMovies(theater:any) {
      let theaterMovies:any = {}
      await theater.hall.map(async (hall:any)=>{
        let screenMovie = hall.screenMovie
        await screenMovie.map(async (screen:any)=>{
          await this.movie_list.map((movie:any)=>{
            if (movie.id === screen.movies_id) {
              if (theaterMovies[movie.id]) {
                if (!theaterMovies[movie.id].hall[hall.id]) {
                  theaterMovies[movie.id].hall[hall.id] = hall
                }
              } else {
                theaterMovies[movie.id] = {}
                theaterMovies[movie.id].info = movie
                theaterMovies[movie.id].hall = {}
                theaterMovies[movie.id].hall[hall.id] = hall
              }
            }
          })
        })
      })
      this.theaterInfo = theater
      this.theaterMovies = theaterMovies
      this.get_theater = true
    },
    // 이번주 또는 다음주 날짜 보기
    weekChange() {
      if (this.week_num === 0) {
        this.week_num = 1
      } else {
        this.week_num = 0
      }
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