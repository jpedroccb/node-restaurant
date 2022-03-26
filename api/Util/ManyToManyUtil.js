const verifyDeletedRows = (originalData, newData, fieldReference) => {
    if(originalData.length == 0 || newData.length == 0 || fieldReference){
        return []
    }
    
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