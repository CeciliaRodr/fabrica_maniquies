import { useState, useEffect } from 'react';

function App() {
  const [maniquies, setManiquies] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [ventas, setVentas] = useState([]);

  const [idCabeza, setIdCabeza] = useState('');
  const [idTorso, setIdTorso] = useState('');
  const [idBrazoIzq, setIdBrazoIzq] = useState('');
  const [idBrazoDer, setIdBrazoDer] = useState('');
  const [idPiernaIzq, setIdPiernaIzq] = useState('');
  const [idPiernaDer, setIdPiernaDer] = useState('');
  const [stock, setStock] = useState('');
  const [precio, setPrecio] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/maniquies')
      .then(res => res.json())
      .then(datos => setManiquies(datos));

    fetch('http://localhost:5000/clientes')
      .then(res => res.json())
      .then(datos => setClientes(datos));

    fetch('http://localhost:5000/ventas')
      .then(res => res.json())
      .then(datos => setVentas(datos));
  }, []);

  const handleGuardarManiqui = (e) => {
    e.preventDefault();

    const nuevoManiqui = {
      id_cabeza: Number(idCabeza),
      id_torso: Number(idTorso),
      id_brazo_izq: Number(idBrazoIzq),
      id_brazo_der: Number(idBrazoDer),
      id_pierna_izq: Number(idPiernaIzq),
      id_pierna_der: Number(idPiernaDer),
      stock: Number(stock),
      precio: Number(precio)
    };

    fetch('http://localhost:5000/maniquies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoManiqui)
    })
      .then(res => res.json())
      .then(maniquiCreado => {
        setManiquies([...maniquies, maniquiCreado]);
        
        setIdCabeza(''); setIdTorso(''); setIdBrazoIzq(''); setIdBrazoDer('');
        setIdPiernaIzq(''); setIdPiernaDer(''); setStock(''); setPrecio('');
      })
      .catch(err => console.error("Error al crear:", err));
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    borderLeft: '5px solid #6282a1'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box'
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', backgroundColor: '#e4e3a9', minHeight: '100vh', color: '#333' }}>
      
      <header style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h1 style={{ color: '#2b4b6b', margin: '0 0 10px 0', fontSize: '2.5rem' }}>Panel de Control</h1>
        <p style={{ color: '#555', margin: 0, fontWeight: 'bold' }}> Fábrica de Maniquíes</p>
      </header>

      <section style={{ backgroundColor: '#fcfcf4', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
        <h2 style={{ color: '#2b4b6b', marginTop: 0, borderBottom: '2px solid #6282a1', paddingBottom: '10px' }}>
          Armar Nuevo Maniquí
        </h2>
        <form onSubmit={handleGuardarManiqui} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '15px' }}>
          <div>
            <label>ID Cabeza:</label>
            <input type="number" value={idCabeza} onChange={e => setIdCabeza(e.target.value)} required style={inputStyle} />
            
            <label>ID Torso:</label>
            <input type="number" value={idTorso} onChange={e => setIdTorso(e.target.value)} required style={inputStyle} />
          </div>
          <div>
            <label>ID Brazo Izquierdo:</label>
            <input type="number" value={idBrazoIzq} onChange={e => setIdBrazoIzq(e.target.value)} required style={inputStyle} />
            
            <label>ID Brazo Derecho:</label>
            <input type="number" value={idBrazoDer} onChange={e => setIdBrazoDer(e.target.value)} required style={inputStyle} />
          </div>
          <div>
            <label>ID Pierna Izquierda:</label>
            <input type="number" value={idPiernaIzq} onChange={e => setIdPiernaIzq(e.target.value)} required style={inputStyle} />
            
            <label>ID Pierna Derecha:</label>
            <input type="number" value={idPiernaDer} onChange={e => setIdPiernaDer(e.target.value)} required style={inputStyle} />
          </div>
          <div>
            <label>Precio ($):</label>
            <input type="number" step="0.01" value={precio} onChange={e => setPrecio(e.target.value)} required style={inputStyle} />
            
            <label>Stock Inicial:</label>
            <input type="number" value={stock} onChange={e => setStock(e.target.value)} required style={inputStyle} />
            
            <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#2b4b6b', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginTop: '14px' }}>
              Guardar Maniquí
            </button>
          </div>
        </form>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', alignItems: 'start' }}>
        
        <section style={{ backgroundColor: '#fcfcf4', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#2b4b6b', marginTop: 0, borderBottom: '2px solid #6282a1', paddingBottom: '10px' }}>
            Maniquíes en Stock
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '15px' }}>
            {maniquies.map((m) => (
              <div key={m.id} style={cardStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontWeight: 'bold', color: '#2b4b6b' }}>Maniquí #{m.id}</span>
                  <span style={{ backgroundColor: '#e4e3a9', color: '#2b4b6b', padding: '2px 6px', borderRadius: '4px', fontSize: '0.85em', fontWeight: 'bold' }}>Stock: {m.stock} u.</span>
                </div>
                <p style={{ margin: '5px 0', fontSize: '1.1rem', fontWeight: '500', color: '#1e972f' }}>
                  ${m.precio.toFixed(2)}
                </p>
                <div style={{ fontSize: '0.85rem', color: '#555', backgroundColor: '#f0f0f0', padding: '8px', borderRadius: '4px', marginTop: '8px' }}>
                  <strong>Componentes:</strong>
                  <ul style={{ margin: '5px 0 0 0', paddingLeft: '15px', color: '#555' }}>
                    <li>Cabeza: #{m.id_cabeza} | Torso: #{m.id_torso}</li>
                    <li>Brazos: Izq #{m.id_brazo_izq} / Der #{m.id_brazo_der}</li>
                    <li>Piernas: Izq #{m.id_pierna_izq} / Der #{m.id_pierna_der}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ backgroundColor: '#fcfcf4', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#2b4b6b', marginTop: 0, borderBottom: '2px solid #6282a1', paddingBottom: '10px' }}>
           Clientes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '15px' }}>
            {clientes.map((c) => (
              <div key={c.id} style={{ ...cardStyle, borderLeftColor: '#2b4b6b' }}>
                <strong style={{ fontSize: '1.1rem', color: '#2b4b6b', display: 'block', marginBottom: '5px' }}>
                  {c.nombre}
                </strong>
                <p style={{ margin: '3px 0', fontSize: '0.9rem', color: '#555' }}> <strong>DNI:</strong> {c.id}</p>
                <p style={{ margin: '3px 0', fontSize: '0.9rem', color: '#555' }}> <strong>Tel:</strong> {c.telefono}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ backgroundColor: '#fcfcf4', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#2b4b6b', marginTop: 0, borderBottom: '2px solid #6282a1', paddingBottom: '10px' }}>
             Registro de Ventas
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '15px' }}>
            {ventas.map((v) => (
              <div key={v.id} style={{ ...cardStyle, borderLeftColor: '#1e972f', backgroundColor: '#f9fff9' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span style={{ fontWeight: 'bold', color: '#2b4b6b' }}>Venta #{v.id}</span>
                  <span style={{ fontSize: '0.85rem', color: '#777' }}> {v.fecha}</span>
                </div>
                <p style={{ margin: '4px 0', fontSize: '0.9rem' }}> <strong>Cliente DNI:</strong> {v.dni_cliente}</p>
                <p style={{ margin: '4px 0', fontSize: '0.9rem' }}> <strong>Maniquí ID:</strong> {v.id_maniqui}</p>
                <p style={{ margin: '4px 0', fontSize: '0.9rem', fontWeight: 'bold', color: '#2b4b6b' }}>
                  Cantidad: {v.cantidad} u.
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
export default App;