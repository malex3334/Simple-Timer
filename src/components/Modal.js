import React from 'react'

export default function Modal(props) {
  
  return (
    <div className='modal-container' style={{position: 'absolute',background: 'rgba(0,0,0,0.5)',width:'75%', height:'50%', top:'10%', backdropFilter:'blur(8px)'}} >
      <div className="modal-nav" style={{textAlign:'end', paddingRight:'10px'}}>X</div>
      <div className="modal-header">{props.children} </div>
      <div className="modal-body"></div>
    </div>
  )
}