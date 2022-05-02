export interface User {
  id: number
  email: string
  photo: string
  profile: string
  name: string
}

export interface Estudent extends User { }

export interface Instructor extends User { }

export interface Video {
  id: number
  alt: string
  title: string
  thumb: string
}

export interface Course {
  id: number
  name: string
  level: number
  price: {
    amount: string | number
    currencySimbol: string
  },
  discount?: {
    amount: string | number
    currencySimbol: string
  },
  video: Video
  instructor: Instructor,
  totalStudents: number,
  rating: number
  excerpt: string | null
}

export interface Post { }
