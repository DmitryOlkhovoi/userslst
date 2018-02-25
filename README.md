This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Install deps

`npm install`

Run locally

`npm start`

Run tests

`npm test`

Build

`npm run build`

## What to add/improve

I don't like this solution aesthetically in terms of UI/UX. But assuming I have 5hrs, I did pretty good solution.

Things I'd like to add/improve in this solution
 - Use json-server and fetch-mock to make real front-end app ready to integrate with backend
 - Use SASS
 - Add modal insterad of confirm() to ask user
 - CSS Modules for encapsulated styles
 - Mobx for better react exp
 - React Storybook to develop components seprately
 - E2E tests and just more tests
 - Better design/UI/UX
 - PropTypes
 - Typescript
 - Aliases '@/components/User'
 - Airbnb eslint
 
I think you like to see how I'd implement modals. There are at least 3 ways. Portals, React Portals and top most component connected to the store that shows modal component

Async actions - redux thunk, saga, mobx

I didn't add async actions, but I'd test it like that

```
it('fetches, merges and sets history', (done) => {
  fetchMock.get('/api/v2/1/domain-explorer/domain-queries', historyDEMock)
    fetchMock.get('/api/v1/1/web-properties/2/rank-source/3/topic-ideations', historyAIEMock)

    const store = mockStore({
      history: {
        items: [],
        rankSources: [],
      },
      rankSources: {
        items: [],
      },
    })

    const payload = formatHistory(mergeHistories(historyDEMock, historyAIEMock))
    const expectedActions = [
      {
        type: 'setHistoryLoading',
        payload: true,
      },
      {
        type: 'setHistory',
        payload,
      },
      {
        type: 'setHistoryLoading',
        payload: false,
      },
    ]

    store.dispatch(actions.fetchHistoryIfNeeded())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
        done()
      })
})
```
