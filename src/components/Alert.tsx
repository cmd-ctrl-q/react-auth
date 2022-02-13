import React from 'react';

export const Alert = ({ value = 'danger', msg = '' }) => {
  return (
    <>
      {value === 'danger' ? (
        <div className='alert alert-danger'>{msg}</div>
      ) : (
        ''
      )}
    </>
  );
};
