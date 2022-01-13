import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Index from "./pages/index";
import AddPage from "./pages/add";
import EditPage from "./pages/edit";
import Register from "./pages/register";
import NotFound from "./pages/notfound";
import FileUploadPage from "./pages/fileupload";

import Country from './Pages/OncePages/Country/Country';
import Currency from './Pages/OncePages/Currency/Currency';
import Languages from './Pages/OncePages/Languages/Languages';
import Wasp from './Pages/Wasp/Wasp';
import Task from './Pages/Task/Task';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route path='/dashboard' component={Dashboard} />
                        <Route path='/index' component={Index}/>
                        <Route path='/register' component={Register} />
                        <Route path='/add' component={AddPage} />
                        <Route path='/edit/' component={EditPage} />
                        <Route path='/fileupload/' component={FileUploadPage} />
                      <Route
                      path="/Wasp"
                      element={
                        <ProtectedRoute>
                          <Wasp />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/Task"
                      element={
                        <ProtectedRoute>
                          <Task />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/Country"
                      element={
                        <ProtectedRoute>
                          <Country />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/Currency"
                      element={
                        <ProtectedRoute>
                          <Currency />
                        </ProtectedRoute>
                      }
                    />

                    <Route
                      path="/Languages"
                      element={
                        <ProtectedRoute>
                          <Languages />
                        </ProtectedRoute>
                      }
                    />   
                        <Route path='*' component={NotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
