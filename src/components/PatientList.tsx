import { usePatientStore } from "../store"
import PatientDetails from "./PatientDetails";

const PatientList = () => {
  const { patients } = usePatientStore();
  return (
    <div className="md:w-1/2 lg:3/5 text-center">
      { patients.length ? ( 
        <>
          <h2 className="font-black text-3xl text-center">Listado de pacientes </h2>
          <p className="text-xl mt-5 mb-1- text-center">
            Administra tus {' '}
            <span className="text-indigo-6-- font-bold">
              Pacientes y Citas
            </span>
          </p>
          { patients.map( patient => ( 
            <PatientDetails
              key={ patient.id }
              patient={ patient }
            />
          ))}
        </>
      ) : ( 
        <>
          <h2 className="font-black text-3xl text-center"> No hay pacintes </h2>
          <p className="text-xl mt-5 text-center">
            Comienza agregando pacientes { ' '}
            <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
        </>
      )}


    </div>

  )
}

export default PatientList