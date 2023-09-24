import Grid from './Grid';

export default function Background() {
  return (
    <div className='fixed top-0 left-0 right-0 px-4 pointer-events-none select-none -z-50'>
      <div className='container grid grid-cols-12 m-auto'>
        <Grid />
      </div>
    </div>
  );
}
