function toggleActive(e) {
  closeOthers();
  let panel = e.target.nextElementSibling;
  if (panel.style.maxHeight){
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

function closeOthers() {
  let items = document.querySelectorAll('.Accordion p');

  for (let item of items) {
    item.style.maxHeight = null;
  }
}
const Accordion = () => {
  return (
    <div className="Accordion">
      <div>
        <button onClick={(e) => toggleActive(e)}>Why Serbia?</button>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Amet consequuntur ea facilis illum itaque nam natus quasi quidem vero voluptatum.</p>
      </div>
      <div>
        <button onClick={(e) => toggleActive(e)}>Why Serbia?</button>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Amet consequuntur ea facilis illum itaque nam natus quasi quidem vero voluptatum.</p>
      </div>
      <div>
        <button onClick={(e) => toggleActive(e)}>Why Serbia?</button>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Amet consequuntur ea facilis illum itaque nam natus quasi quidem vero voluptatum.</p>
      </div>
    </div>
  )
};

export default Accordion;