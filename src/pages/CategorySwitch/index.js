import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { PostPage } from '../PostPage'
import { CategoryPostPage } from '../CategoryPostPage'

export const CategorySwitch = () => (
  <Switch>
    <Route path="/:category/:id" component={PostPage} />
    <Route exact path="/:category" component={CategoryPostPage} />
  </Switch>
)
