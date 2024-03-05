import { SquareComponent } from "./square.component"

describe('SquareComponent', () => {

    it('can mount', () => {
        cy.mount(SquareComponent)
    })

    it('can display lable in button', () => {
        cy.mount(SquareComponent, {
            componentProperties: {
                value: 'O'
            }
        })
    })


})