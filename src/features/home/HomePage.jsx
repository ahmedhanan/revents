export default function HomePage({ history }) {
  return (
    <main className='w-screen h-screen bg-cyan-500 flex flex-col justify-center items-center'>
      <h1 className='text-5xl text-white font-bold mb-5 underline underline-offset-8 decoration-4 decoration-sky-700'>
        Revents
      </h1>
      <section
        className='flex items-center gap-x-1 bg-sky-500 py-1 px-2 rounded border-2 border-cyan-700 cursor-pointer'
        onClick={() => history.push('/events')}
      >
        <button className='text-lg'>Get Started</button>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M13 7l5 5m0 0l-5 5m5-5H6'
          />
        </svg>
      </section>
    </main>
  );
}
