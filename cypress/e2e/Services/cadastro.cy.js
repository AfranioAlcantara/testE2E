import dadosBdody from '../../fixtures/dadosBody.json'

it('cadastro de um cliente no banco de dados', () => {
    cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/user',
        failOnStatusCode: false,
        body: {
            "id": 1,
            "username": "alcantara",
            "firstName": "sousa",
            "lastName": "alcantara",
            "email": "wanrrelsen21@gmail.com",
            "password": "afranio123",
            "phone": "85 992786769",
            "userStatus": 0
        }
    }).then((response)=>{
        expect(response.status).to.eq(200)
    })
    
});
it('confima o cadastro do cliente no banco de dados', () => {
    cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/user/alcantara',

    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.firstName).to.eq("sousa")
        expect(response.body.email).to.eq("wanrrelsen21@gmail.com")
        expect(response.body.phone).to.eq("85 992786769")
    })
    
});
it('altera os dados do cliente ja cadastrado', () => {
    cy.request({
        method: 'PUT',
        url: 'https://petstore.swagger.io/v2/user/alcantara',
        body:{
            "id": 2,
            "username": "nio",
            "firstName": "santos",
            "lastName": "alcantara",
            "email": "turtle@gmail.com",
            "password": "afranio123",
            "phone": "123456789",
            "userStatus": 0
        }
    }).then((response)=>{
        expect(response.status).to.eq(200)
    })
    
});
it('valida o cadastro alterado utilizando o fixtures para validar todo o body', () => {
    cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/user/nio'
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(JSON.stringify(response.body)).to.eq(JSON.stringify(dadosBdody))
    })
});
it('faz login com os dados do cliente alterados', () => {
    cy.request({
        method: 'GET',
        url:'https://petstore.swagger.io/v2/user/login'
    }).then((response)=>{
        expect(response.status).to.eq(200)
    })
    
});
it('faz logout da conta', () => {
    cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/user/logout'
    }).then((response)=>{
        expect(response.status).to.eq(200)
    })
    
});