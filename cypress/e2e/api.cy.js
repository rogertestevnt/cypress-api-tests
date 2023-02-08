const Joi = require('joi')

describe('API Test sample', () => {

  const HTTP_OK = 200

  const booksListSchema = Joi.array().min(1).items(Joi.object({

    id: Joi.number(),
    title: Joi.string(),
    description: Joi.string(),
    pageCount: Joi.number(),
    excerpt: Joi.string(),
    publishDate: Joi.date()
}))


  it('GET - validate the response status and contents', () => {
    cy.request("GET", "/Books")
    .then((response) => {
      expect(response.status).to.eq(HTTP_OK)
      expect(response.body[0].title).to.eq("Book 1")
    })
  })

  it('Schema validation testing sample',() => {
    cy.request("GET", "/Books")
    .then((response) => {
      return booksListSchema.validateAsync(response.body)
    })

  })
})
