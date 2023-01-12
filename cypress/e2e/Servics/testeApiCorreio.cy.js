import Enderecos from '../fixtures/Enderecos.json'
it('teste de api correio', () => {
    cy.request({
        method: 'GET',
            url: '/60830525',
    }).then((response)=>{
        expect(response.status).to.eq(200)
    })
});

it('teste 02 api correio', () => {
    cy.request({
        method: 'GET',
            url: '/60830525'
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(JSON.stringify(response.body)).to
        .equal(JSON.stringify(Enderecos))
    })
});