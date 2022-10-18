import React from 'react';
import Cookies from 'universal-cookie';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';

const cookies = new Cookies();

function App() {
    return (
        <Router>
            <div className="admin-app">
                <Routes>
                    {cookies.get('useradmin')
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
                    {/* {privateRoutes.map((route, index) => {
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
