import React from 'react';
import BotonAnimado from './BotonAnimado';
import AnimatedButton from './AnimatedButton';


const seccionesServicios = [
    "Consultas",
    "Asesoría",
    "Representación",
    "Mediación"
];
const PageHome: React.FC = () => {
    return (
        <>

            <section className="bg-white vh-100 mt-5">

                <div className="w-50 mx-auto d-flex justify-content-between pt-5">
                    {seccionesServicios.map((servicio, index) => (
                        <AnimatedButton key={index} conts={servicio} />
                    ))}
                </div>

            </section>

        </>
    );
};

export default PageHome;