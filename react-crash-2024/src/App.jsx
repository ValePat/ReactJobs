import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/jobs' index element={<JobsPage/>}/>
    <Route path='/add-job' index element={<AddJobPage/>}/>
    <Route path='/jobs/:id' index element={<JobPage/>} loader={jobLoader}/>
    <Route path='*' index element={<NotFoundPage/>}/>
  </Route>
)
);

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;
