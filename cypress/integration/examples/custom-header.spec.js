describe('Validate Custom Headers', () => {
    it('Should send and validate custom headers', () => {
        cy.request({
            method: 'GET',
            url: 'https://httpbin.org/headers', // Public API to test headers
            headers: {
                'x-custom-header': 'test-valueee' // Custom header
            }
        }).then((response) => {
            // Validate that the response contains the custom header
            expect(response.status).to.eq(200);
            expect(response.body.headers['X-Custom-Header']).to.equal('test-value');
        });
    });
});
