const Input = ({label, type="text", state, setState}) => {
  return (
    <div className="form-floating">
    <input
      type={type}
      className="form-control"
      id="floatingUser"
      placeholder={label}
      value={state}
      onChange={e => setState(e.target.value)}
    />
    <label htmlFor="floatingUser">{label}</label>
  </div>
    )
}

export default Input