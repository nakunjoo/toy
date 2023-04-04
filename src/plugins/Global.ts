import mm from 'moment'


// moment 세팅
export type MomentType = (name:any) => any

export const moment:MomentType = (date:any)=>{
    return mm(date)
}

// 변수를 통해 선언된 이미지 주소 불러오기
export type GetImageUrlnType = (name:string) => any
export const getImageUrl:GetImageUrlnType = (name:string) => {
    const url = new URL(name, import.meta.url).href
    return url
  }


//   영화 개봉일자를 기준으로 d-day계산
export type d_DaysType = (name: Date) => any
export const d_Days:d_DaysType = (date: Date) => {
    const toDay = mm(new Date)
    const end = mm(date)
    const duration = end.diff(toDay, 'days') + 1
    let d_Days: number|null
    if(duration < 0) {
        d_Days = null
    } else {
        d_Days = Math.ceil(duration)
    }
    return d_Days
}

// 영화 관람가
export type movieIsRatedType = (name: string) => string | undefined
export const movieIsRated: movieIsRatedType = (rated: string) => {
    let str
    if (rated === 'all') {
        str = '전체'
    } else if (rated === '12') {
        str = '12세 이상'
    } else if (rated === '15') {
        str = '15세 이상'
    } else if (rated === '19') {
        str = '청소년 관람불가'
    }

    return str
}

// moment.day 값으로 나온 숫자값을 요일로 변환
export type weekDayType = (name: number) => string
export const weekDay: weekDayType = (week: number) => {
    let str = ''
    if (week === 0) {
        str = '일'
    } else if (week === 1) {
        str = '월'
    } else if (week === 2) {
        str = '화'
    } else if (week === 3) {
        str = '수'
    } else if (week === 4) {
        str = '목'
    } else if (week === 5) {
        str = '금'
    } else if (week === 6) {
        str = '토'
    }

    return str
}