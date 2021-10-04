import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout, NavBar } from './components'
import { CategorySwitch } from './pages'
import { createStore } from './redux'

const categories = [
  { title: 'React', path: '/react' },
  { title: 'Redux', path: '/redux' },
  { title: 'Compasso', path: '/compasso' },
]

function App() {
  const { store } = createStore()

  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Layout>
          <Layout.Navigation>
            <NavBar>
              {categories.map((category, index) => (
                <NavBar.Item {...category} key={index} />
              ))}
            </NavBar>
          </Layout.Navigation>
          <Layout.Body>
            <Switch>
              <Route path="/:category" component={CategorySwitch} />
            </Switch>
          </Layout.Body>
        </Layout>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
