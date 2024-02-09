import React from "react";
import { useFormContext } from "../../Context/FormContext.js";

export function ProductModal({ product, idModal }) {
  const { formData } = useFormContext();

  const validsizes = formData.sizes.filter(
    (grade) => grade.subject !== "" && grade.score !== ""
  );

  return (
    <div
      className="modal fade"
      id={idModal}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content p-4">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Escoje un Producto que deseas COmprar
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h2 className="alert alert-primary mb-0">{product}</h2>
            <h4 className="mt-4">Datos comerciales del producto:</h4>
            <p>Nombre: {formData.studentName}</p>
            <p>ID: {formData.studentID}</p>
            <hr />

            <div className="row row-cols-2">
              {validsizes.map((grade, index) => (
                <ul key={index}>
                  <h5 className="fw-bold mb-2">
                    Materia {index + 1}: {grade.subject}
                  </h5>
                  <li>
                    <p>
                      <strong>Nota:</strong> {grade.score}
                    </p>
                  </li>
                </ul>
              ))}
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
