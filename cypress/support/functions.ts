export const getInputByLabel = (label:string) => {
    return cy
        .contains('label', label)
        .invoke('attr', 'for')
        .then((id:string) => {
            cy.get('#' + id.replace(" ", "-"))
        })
}