import env from '../env'
import { expect } from 'chai'
import { addRant } from '../../src/actions'

describe('function addRant ', () => {
  it('should create a new row in the rants table', () => {
    // I should get a rant back if it was added properly
    return addRant("Test Rant", 1, 1, "Test Rant Title").then((rant) => {
      expect(rant.title).to.equal("Test Rant Title")
    })
  })
})
