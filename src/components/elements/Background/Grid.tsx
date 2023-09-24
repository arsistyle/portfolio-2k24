import React from 'react';

export default function Grid() {
  const lineClasses = 'col-span-2 border-l h-screen dark:border-white/10 border-dark/10';
  return (
    <>
      <div className={lineClasses}></div>
      <div className={lineClasses}></div>
      <div className={lineClasses}></div>
      <div className={lineClasses}></div>
      <div className={lineClasses}></div>
      <div className={`${lineClasses} border-r`}></div>
    </>
  );
}
