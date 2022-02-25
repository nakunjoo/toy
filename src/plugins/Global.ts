import mm from 'moment'


export type MomentType = (name:any) => any

export const moment:MomentType = (date:any)=>{
    return mm(date)
}

export type GetImageUrlnType = (name:string) => any
export const getImageUrl:GetImageUrlnType = (name:string) => {
    const url = new URL(name, import.meta.url).href
    return url
  }

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