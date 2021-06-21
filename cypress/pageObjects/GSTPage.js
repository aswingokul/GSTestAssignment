class GSTPage {
    email() {
        return cy.get('#email');
    }

    password() {
        return cy.get('#password');
    }

    signinButton() {
        return cy.get('#root > main > div.route-transition-wrapper > div > div > div > form > div:nth-child(3) > button');
    }

    projectMenu() {
        return cy.get(':nth-child(2) > .side-nav__main__item__icon > :nth-child(1) > button');
    }

    newProjectButton() {
        return cy.get('.button--accent');
    }
    
    getRandomInt(){
        return Math.random().toString(36).substring(5);
    }

    getNewProjectField() {
        return cy.get('#input-field-name');
    }

    addProject() {
        return cy.get('.button.button--accent:nth-child(4)').should('not.have.class', 'button-icon');
        
    }

    getNewlyCreatedProject() {
        return cy.get('span.saved-project__headline__name__text');
    }
}

export default GSTPage