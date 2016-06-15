import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import AppContainer from '../../ui/containers/AppContainer';

Meteor.startup(() => {
  render(
    <AppContainer />,
    document.getElementById('app-root')
  );
});