var expect = require('expect')
var actions = require('actions')

describe('Actions', () => {
  it('should genereate search text action', () => {
    var action = {
      type : 'SET_SEARCH_TEXT',
      searchText : 'some search text'
    }
    var res = actions.setSearchText(action.searchText)

    expect(res).toEqual(action)
  })

  it('should genereate addTodo actions', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Thing to do'
    }
    var res = actions.addTodo(action.text)

    expect(res).toEqual(action)
  })

  it('should generate add todos action object', () => {
    var todos = [{
      id: '111',
      text: 'abc',
      completed: false,
      completedAt: undefined,
      createdAt: 3300
    }]
    var action = {
      type: 'ADD_TODOS',
      todos
    }
    var res = actions.addTodos(todos)
    expect(res).toEqual(action)
  })

  it('should show completed', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    var res = actions.showCompleted()

    expect(res).toEqual(action)
  })

  it('should toggle todos', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 1234
    }
    var res = actions.toggleTodo(action.id)
    expect(res).toEqual(action)
  })
})
