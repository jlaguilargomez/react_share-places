import './Input.css';

const Input = ({ id, label, type, placeholder, rows, element }) => {
  const renderElement =
    element === 'input' ? (
      <input id={id} type={type} placeholder={placeholder} />
    ) : (
      <textarea id={id} rows={rows || 3}></textarea>
    );

  return (
    <div className={`form-control`}>
      <label htmlFor={id}>{label}</label>
      {renderElement}
    </div>
  );
};

export default Input;
