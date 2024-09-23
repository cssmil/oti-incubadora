
"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input'; // Importar Input desde la carpeta ui
import { Button } from '@/components/ui/button'; // Importar Button desde la carpeta ui
import { Card } from '@/components/ui/card'; // Importar Card desde la carpeta ui

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí va la lógica de autenticación, simulada en este caso
    if (email === 'user@example.com' && password === 'password123') {
      router.push('/dashboard'); // Redirige al dashboard tras login exitoso
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <Input
              label="Correo electrónico"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div className="mb-6">
            <Input
              label="Contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            variant="default"
            className=""
          >
            Iniciar Sesión
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;