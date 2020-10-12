const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

// id da Planilha Google que fica na URL - https://docs.google.com/spreadsheets/d/1DeqINerc0OuF_yU7fr0hfDUAuspYFjfL4Ju7y1imyYo/edit#gid=0
const doc = new GoogleSpreadsheet('1DeqINerc0OuF_yU7fr0hfDUAuspYFjfL4Ju7y1imyYo')

const run = async () => {
    try {
        // acessa a planilha com as credenciais 
        await doc.useServiceAccountAuth(credentials)
        //carrega dos da planilha
        await doc.loadInfo()
        console.log(doc.title)

        // Seleciona uma folha da planilha específica 
        const sheet = doc.sheetsByIndex[2]

        // Carrega as celulas específicas 
        await sheet.loadCells('A3:B3')
        console.log(sheet.title)

        // Carrega uma célula específica
        const promotionCell = sheet.getCell(2, 0)
        console.log(promotionCell.value)

        const textCell = sheet.getCell(2, 1)
        console.log(textCell.value)

    } catch (err) {
        console.log(err)
    }

}


run()