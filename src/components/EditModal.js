import React from 'react';

const EditModal = ({open, modalTitle, children, onClose}) => {

    const handleClose = (e) => {
        if(e.target.className === 'modalContainer'){
          onClose()
        }
        return null
      }

      
      if(open) {
        return (
          <div className='modalContainer' onClick={handleClose}>
            <div>
              <div className='modalTitleAndButtonContainer '>
                <h2>{modalTitle}</h2>
                <button className='btn' onClick={onClose}>Close</button>
              </div>
              {children}
            </div>
          </div>
        )
      }
      return null
    }
  

export default EditModal;