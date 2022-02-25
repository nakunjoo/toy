export interface hallInfo {
    id: string, // 상영관 고유 번호
    theater_id: string, // 소속된 영화관 고유 번호
    name: string, // 상영관 이름
    reserved_seats: number, // 예매 가능 좌석
    unreserved_seats: number, // 예매 된 좌석
    seats: number, // 총 좌석 수
    screenMovie: Array<any>,
}

export interface screenMovie {
    movies_id: string // 현재 상영관에서 상영하는 영화 고유 id
    start_time: string, // 상영 시작 시간
    end_time: string, // 상영 종료 시간
}

export interface TheatersInfo {
    id: string, // 극장 고유 번호
    name: string, // 극장 이름
    theater_img: string, // 극장 이미지 
    area: string, // 극장 지역 (ex: 서울, 경기, 부산)
    address: string, // 극장 주소
    road_address: string, // 극장 도로명 주소
    detail_address: string // 극장 상세 주소
    special_hall: Array<string>, // 상영 특별관
    call: string, // 극장 전화번호
    show_number: number, // 상영관 개수
    total_seats: number, // 총 좌석 개수
    information: string, // 극장 정보
    hall_id: Array<string>, // 극장 상영관 고유 id
}