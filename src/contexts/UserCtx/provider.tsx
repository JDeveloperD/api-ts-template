import { Course } from '@api/resources';
import { PublicThemeCtx } from '@contexts/PublicCtx';
import React, { FC, ReactNode, useContext, useState } from 'react';
import UserCtx from './context';

const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { courses } = useContext(PublicThemeCtx);
  const [cart, setCart] = useState<Course[]>([]);
  const [totalCart, setTotalCart] = useState(0.00);

  const calculateTotal = (operation: 'sum' | 'rest', prevValue: number, price: number): number => {
    if (operation === 'sum') {
      return prevValue + price;
    }

    return prevValue - price;
  };

  const addCourseToCart = (idCourse: number) => {
    const courseSelected = courses?.find(course => course.id === idCourse);
    setCart([...cart, courseSelected]);
    setTotalCart(prev => calculateTotal('sum', prev, Number(courseSelected?.price.amount)));
  };

  const removeCourseToCart = (idCourse: number) => {
    const courseRemoved = cart?.filter(course => course.id !== idCourse);
    setCart(courseRemoved);
  };

  return <UserCtx.Provider value={{
    user: undefined,
    cart,
    totalCart,
    addCourseToCart,
    removeCourseToCart
  }}>
    {children}
  </UserCtx.Provider>;
};

export default UserProvider;
