import mm from 'moment'


export type MomentType = (name:Date) => string

export const moment:MomentType = (date:Date)=>{
    return mm(date).format('YYYY-MM-DD')
}

type GetImageUrlnType = (name:string) => any
export const getImageUrl:GetImageUrlnType = (name:string) => {
    const url = new URL(name, import.meta.url).href
    return url
  }

type d_DaysType = (name: Date) => any
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