const MenuService = require('./Services/MenuService')

exports.store = async (req,res) => {
    try {
        await MenuService.store(req.body)
        return res.status(200).send()
    } catch (error) {
        return res.status(500).send(error)
    }
}