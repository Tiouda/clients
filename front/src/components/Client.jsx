import React from "react";

// Le composant fils (client) reçoit les props du composant parent (Liste)
// On recoit les diffrentes props sous forme d'objet json
const Client = ({ client, id, type }) => {
  return (
    <div className="card w-25 m-3">
      <div className="card-body">
        <h5 className="card-title">
          {client.prenom} {client.nom}
        </h5>
        <p className="card-text">
          {client.societe} - {client.ca}
        </p>
        <Link to={`/clients/${client.id}`} className="btn btn-primary">
          Voir
        </Link>
        <a href="#" className="btn btn-primary">
          Voir
        </a>
      </div>
    </div>
  );
};

export default Client;
