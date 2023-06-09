import React, { useRef, useState, FC, ReactNode } from 'react';
import classes from './modal.module.scss';

interface ModalProps {
  id: string;
  title: string;
  children?: ReactNode;
  closeHandler: Function;
}

const Modal = (props: ModalProps) => {
  return (
    <div
      className="modal fade"
      id={props.id}
      aria-labelledby={props.id + '_label'}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                props.closeHandler();
              }}
            ></button>
          </div>
          {props.children ? (
            <div className="modal-body">{props.children}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Modal;
