'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function AltaChoferes() {
  const [nombre, setNombre] = useState('')
  const [pin, setPin] = useState('')
  const [mensaje, setMensaje] = useState('')

  const guardarChofer = async (e: React.FormEvent) => {
    e.preventDefault()
    setMensaje('Guardando...')

    const { error } = await supabase
      .from('choferes')
      .insert([{ nombre, pin_acceso: pin }])

    if (error) {
      setMensaje('Error: ' + error.message)
    } else {
      setMensaje('✅ Chofer guardado correctamente')
      setNombre(''); setPin('')
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md mt-10 text-black">
      <h1 className="text-xl font-bold mb-4">Registro de Repartidores</h1>
      <form onSubmit={guardarChofer} className="space-y-4">
        <input
          type="text"
          placeholder="Nombre del Chofer"
          className="w-full p-2 border rounded"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="PIN de acceso (4 cifras)"
          maxLength={4}
          className="w-full p-2 border rounded"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded font-bold hover:bg-blue-700">
          Registrar en Sistema
        </button>
      </form>
      {mensaje && <p className="mt-4 text-center font-medium">{mensaje}</p>}
    </div>
  )
}