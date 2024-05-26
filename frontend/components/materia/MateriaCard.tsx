import React from 'react';

interface CardProps {
    nombre: string;
   
}



const MateriaCard: React.FC<CardProps> = ({ nombre }) => {
    return (
        <div className="card">
            <div className="container">
                <h2>{nombre}</h2>
                <p>{nombre}</p>
            </div>
        </div>
    );
}

export default MateriaCard;
