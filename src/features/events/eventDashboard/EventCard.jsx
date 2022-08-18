function EventCard() {
  let list = [1, 2, 3];
  return (
    <>
      <section className='bg-cyan-300 rounded'>
        <div className='flex items-center gap-x-3 p-3'>
          <img
            className='w-12 h-12 object-cover rounded-full'
            src='/assets/person.jpeg'
            alt=''
          />
          <div className='flex flex-col'>
            <h3 className='text-lg font-bold'>title</h3>
            <h1 className='text-xs'>Hosted by Bob</h1>
          </div>
        </div>
        <div className='flex items-center gap-x-2 border-y border-sky-700 p-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
            />
          </svg>
          <p>location</p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <p>Time</p>
        </div>
        <div className='users-attending flex gap-x-1 p-3 bg-sky-700'>
          {list.map((i) => (
            <img
              className='w-8 h-8 object-cover rounded-full'
              src='/assets/person.jpeg'
              alt=''
              key={i}
            />
          ))}
        </div>
        <div className='p-3'>
          <div className='overflow-hidden text-ellipsis h-16'>
            <p className='text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              culpa quia a, quos voluptatibus, nesciunt modi architecto unde
              quisquam dignissimos at excepturi! Temporibus obcaecati aliquid
              fugit quibusdam perferendis numquam quod?
            </p>
          </div>
          <div className='text-center py-3'>
            <button className='bg-sky-700 px-4 py-2 rounded text-white'>
              view
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default EventCard;
