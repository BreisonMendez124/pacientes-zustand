import { usePatientStore } from "../store"
import { Patient } from "../types"
import PatientDetailsItem from "./PatientDetailsItem"

type PatientDetailsProps = { 
    patient: Patient
}

const PatientDetails = ( { patient } : PatientDetailsProps ) => {
  const deletePatient = usePatientStore( ( state ) => state.deletePatient )
  const getPatientById = usePatientStore( ( state ) => state.getPatientById )
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatientDetailsItem label="ID" data={ patient.id } />
        <PatientDetailsItem label="Nombre" data={ patient.name } />
        <PatientDetailsItem label="Correo" data={ patient.email } />
        <PatientDetailsItem label="Propietario" data={ patient.caretaker } />
        <PatientDetailsItem label="Fecha" data={ patient.date.toString() } />
        <PatientDetailsItem label="Sintomas" data={ patient.symptoms } />
        <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={ ( ) => getPatientById( patient.id )}
          >
            Editar
          </button>
          <button
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={ () => deletePatient( patient.id ) }
          >
            Eliminar
          </button>

        </div>
    </div>
  )
}

export default PatientDetails