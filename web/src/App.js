import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import CommunityHomePage from './pages/CommunityHomePage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import RegisterPage from './pages/RegisterPage';
import AuthStore from './contexts/AuthStore';
import ClaimsPage from './pages/ClaimsPage';
import EventsPage from './pages/EventsPage';
import ForumTopicsPage from './pages/ForumTopicsPage';
import ContactsPage from './pages/ContactsPage';
import ReservationsPage from './pages/ReservationsPage';
import ReservationPage from './pages/ReservationPage';
import SettingsPage from './pages/SettingsPage';
import PrivateRoute from './guards/PrivateRoute';
import ContactPage from './pages/ContactPage';
import ClaimPage from './pages/ClaimPage';
import ForumTopicPage from './pages/ForumTopicPage';
import CreateJoinPage from './pages/CreateJoinPage';
import CommunityCreatePage from './pages/CommunityCreatePage';
import ProfilePage from './pages/ProfilePage';
import Error404Page from './pages/Error404Page';
import ThemeContext from './contexts/ThemeContext';
import { useContext } from 'react';
import Error403Page from './pages/Error403Page';
import WelcomePage from './pages/WelcomePage';



function App() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className={darkMode ? "dark" : "light"}>
        <AuthStore>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-join" element={<CreateJoinPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/welcome/:id" element={<WelcomePage />} />
            <Route path="/communities/create" element={<CommunityCreatePage />} />
            <Route path="/communities/:id" element={<PrivateRoute><CommunityHomePage /></PrivateRoute>} />
            <Route path="/communities/:id/claims" element={<PrivateRoute><ClaimsPage /></PrivateRoute>} />
            <Route path="/communities/:id/claims/:claimId" element={<PrivateRoute><ClaimPage /></PrivateRoute>} />
            <Route path="/communities/:id/events" element={<PrivateRoute><EventsPage /></PrivateRoute>} />
            <Route path="/communities/:id/forumTopics" element={<PrivateRoute><ForumTopicsPage /></PrivateRoute>} />
            <Route path="/communities/:id/forumTopics/:forumTopicId" element={<PrivateRoute><ForumTopicPage /></PrivateRoute>} />
            <Route path="/communities/:id/contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
            <Route path="/communities/:id/contacts/:contactId" element={<PrivateRoute><ContactPage /></PrivateRoute>} />
            <Route path="/communities/:id/reservations" element={<PrivateRoute><ReservationsPage /></PrivateRoute>} />
            <Route path="/communities/:id/reservations/:reservationId" element={<PrivateRoute><ReservationPage /></PrivateRoute>} />
            <Route path="/communities/:id/users/:userId/account" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
            <Route path="/communities/:id/users/:userId/settings" element={<PrivateRoute><SettingsPage /></PrivateRoute>} />
            <Route path="/403" element={<Error403Page/>} />
            <Route path="*" element={<Error404Page />} />
          </Routes>
          <Footer />
        </AuthStore>
      </div>
    </>
  );
}

export default App;