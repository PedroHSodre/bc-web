import React from "react";

export default function Employe({ data }) {
  return (
    <div role="employe">
      {data.nome} | {data.horario} | {data.status}
    </div>
  );
}
