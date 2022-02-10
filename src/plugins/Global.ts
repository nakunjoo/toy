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
