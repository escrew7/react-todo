import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

var expect = require('expect')
var actions = require('actions')

var createMockStore = configureMockStore([thunk])

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
      todo: {
        id: 'abc123',
        text: 'stuff',
        completed: false,
        createdAt: 123456
      }
    }
    var res = actions.addTodo(action.todo)

    expect(res).toEqual(action)
  })

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({})
    const todoText = 'My todo'

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions()
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      })
      expect(actions[0].todo).toInclude({
        text: todoText
      })
      done()
    }).catch(done)
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
