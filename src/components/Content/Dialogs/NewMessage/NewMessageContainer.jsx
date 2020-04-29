import {addMessageTextCreator, /*changeNewMessageTextCreator*/} from "../../../../redux/dialogs-reducer";
import NewMessage from "./NewMessage";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => dispatch (addMessageTextCreator(message)),
        /*changeNewMessageText: (text) => dispatch(changeNewMessageTextCreator(text))*/
    }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;