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
import EditJobPage from './pages/EditJobPage';


const App = () => {
  const addJob = async (newJob) => {
    console.log(newJob);
    try{
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newJob)
      })

      return;
    }catch (e){
      console.log("Error while posting new job:" + e)
    }
  };

  const deleteJob = async (id) => {
    console.log(id);
    try{
      const res = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE',
      })

      return;
    }catch (e){
      console.log("Error on post job request:" + e)
    }
  };

  const updateJob = async (updatedJob) => {
    console.log(updatedJob.id);
    try{
      const res = await fetch(`/api/jobs/${updatedJob.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updatedJob)
      })

      return;
    }catch (e){
      console.log("Error while updating job:" + e)
    }
  };
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' index element={<JobsPage/>}/>
      <Route path='/add-job' index element={<AddJobPage addJobSubmit={addJob}/>}/>
      <Route path='/jobs/:id' index element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
      <Route path='/edit-job/:id' index element={<EditJobPage updateJob={updateJob}/>} loader={jobLoader}/>
      <Route path='*' index element={<NotFoundPage/>}/>
    </Route>
  )
  );

  return <RouterProvider router={router}/>;
};

export default App;
