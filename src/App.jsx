import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Blog from './pages/blog'
import AboutUs from './pages/aboutus'
import Lawyers from './pages/lawyers'
import Terms from './pages/terms'
import LawyerProfile from './pages/lawyer_profile'
import ContactUs from './pages/contactus'
import SingleQuestion from './pages/single_question'
import Question from './pages/question'
import {
    url_question,
    url_blog,
    url_lawyers,
    url_aboutus,
    url_contactus,
    url_lawyer,
    url_terms,
} from './helpers/Url_string_manager'

import LawyerProvider from './context/lawyer_context'
import BlogProvider from './context/blog_context'
import SingleBlog from './pages/single_blog'
import SearchProvider from './context/search_context'
export default function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <SearchProvider>
                            <BlogProvider>
                                <Home />
                            </BlogProvider>
                        </SearchProvider>
                    }
                />
                <Route
                    path="/fr"
                    element={
                        <SearchProvider>
                            <BlogProvider>
                                <Home />
                            </BlogProvider>
                        </SearchProvider>
                    }
                />
                <Route
                    path="Magazine-Juridique"
                    element={
                        <BlogProvider>
                            <Blog />
                        </BlogProvider>
                    }
                />
                <Route
                    path={url_blog}
                    element={
                        <BlogProvider>
                            <Blog />
                        </BlogProvider>
                    }
                />
                <Route
                    path={url_blog + '/:title/:id'}
                    element={
                        <BlogProvider>
                            <SingleBlog />
                        </BlogProvider>
                    }
                />
                <Route
                    path={'/Magazine-Juridique/:title/:id'}
                    element={
                        <BlogProvider>
                            <SingleBlog />
                        </BlogProvider>
                    }
                />

                <Route
                    path={url_question}
                    element={
                        <BlogProvider>
                            <Question />
                        </BlogProvider>
                    }
                />
                <Route
                    path="Qestions-Reponses"
                    element={
                        <BlogProvider>
                            <Question />
                        </BlogProvider>
                    }
                />
                <Route
                    path={url_question + '/:title/:id'}
                    element={
                        <BlogProvider>
                            <SingleQuestion />
                        </BlogProvider>
                    }
                />
                <Route
                    path={'/Qestions-Reponses/:title/:id'}
                    element={
                        <BlogProvider>
                            <SingleQuestion />
                        </BlogProvider>
                    }
                />
                <Route path={url_aboutus} element={<AboutUs />} />
                <Route path={url_terms} element={<Terms />} />
                <Route path={url_contactus} element={<ContactUs />} />
                <Route path="/Qui-Somme-Nous" element={<AboutUs />} />
                <Route path="/Confidentialite" element={<Terms />} />
                <Route path="/Contactez-Nous" element={<ContactUs />} />
                <Route
                    path={url_lawyer + '/:name/:id'}
                    element={
                        <LawyerProvider>
                            <LawyerProfile />
                        </LawyerProvider>
                    }
                />
                <Route
                    path={'/Avocat/:name/:id'}
                    element={
                        <LawyerProvider>
                            <LawyerProfile />
                        </LawyerProvider>
                    }
                />

                <Route
                    path={url_lawyers + '/:state/:name'}
                    element={
                        <LawyerProvider>
                            <Lawyers />
                        </LawyerProvider>
                    }
                />
                <Route
                    path={'Avocats/:state/:name'}
                    element={
                        <LawyerProvider>
                            <Lawyers />
                        </LawyerProvider>
                    }
                />
                <Route
                    path={url_lawyers + '/:state'}
                    element={
                        <LawyerProvider>
                            <Lawyers />
                        </LawyerProvider>
                    }
                />
                <Route
                    path={'/Avocats/:state'}
                    element={
                        <LawyerProvider>
                            <Lawyers />
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
                <Route
                    path={'/Avocats'}
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
