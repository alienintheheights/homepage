import React, { Component } from 'react';
import { connect } from 'react-redux'
import { closeModal } from './actions'
import { genImageFullPath } from './util'

class Modal extends Component {

    getModalStyle(isHidden) {
        return {
            display: (isHidden) ? "none" : "block",
            opacity: (isHidden) ? 0 : 75,
            zIndex: '9999'
            
        }
    }

    _onClose() {
        this.props.closeModal()
    }

    render() {
        const { modalImageId, isModalHidden } = this.props.data
        const imagePath = genImageFullPath(modalImageId || 1)
        const style = this.getModalStyle(isModalHidden)
        return (
            <div className="portfolio-modal modal fade" style={style} tabIndex="-1" role="dialog" aria-hidden={isModalHidden}>
                <div className="container success">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2">
                            <div className="modal-body">
                                <img src={imagePath} onClick={this._onClose.bind(this)} className="img-responsive img-centered" alt={modalImageId} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    data: React.PropTypes.object
}


function select(state) {
    return {
        data: state
    }
}


// Wrap the component to inject dispatch and state into it
export default connect(
    select, { closeModal }
)(Modal)