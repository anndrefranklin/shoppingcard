import React from 'react';
import CourseCard from '../CourseCard';

import { courses } from '../../database';

const Courses = ({handleAddItemToCart}) => {
  return (
    <main>
    <section className='courses-section'>
    {courses.map((course, index) => (            
    // eslint-disable-next-line react/jsx-key
    <CourseCard img={course.url} title={course.name} price={course.price} 
    handleAddItemToCart = {handleAddItemToCart}
    />
    
    ))}                    
    </section>
    </main>
  );
}

export default Courses;