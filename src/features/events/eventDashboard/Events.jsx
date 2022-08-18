import EventForm from '../eventForm/EventForm';
import EventCard from './EventCard';

function Events() {
  let list = [1, 2, 3];
  return (
    <>
      <section className='sm:grid sm:grid-cols-12 p-5'>
        <section className='sm:hidden text-center mb-2'>
          <p className='text-lg underline hover:underline-offset-4 decoration-sky-500'>
            Upcoming events
          </p>
          <div className='flex items-center justify-center mt-2 gap-x-0.5 cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-3 w-3'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <button className='text-sm'>Create Event</button>
          </div>
        </section>
        <main className='flex flex-col gap-y-2 sm:col-start-3 sm:col-span-5'>
          {list.map((i) => (
            <EventCard key={i} />
          ))}
        </main>
        <article className='hidden sm:block sm:col-start-9 sm:col-span-3'>
          <EventForm />
        </article>
      </section>
    </>
  );
}

export default Events;
