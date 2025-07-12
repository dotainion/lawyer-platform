import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Blogs } from './pages/Blogs'
import { Contact } from './pages/Contact'
import { Services } from './pages/Services'
import { Layout } from './layouts/Layout'
import { routes } from './routes/Routes'
import { Attorneys } from './pages/Attorneys'
import { Schedule } from './pages/Schedule'
import { BlogPost } from './pages/BlogPost'
import { BusinessLaw } from './pages/practices/BusinessLaw'
import { CriminalDefense } from './pages/practices/CriminalDefense'
import { EmploymentLaw } from './pages/practices/EmploymentLaw'
import { EstatePlanning } from './pages/practices/EstatePlanning'
import { FamilyLaw } from './pages/practices/FamilyLaw'
import { RealEstateLaw } from './pages/practices/RealEstateLaw'
import { PracticeAreas } from './pages/practices/PracticeAreas'
import { Reviews } from './pages/Reviews'

export const App = () =>{
    return (
        <HashRouter>
            <Layout>
                <Routes>
                    <Route path={routes.home()} element={<Home/>} />
                    <Route path={routes.about()} element={<About/>} />
                    <Route path={routes.blogs()} element={<Blogs/>} />
                    <Route path={routes.blogPost()} element={<BlogPost/>} />
                    <Route path={routes.contact()} element={<Contact/>} />
                    <Route path={routes.services()} element={<Services/>} />
                    <Route path={routes.practiceAreas()} element={<PracticeAreas/>} />
                    <Route path={routes.attorneys()} element={<Attorneys/>} />
                    <Route path={routes.scheduleConsultation()} element={<Schedule/>} />
                    <Route path={routes.businessLaw()} element={<BusinessLaw/>} />
                    <Route path={routes.criminalDefense()} element={<CriminalDefense/>} />
                    <Route path={routes.employmentLaw()} element={<EmploymentLaw/>} />
                    <Route path={routes.estatePlanning()} element={<EstatePlanning/>} />
                    <Route path={routes.familyLaw()} element={<FamilyLaw/>} />
                    <Route path={routes.realEstateLaw()} element={<RealEstateLaw/>} />
                    <Route path={routes.reviews()} element={<Reviews/>} />
                    <Route path="/" element={<Navigate to={routes.home()}/>} />
                </Routes>
            </Layout>
        </HashRouter>
    )
}
