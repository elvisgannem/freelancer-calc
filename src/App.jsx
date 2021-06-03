import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeButtons from './components/HomeButtons'
import { BrowserRouter as Router, Route } from 'react-router-dom/'
import NewProjectHeader from './components/NewProjectHeader'
import NewProjectForm from './components/NewProjectForm'
import PrevProjects from './components/PrevProjects'
// import Result from './components/Result'

const App = () => {
    return (
        <Router>

            <Route path='/' exact={true}>
                <div className="flex flex-col h-full justify-between">
                    <Header />
                    <HomeButtons />
                    <Footer />
                </div>
            </Route>

            <Route path='/newproject'>

                <div className="flex flex-col h-full justify-between">
                    <NewProjectHeader />
                    <NewProjectForm />
                    <Footer/>
                </div>
            </Route>

            <Route path='/prev'>

                <div className="flex flex-col h-full justify-between">
                    <NewProjectHeader />
                    <PrevProjects />
                    <Footer />
                </div>
            </Route>

        </Router>
    )
}

export default App