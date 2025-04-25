function ChildComponent(props) {
  return (
    <div className="parent">
      {/* this is already an element with its props baked in */}
      <p>{props.text}</p>
    </div>
  )
}

export default ChildComponent;