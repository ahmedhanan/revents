import { Route } from 'react-router-dom';
import Events from '../../features/events/eventDashboard/Events';
import EventDetailed from '../../features/events/eventDetailed/EventDetailed';
import EventForm from '../../features/events/eventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import Navbar from '../../features/nav/Navbar';

export default function App() {
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <Navbar />
            <main>
              <Route exact path='/events' component={Events} />
              <Route exact path='/events/event=:id' component={EventDetailed} />
              <Route exact path='/create-event' component={EventForm} />
            </main>
          </>
        )}
      />
    </>
  );
}
