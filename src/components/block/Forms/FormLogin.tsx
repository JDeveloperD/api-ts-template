import { Button, Input } from '@components/ui';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
  email: string,
  password: string
}

const FormLogin = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>();
  const [loading, setLoading] = useState<boolean>(false);

  const requiredInputs = () => {
    register('email', {
      required: 'El correo es requerido',
      pattern: /^\S+@\S+$/i
    });

    register('password', {
      required: 'la contraseña es requerida',
      minLength: 6
    });
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setLoading(true);
    console.log(data);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    requiredInputs();
  }, [register]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        label="Email"
        error={errors.email?.message}
        required
        onChange={(ev) => setValue('email', ev.target.value)}
      />
      <Input
        type="password"
        label="Password"
        error={errors.password?.message}
        required
        onChange={(ev) => setValue('password', ev.target.value)}
      />
      <Button type='submit' isLoading={loading}>
        Enviar
      </Button>
    </form>
  );
};

export default FormLogin;
