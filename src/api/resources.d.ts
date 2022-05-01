export interface IUser {
  id: number
  email: string
  photo: string
  profile: string
}

export interface IEstudent extends IUser {}

export interface IInstructor extends IUser {
  name: string
}

export interface IVideo {
  id: number
  alt: string
  title: string
  thumb: string
}

export interface ICourse {
  id: number
  name: string
  level: number
  price: {
    amount: string | number
    currencySimbol: string
  },
  discount?: {
    amount: number
    currencySimbol: string
  },
  video: IVideo
  instructor: IInstructor
}

export interface Post {}
