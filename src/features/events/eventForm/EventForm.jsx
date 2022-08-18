import { useState } from 'react';

function EventForm() {
  const initialValues = {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  };
  const [values, setValues] = useState(initialValues);

  function handleEventFormSubmit(e) {
    e.preventDefault();
    console.log(values);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <form>
      <div className='my-2'>
        <h1>Create Event</h1>
      </div>
      <div className='flex flex-col gap-y-2'>
        <input
          type='text'
          placeholder='Event Title'
          className='w-full border rounded text-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-sky-500'
          name='title'
          onChange={(e) => handleInputChange(e)}
          value={values.title}
        />
        <input
          type='text'
          placeholder='Category'
          className='w-full border rounded text-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-sky-500'
          name='category'
          onChange={(e) => handleInputChange(e)}
          value={values.category}
        />
        <input
          type='text'
          placeholder='Description'
          className='w-full border rounded text-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-sky-500'
          name='description'
          onChange={(e) => handleInputChange(e)}
          value={values.description}
        />
        <input
          type='text'
          placeholder='City'
          className='w-full border rounded text-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-sky-500'
          name='city'
          onChange={(e) => handleInputChange(e)}
          value={values.city}
        />
        <input
          type='text'
          placeholder='Venue'
          className='w-full border rounded text-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-sky-500'
          name='venue'
          onChange={(e) => handleInputChange(e)}
          value={values.venue}
        />
        <input
          type='date'
          placeholder='Event Date'
          className='w-full border rounded text-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-sky-500'
          name='date'
          onChange={(e) => handleInputChange(e)}
          value={values.date}
        />
      </div>
      <div className='flex justify-end'>
        <button
          className='my-2 border border-sky-500 rounded py-1 px-2 bg-sky-700 text-white'
          onClick={handleEventFormSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default EventForm;
