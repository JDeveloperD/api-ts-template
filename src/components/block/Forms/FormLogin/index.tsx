import { Small } from '@components/typography';
import { Button, FormGroup, Input, InputMessage, Label, Checkbox } from '@components/ui';
import { MdOutlineAlternateEmail, MdOutlineLock } from 'react-icons/md';
import Link from 'next/link';

const FormLogin = ({ csrfToken }) => {
  return (
    <form
    method="post" action="/api/auth/callback/credentials"
    autoComplete='off'
    className='mt-4'
  >
    <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
    <FormGroup invalid={false}>
      <Input name="email" type="email" />
      <Label>Correo electronico</Label>
      <MdOutlineAlternateEmail />
      {false && (
        <InputMessage
          color="danger">El password es requerido</InputMessage>
      )}
    </FormGroup>
    <FormGroup invalid={false}>
      <Input name="password" type="password" />
      <Label>Contraseña (minimo 8 caracteres)</Label>
      <MdOutlineLock />
      {false && (
        <InputMessage
          color="danger">El password es requerido</InputMessage>
      )}
    </FormGroup>
    <div className="d-flex justify-content-between mt-4">
      <Label>
        <Checkbox type="checkbox" className='me-2' />
        <Small color='gray'>Recordar contraseña</Small>
      </Label>
      <Link href="/auth/credentials-signin">
        <a>
          <Small color='primary'>¿Olvidaste la contraseña?</Small>
        </a>
      </Link>
    </div>
    <Button
      block
      className='mt-4'
      variant='filled'
      color='secondary'
      type="submit">Iniciar sesion</Button>
  </form>
  );
};

export default FormLogin;

// import { Button, Input } from '@components/ui';
// import { useEffect, useState } from 'react';
// import { SubmitHandler, useForm } from 'react-hook-form';

// type FormValues = {
//   email: string,
//   password: string
// }

// const FormLogin = () => {
//   const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>();
//   const [loading, setLoading] = useState<boolean>(false);

//   const requiredInputs = () => {
//     register('email', {
//       required: 'El correo es requerido',
//       pattern: /^\S+@\S+$/i
//     });

//     register('password', {
//       required: 'la contraseña es requerida',
//       minLength: 6
//     });
//   };

//   const onSubmit: SubmitHandler<FormValues> = (data) => {
//     setLoading(true);
//     console.log(data);
//     setTimeout(() => {
//       setLoading(false);
//     }, 3000);
//   };

//   useEffect(() => {
//     requiredInputs();
//   }, [register]);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Input
//         type="email"
//         label="Email"
//         error={errors.email?.message}
//         required
//         onChange={(ev) => setValue('email', ev.target.value)}
//       />
//       <Input
//         type="password"
//         label="Password"
//         error={errors.password?.message}
//         required
//         onChange={(ev) => setValue('password', ev.target.value)}
//       />
//       <Button type='submit' isLoading={loading}>
//         Enviar
//       </Button>
//     </form>
//   );
// };

// export default FormLogin;
