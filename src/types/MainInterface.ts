// 무비차트, 상영예정작 정보
export interface MovieChartBeScreen {
    id: string, // 영화 고유 id
    movie_img: string, // 영화 이미지
    audience: string, // 관람가
    release_date: Date, // 개봉 D-day
    special_hall: Array<string>, // 상영 특별관
    title: string, // 영화 제목
    golden_egg: string, // 골든에그
    golden_egg_value: string, // 골든에그 값
    reservation_rate: string, // 예매율
    re_opening: boolean, // 재개봉 여부
    foreman: Array<string>, // 감독
    produce: Array<string>, // 프로듀스
    actor: Array<string>, // 배우
    genre: Array<string>, // 장르
    runing_time: number, // 상영 시간
    country: Array<string>, // 국가
    detail_title: string, // 상세정보 제목
    detail_content: string, // 상세정보 내용
}


// 이벤트 정보
export interface EventList {
    event_img: string, // 이벤트 이미지
    event_url: string, // 이벤트 페이지 주소
    title: string, // 이벤트 제목
    start_day: Date, // 이벤트 시작일
    end_day: Date, // 이벤트 종료일
}

// 특별관 정보
export interface SpecialHallList {
    hall_img: string, // 특별관 이미지
    name: string, // 특별관 이름
    tag: Array<string>, // 특별관 태그
}