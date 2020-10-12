const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

// id da Planilha Google que fica na URL - https://docs.google.com/spreadsheets/d/1DeqINerc0OuF_yU7fr0hfDUAuspYFjfL4Ju7y1imyYo/edit#gid=0
const doc = new GoogleSpreadsheet('1DeqINerc0OuF_yU7fr0hfDUAuspYFjfL4Ju7y1imyYo')

const run = async () => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        console.log(doc.title)
    } catch (err) {
        console.log(err)
    }

}


run()