import { ICourse } from '@api/resources';

export interface PublicThemeCtxInterface {
  nav: {
    isOpen: boolean
  },
  courses: ICourse[]
}
