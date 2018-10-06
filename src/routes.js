import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import PathPage from './components/paths/PathPage';
import LearningDashboardPage from './components/learningDashboard/LearningDashboardPage';
import NewPathPage from './components/newPath/NewPathPage';

export default (
<Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="paths" component={PathPage} />
    <Route path="learning" component={LearningDashboardPage} />
    <Route path="create-path" component={NewPathPage} />
    <Route path="create-private-path" component={NewPathPage} private />
    <Route path="edit-path/:id" component={NewPathPage} editing />
  </Route>
);
