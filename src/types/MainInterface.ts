// 무비차트, 상영예정작 정보
export interface MovieChartBeScreen {
    move_img: string, // 영화 이미지
    audience: string, // 관람가
    d_day: number|null, // 개봉 D-day
    special_hall: Array<string>, // 상영 특별관
    title: string, // 영화 제목
    golden_egg: string, // 골든에그
    golden_egg_value: string, // 골든에그 값
    reservation_rate: string, // 예매율
}
