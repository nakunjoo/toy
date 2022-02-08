import mm from 'moment'

export const moment = {
  namespaced: true,
  actions: {
    async setMoment(date:Date) {
      const moment = await mm(date).format('YYYY-MM-DD')
      return moment
    }
  }
};