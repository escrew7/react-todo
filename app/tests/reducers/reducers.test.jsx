var expect = require('expect')
var reducers = require('reducers')
var df = require('deep-freeze-strict')

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText : 'dog'
      }
      var res = reducers.searchTextReducer(df(''), df(action))
      expect(res).toEqual(action.searchText)
    })
  })

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      var res = reducers.showCompletedReducer(df(false), df(action))
      expect(res).toEqual(true)
    })
  })

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'walk dog'
      }
      var res = reducers.todosReducer(df([]), df(action))
      expect(res.length).toEqual(1)
      expect(res[0].text).toEqual(action.text)
    })
  })

  describe('todoToggle', () => {
    it('should toggle todo completed to true', () => {
      var action = {
        type : 'TOGGLE_TODO',
        id: 1234
      }
      var res = reducers.todosReducer(df([{
          id: 1234,
          completed: true,
          completedAt: 123
      }]), df(action))
      expect(res[0].completed).toEqual(false)
      expect(res[0].completedAt).toEqual(undefined)
    })
  })
})
