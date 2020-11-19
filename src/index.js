const { analytics } = require('./analytics-integration/index')

module.exports = () => {

    return {
        analytics: analytics()
    }

}