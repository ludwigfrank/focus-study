// Google sheets api
const GOOGLE_SHEETS_API_KEY = 'AIzaSyCLmcPixOtVxDPw6NOilfMPlBWYWCS6CGE'
const GOOGLE_SHEETS_SPREADSHEETID =
    '14pgMu8_NgIjRPPyYskorEbWJ42S2-0sYJbT1BLhYeEI'
const GOOGLE_SHEETS_RANGE = 'A1%3ABM'

export const requestUrl = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEETS_SPREADSHEETID}/values/${GOOGLE_SHEETS_RANGE}?key=${GOOGLE_SHEETS_API_KEY}`
