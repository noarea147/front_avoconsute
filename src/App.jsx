import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Blog from './pages/blog'
import AboutUs from './pages/aboutus'
import Lawyers from './pages/lawyers'
import LawyerProfile from './pages/lawyer_profile'
import ContactUs from './pages/contactus'
import {
    url_question,
    url_blog,
    url_lawyers,
    url_aboutus,
    url_contactus,
    url_lawyer,
} from './helpers/Url_string_manager'

import Question from './pages/question'
import LawyerProvider from './context/lawyer_context'
import Lawyer from './shared/component/lawyer'
import BlogProvider from './context/blog_context'
import SingleBlog from './pages/single_blog'
export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path={url_blog}
                    element={
                        <BlogProvider>
                            <Blog />
                        </BlogProvider>
                    }
                />
                <Route path={url_blog + '/:title/:id'} element={<SingleBlog />} />
                <Route path={url_question} element={<Question />} />
                <Route path={url_aboutus} element={<AboutUs />} />
                <Route path={url_contactus} element={<ContactUs />} />
                <Route
                    path={url_lawyer + '/:name/:id'}
                    element={
                        <LawyerProvider>
                            <LawyerProfile />
                        </LawyerProvider>
                    }
                />

                <Route
                    path={url_lawyers}
                    element={
                        <LawyerProvider>
                            <Lawyers />
                        </LawyerProvider>
                    }
                />
            </Routes>
        </Router>
    )
}
