import React from 'react';
import { Link } from 'react-router-dom';
export default function Error() {
  return (
    <section >
      <div >
        <h4>oops! it's a dead end</h4>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
      </div>
    </section>
  );
}