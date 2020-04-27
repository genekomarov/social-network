import React from 'react';
//import s from '   '

class ProfileStatus extends React.Component{

    state = {
        editMode: false
    };

    activateEditMode = () => {
        console.log(this);
        this.setState({  //Асинхронная функция. Выполняется после всей синхронной работы функции
            editMode: true
        })
    };

    deactivateEditMode = () => {
        this.setState({  //Асинхронная функция. Выполняется после всей синхронной работы функции
            editMode: false
        })
    };

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} value={this.props.status} onBlur={this.deactivateEditMode}/>
                    </div>
                }
            </>
        );
    }
}

export default ProfileStatus;