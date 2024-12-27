import { addHours, differenceInSeconds } from 'date-fns';
import { useState } from 'react';
import Modal from 'react-modal';
import DatePicker,{registerLocale} from "react-datepicker";
import es from 'date-fns/locale/es'
import "react-datepicker/dist/react-datepicker.css";

registerLocale('es',es)

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export const CalendarModal = () => {

    const [isOpen,setIsOpen]=useState(true);

    const [formValues,setFormValues]=useState({
        title:"",
        notes:"",
        start:new Date(),
        end: addHours(new Date(),2),
    });

    const onInputChange=({target})=>{
        setFormValues({
            ...formValues,[target.name]:target.value
        })
    }

    const onDateChange=(event,changing)=>{
        setFormValues({
            ...formValues,
            [changing]:event
        })
    }
  
    const onCloseModal=()=>{
        setIsOpen(false)
    }
    
    const onSubmit=(event)=>{
        event.preventDefault();
        
        const difference = differenceInSeconds(formValues.end,formValues.start)

        if(isNaN(difference) || difference <=0 )return;

        if(formValues.title.length<=0)return;

        //todo{cerrar modal}
    }
    return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onCloseModal}
    style={customStyles}
    className="modal"
    overlayClassName="modal-fondo"
    closeTimeoutMS={200}
    >
        <h1> Nuevo evento </h1>
        <hr />
        <form className="container" onSubmit={onSubmit}>

            <div className="form-group mb-2">
                <label>Fecha y hora inicio</label>
                <DatePicker timeCaption="Hora" locale="es" showTimeSelect className='form-control' selected={formValues.start} onChange={(event) => onDateChange(event,"start")} 
                 dateFormat="Pp"               
                />
            </div>

            <div className="form-group mb-2">
                <label>Fecha y hora fin</label>
                <DatePicker  timeCaption="Hora" locale="es" showTimeSelect className='form-control' selected={formValues.end} onChange={(event) => onDateChange(event,"end")} 
                 dateFormat="Pp" minDate={formValues.start}
                />
            </div>

            <hr />
            <div className="form-group mb-2">
                <label>Titulo y notas</label>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Título del evento"
                    name="title"
                    autoComplete="off"
                    value={formValues.title}
                    onChange={onInputChange}
                />
                <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
            </div>

            <div className="form-group mb-2">
                <textarea 
                    type="text" 
                    className="form-control"
                    placeholder="Notas"
                    rows="5"
                    name="notes"
                    value={formValues.notes}
                    onChange={onInputChange}
                ></textarea>
                <small id="emailHelp" className="form-text text-muted">Información adicional</small>
            </div>

            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> Guardar</span>
            </button>

        </form>
    </Modal>
  )
}
