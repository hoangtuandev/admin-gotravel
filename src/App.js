import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';

function App() {
    return (
        <Router>
            <div className="admin-app">
                <Routes>
                    {localStorage.getItem('username')
                        ? privateRoutes.map((route, index) => {
                              const Page = route.component;
                              return (
                                  <Route
                                      key={index}
                                      path={route.path}
                                      element={<Page />}
                                  />
                              );
                          })
                        : publicRoutes.map((route, index) => {
                              const Page = route.component;
                              return (
                                  <Route
                                      key={index}
                                      path={route.path}
                                      element={<Page />}
                                  />
                              );
                          })}
                    {/* {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<Page />}
                            />
                        );
                    })} */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
