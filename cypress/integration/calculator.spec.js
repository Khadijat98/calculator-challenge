describe("Add numbers together", () => {
  it("should check 7 + 2 = 9", () => {
    cy.visit("http://127.0.0.1:5500/index.html")
  
    cy.get("#seven").click()
    cy.get("#add").click()
    cy.get("#two").click()
    cy.get("#equals").click()
    cy.get("#calculator__display-screen").should("contain" , "9")
  })

  it("should check 43 + 28 = 71", () => {
    cy.visit("http://127.0.0.1:5500/index.html")
  
    cy.get("#four").click()
    cy.get("#three").click()
    cy.get("#add").click()
    cy.get("#two").click()
    cy.get("#eight").click()
    cy.get("#equals").click()
    cy.get("#calculator__display-screen").should("contain" , "71")
  })

  it("should check 70% + 20% = 0.8999999999999999", () => {
    cy.visit("http://127.0.0.1:5500/index.html")
  
    cy.get("#seven").click()
    cy.get("#zero").click()
    cy.get("#percentage").click()
    cy.get("#add").click()
    cy.get("#two").click()
    cy.get("#zero").click()
    cy.get("#percentage").click()
    cy.get("#equals").click()
    cy.get("#calculator__display-screen").should("contain" , "0.8999999999999999")
  })
})

describe("Subtract numbers from each other", () => {
  it("should check 5 - 3 = 2", () => {
    cy.visit("http://127.0.0.1:5500/index.html")
  
    cy.get("#five").click()
    cy.get("#subtract").click()
    cy.get("#three").click()
    cy.get("#equals").click()
    cy.get("#calculator__display-screen").should("contain" , "2")
  })

  it("should check 334 - 56 = 278", () => {
    cy.visit("http://127.0.0.1:5500/index.html")
  
    cy.get("#three").click()
    cy.get("#three").click()
    cy.get("#four").click()
    cy.get("#subtract").click()
    cy.get("#five").click()
    cy.get("#six").click()
    cy.get("#equals").click()
    cy.get("#calculator__display-screen").should("contain" , "278")
  })

  it("should check 50% - 30% = 0.2", () => {
    cy.visit("http://127.0.0.1:5500/index.html")
  
    cy.get("#five").click()
    cy.get("#zero").click()
    cy.get("#percentage").click()
    cy.get("#subtract").click()
    cy.get("#three").click()
    cy.get("#zero").click()
    cy.get("#percentage").click()
    cy.get("#equals").click()
    cy.get("#calculator__display-screen").should("contain" , "0.2")
  })
})

describe("Multiply numbers together", () => {
  it("should check 8 x 9 = 72", () => {
    cy.visit("http://127.0.0.1:5500/index.html")
  
    cy.get("#eight").click()
    cy.get("#multiply").click()
    cy.get("#nine").click()
    cy.get("#equals").click()
    cy.get("#calculator__display-screen").should("contain" , "72")
  })

  it("should check 82 x 777 = 63714", () => {
    cy.visit("http://127.0.0.1:5500/index.html")
  
    cy.get("#eight").click()
    cy.get("#two").click()
    cy.get("#multiply").click()
    cy.get("#seven").click()
    cy.get("#seven").click()
    cy.get("#seven").click()
    cy.get("#equals").click()
    cy.get("#calculator__display-screen").should("contain" , "63714")
  })

  it("should check 0.5 x 0.4 = 0.2", () => {
    cy.visit("http://127.0.0.1:5500/index.html")
  
    cy.get("#zero").click()
    cy.get("#decimal").click()
    cy.get("#five").click()
    cy.get("#multiply").click()
    cy.get("#zero").click()
    cy.get("#decimal").click()
    cy.get("#four").click()
    cy.get("#equals").click()
    cy.get("#calculator__display-screen").should("contain" , "0.2")
  })
})

describe("Divide numbers from each other", () => {
  it("should check 63 / 9 = 7", () => {
    cy.visit("http://127.0.0.1:5500/index.html")
  
    cy.get("#six").click()
    cy.get("#three").click()
    cy.get("#divide").click()
    cy.get("#nine").click()
    cy.get("#equals").click()
    cy.get("#calculator__display-screen").should("contain" , "7")
  })

  it("should check 480 / 80 = 6", () => {
    cy.visit("http://127.0.0.1:5500/index.html")
  
    cy.get("#four").click()
    cy.get("#eight").click()
    cy.get("#zero").click()
    cy.get("#divide").click()
    cy.get("#eight").click()
    cy.get("#zero").click()
    cy.get("#equals").click()
    cy.get("#calculator__display-screen").should("contain" , "6")
  })

  it("should check 90% / 0.5 = 1.8", () => {
    cy.visit("http://127.0.0.1:5500/index.html")
  
    cy.get("#nine").click()
    cy.get("#zero").click()
    cy.get("#percentage").click()
    cy.get("#divide").click()
    cy.get("#zero").click()
    cy.get("#decimal").click()
    cy.get("#five").click()
    cy.get("#equals").click()
    cy.get("#calculator__display-screen").should("contain" , "1.8")
  })
})