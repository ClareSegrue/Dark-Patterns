import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Accordion.css';

class AccordionSection extends React.Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      <div className="dropdown"
        style={{
          background: isOpen ? 'rgb(255,255,255)' : 'rgb(255,255,255)',
          padding: '5px 10px',
        }}
      >
        <div onClick={onClick} style={{ cursor: 'pointer' }}>
          {label}
          <div style={{ float: 'right' }}>
            {!isOpen && <span>&#9650;</span>}
            {isOpen && <span>&#9660;</span>}
          </div>
        </div>
        {isOpen && (
          <div className="dropdown-container">
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;