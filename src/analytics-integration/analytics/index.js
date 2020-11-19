const axios = require('axios')

const sendAnalytics = () => async (userId, eventGroup, eventName, label) => {
    try {
        await axios.post(`https://www.google-analytics.com/collect?v=1&t=event&tid=UA-168662646-2&cid=${userId}&ec=${eventGroup}&ea=${eventName}&el=${label}&ev=1`, {})

        return {
            status : 200
        }

    } catch (error) {
        return {
            status : 500,
            error
        }
    }

}

module.exports = () => {

    return {
        sendAnalytics: sendAnalytics()
    }

}