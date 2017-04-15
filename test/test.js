import * as actions from '../src/actions/index.js'
import * as types from '../src/constants'

describe('actions', () => {
  it('should be cool', () => {
    const payload = {
      page: 1,
      size: 5
    }
    const expectedAction = {
      type: 'IMAGES_FETCH_REQUESTED',
      page: payload.page,
      size: payload.size
    }
    expect(actions.loadImages(payload)).toEqual(expectedAction)
  })
})
