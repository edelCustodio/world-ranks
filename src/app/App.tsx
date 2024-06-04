"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "src/lib/store";

const App = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Provider store={store}>
      <main className="flex flex-row justify-center content-center">
        {children}
      </main>
    </Provider>
  );
};

export default App;
