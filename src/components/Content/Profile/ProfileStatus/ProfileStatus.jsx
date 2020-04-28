import React from 'react';
//import s from '   '

class ProfileStatus extends React.Component{

    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        console.log(this);
        this.setState({  //Асинхронная функция. Выполняется после всей синхронной работы функции
            editMode: true,
            status: this.props.status
        })
    };

    deactivateEditMode = () => {
        this.setState({  //Асинхронная функция. Выполняется после всей синхронной работы функции
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e) => {
          this.setState({
              status: e.currentTarget.value
          });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    };

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status} onBlur={this.deactivateEditMode}/>
                    </div>
                }
            </>
        );
    }
}

export default ProfileStatus;