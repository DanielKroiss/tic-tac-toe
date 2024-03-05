import { AppComponent } from "../app.component";
import { SquareComponent } from "../square/square.component";
import { BoardComponent } from "./board.component"

describe('BoardComponent', () => {

    it('makes a move when square is clicked ', () => {
        cy.mount(BoardComponent)
        const firstSquare = cy.get('app-square').first()
        firstSquare.should('have.text', '')
        firstSquare.click()
        cy.get('app-square').first().should('have.text', 'X')
    })
})