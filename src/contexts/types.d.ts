import { Course, User } from '@api/resources';

export interface PublicThemeCtxInterface {
  nav: {
    isOpen: boolean
  },
  courses: Course[]
}

export interface UserCtxInterface {
  user: User | undefined
  cart: Course[]
  totalCart: number
  addCourseToCart: (idCourse: number) => void
  removeCourseToCart: (idCourse: number) => void
}
