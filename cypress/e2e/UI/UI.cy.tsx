import {getInputByLabel} from "../../support/functions";

describe('Select Breed', () => {
    it('Breed dropdown should exist', () => {
        cy.visit('/')
        getInputByLabel('Breed').should('exist')
    })
    
    it('Should have options', () => {
        cy.visit('/')
        getInputByLabel('Breed').click()
        cy.get('#Breed-selector-0')
    })
    
    it('Should select an item', () => {
        cy.visit('/')
        getInputByLabel('Breed').click()
        cy.contains('.mantine-Select-item', 'affenpinscher').click()
        cy.get('#Breed-selector').should('have.value', 'affenpinscher')
    })
    
    it('Should load the subbreed dropdown', () => {
        cy.visit('/')
        getInputByLabel('Breed').click()
        cy.get('#Breed-selector-items').contains('bulldog').click()
        getInputByLabel('Sub Breed').should('exist')
    })
    
    it('Should select a subbreed', () => {
        cy.visit('/')
        getInputByLabel('Breed').click()
        cy.contains('.mantine-Select-item', 'bulldog').click()
        getInputByLabel('Sub Breed').click()
        cy.get('#Sub-Breed-selector-items').contains('boston').click()
        cy.get('#Sub-Breed-selector').should('have.value', 'boston')
    })
    
    it('Should change to 5 images', () => {
        cy.visit('/')
        getInputByLabel('Number of images').type('{backspace}5')
    })
    
    it('Should get 5 images for boston bulldog', () => {
        cy.visit('/')
        getInputByLabel('Breed').click()
        cy.contains('.mantine-Select-item', 'bulldog').click()
        getInputByLabel('Sub Breed').click()
        cy.get('#Sub-Breed-selector-items').contains('boston').click()
        getInputByLabel('Number of images').type('{backspace}5')
        cy.contains('button', 'View Images').click()
        cy.get('img').should('have.length', 5)
    })
})