// import { verify } from 'cypress/types/sinon';
// import LoginPO from '/Users/aswingokulachandran/GSTestAssignment/cypress/pageObjects/GSTPage'

Given(/^I launch the d3a login page$/, () => {
	cy.visit('/login');	
});



// const loginPO = new LoginPO();

When(/^I type in username and password$/, () => {
	
	// loginPO.email().type(Cypress.env('username'));
	// loginPO.password().type(Cypress.env('password'));
	
	//TODO: captcha

    cy.get('#email').type(Cypress.env('username'));
	cy.get('#password').type(Cypress.env('password'));
	
});

When(/^Click on the sign in button$/, () => {
	// loginPO.signinButton().click();
    cy.get('#root > main > div.route-transition-wrapper > div > div > div > form > div:nth-child(3) > button').click();
});

Then(/^I must be logged in$/, () => {
	return true;
});


When(/^I click on project icon$/, () => {
	// loginPO.projectMenu().click();	
    cy.get(':nth-child(2) > .side-nav__main__item__icon > :nth-child(1) > button').click();
});


Then(/^I must see the Project window$/, () => {
	cy.get('#root > div > div.Pane.vertical.Pane2.js-Pane2.Pane2--projects > header > h1').contains('Projects');
});


When(/^I click on the New Project button$/, () => {
	// loginPO.newProjectButton().click();
    cy.get('.button--accent').click();
});


Then(/^I must see the add new project modal$/, () => {
	cy.get('.library-name-modal__header').contains('New Project');
});

function getRandomInt(){
    return Math.random().toString(36).substring(5);
}

let newName = ""
When(/^I type a new project name$/, () => {
	// newName = "project-" + loginPO.getRandomInt();
    newName = "project-" + getRandomInt();
	// loginPO.getNewProjectField().type(newName);
    cy.get('#input-field-name').type(newName);
});

When(/^I click on add project button$/, () => {
	// loginPO.addProject().click();
    cy.get('.button.button--accent:nth-child(4)').should('not.have.class', 'button-icon').click();
});

// var caratDrop = null, newProjectRowText = null;
Then(/^I must see the newly created project under the projects list$/, () => {
	// const newProjectRowText  = loginPO.getNewlyCreatedProject();

	cy.get('span.saved-project__headline__name__text').should('contain', newName);
	// caratDrop  = newProjectRowText.parents('div.saved-project__headline');
	
	
});


Given(/^I open the d3a project site$/, () => {
	cy.visit('/projects');
});


When(/^I click on the new created project's carat$/, () => {
	cy.get('span.saved-project__headline__name__text').contains(newName).click();
	
});

Then(/^I should see the New Simulation button displayed$/, () => {
	cy.get('.button--accent.button-icon.saved-project__button--new-simulation').click();
});




When(/^I click on the New Simulation button$/, () => {
	cy.get('button.button--accent.button-icon.settings-form__submit').click();
});

// let startDate = ""
Then(/^I should see the new simulation wrapper modal$/, () => {
	cy.get('div.settings-form').should('be.visible'); 
    // startDate = cy.get('#input-field-startDate').invoke('val');
});

When(/^I click on the Next button$/, () => {

	cy.get('button.button--accent.button-icon.settings-form__submit').click();
});

Then(/^I must verify the simulation is added successfully$/, () => {
	cy.get('.action-diamond.action-diamond--unclicked').should('be.visible');
	cy.visit('/projects');
	cy.get('span.saved-project__headline__name__text').contains(newName).click();
	cy.get('div.saved-config--pct-width__title__name').should('contain', 'default simulation');

});
