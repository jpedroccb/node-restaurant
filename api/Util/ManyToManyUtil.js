const verifyDeletedRows = (originalData, newData, fieldReference) => {
    const newDataObject = newData.reduce((acc,cur)=> {
        if(cur[fieldReference]){
            return {
                ...acc,
                [cur[fieldReference]]: true
            }
        }
    },{})

    const deletedRows = originalData.map((dataItem) => {
        if(!newDataObject[dataItem[fieldReference]]){
            return dataItem[fieldReference]
        }
    })

    return deletedRows
}

module.exports = {
    verifyDeletedRows
}