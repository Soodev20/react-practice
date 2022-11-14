type LabelProps = {
  label: string,
  isChecked: boolean,
  clickHandler: () => void,
}

function CheckLabel({ label, isChecked, clickHandler }: LabelProps) {
  return (
    <label>
      <input type="checkbox" id={label} checked={isChecked} onChange={clickHandler} />
      {label}
    </label>
  );
}

export default CheckLabel;