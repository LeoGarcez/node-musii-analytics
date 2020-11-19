const chai = require('chai')
const expect = require('chai').expect
const analyticsService = require('../src/index')

describe('analytics', () => {

    const service = analyticsService()

    it('sendSearchAnalytics', async () => {
        const retorno = await service.analytics.sendAnalytics('5edc5185c518570007577956', 'searchs', 'search', '5edc5185c518570007577956')
        chai.assert.equal(retorno.status, 200)
    })

    it('sendSearchAnalytics', async () => {
        const retorno = await service.analytics.sendAnalytics('5edc5185c518570007577956', 'searchs', 'searchFeed?page2  ', '5edc5185c518570007577956')
        chai.assert.equal(retorno.status, 200)
    })

    it('sendLikeAnalytics', async () => {
        const retorno = await service.analytics.sendAnalytics('5edc5185c518570007577956', 'likes', 'like', 'leo')
        chai.assert.equal(retorno.status, 200)
    })

    it('sendCommentAnalytics', async () => {
        const retorno = await service.analytics.sendAnalytics('5edc5185c518570007577956', 'comments', 'comment', 'leo')
        chai.assert.equal(retorno.status, 200)
    })

    it('sendPostPhotoAnalytics', async () => {
        const retorno = await service.analytics.sendAnalytics('5edc5185c518570007577956', 'posts', 'postPhoto', 'leo')
        chai.assert.equal(retorno.status, 200)
    })

    it('sendPostMusic   Analytics', async () => {
        const retorno = await service.analytics.sendAnalytics('5edc5185c518570007577956', 'posts', 'postMusic', 'leo')
        chai.assert.equal(retorno.status, 200)
    })

    it('sendMusiiMatch', async () => {
        const retorno = await service.analytics.sendAnalytics('5edc5185c518570007577956', 'musiimatch', 'match', '5edc5185c518570007577956')
        chai.assert.equal(retorno.status, 200)
    })

    it('sendUserSearch', async () => {
        const retorno = await service.analytics.sendAnalytics('5edc5185c518570007577956', 'searchs', 'userSearch', 'teste')
        chai.assert.equal(retorno.status, 200)
    })

    it('sendTracksSearch', async () => {
        const retorno = await service.analytics.sendAnalytics('5edc5185c518570007577956', 'searchs', 'trackSearch', 'muse')
        chai.assert.equal(retorno.status, 200)
    })

    it('sendIdUserSearch', async () => {
        const retorno = await service.analytics.sendAnalytics('5edc5185c518570007577956', 'searchs', 'userIdSearch', '5edc5185c518570007577956')
        chai.assert.equal(retorno.status, 200)
    })

    //@TODO quantas vezes pessoa x entrou em algum musii id (salvar quem foi, e quem buscou)
    /*it('sendIdUserSearch', async () => {
        const retorno = await service.analytics.sendAnalytics('5edc5185c518570007577956', 'searchs', 'userIdSearch', '5edc5185c518570007577956')
        chai.assert.equal(retorno.status, 200)
    })*/
})