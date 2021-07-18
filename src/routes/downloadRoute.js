const { Router } = require ('express')
const path = require('path')

const router = new Router()

const paths = {
    events: path.resolve(__dirname, '..', '..', 'data', 'events.json'),
    accounts: path.resolve(__dirname, '..', '..', 'data', 'accounts.json')
}

router.get('/', (req, res) => {
    const {file} = req.query

    if (file === 'events') {
        return res.download(paths.events)
    }

    if (file === 'accounts') {
        return res.download(paths.events)
    }

    return res.status(404)
})

module.exports = router