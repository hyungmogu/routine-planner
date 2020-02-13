import React from 'react';

import { AppProvider } from './components/Context';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <AppProvider>
      <AppNavigator/>
    </AppProvider>
  );
}
