import { useDispatch, useSelector } from "react-redux"
import { onCloseDateModal, onOpenDateModal } from "../store/ui/uiSlice";

export const useUiStore=()=>{
    const {isDateModalOpen}=useSelector(state => state.ui);
    const dispath=useDispatch();
    const openDateModal = ()=>{
        dispath(onOpenDateModal())
    }
    const closeDateModal=()=>{
        dispath(onCloseDateModal());
    }
    return{
        //properties
        isDateModalOpen,
        //methods
        openDateModal,
        closeDateModal,
    }
}