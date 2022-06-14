import { DateTime } from 'luxon'

function getDateDiff(dateFrom, dateTo) {
    // return (`тут должна быть разница даты ${dateFrom} и ${dateTo}`)

    const dateFromObject = DateTime.fromISO(dateFrom)
    const dateToObject = DateTime.fromISO(dateTo)

    return dateToObject.diff(dateFromObject, ['years', 'months', 'days']).toObject()

}



export default getDateDiff;