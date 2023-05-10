import { Button, ButtonGroup } from "@mui/material";
// ButtonContainer should have its own css styling instead of being mixed with the main code.

export default function ButtonContainer({ onButton, onClear }) {
  return (
    <>
      <div className="btn-container">
        <div className="numeric-btn-container">
          {/* ButtonGroup is repeated multiple times I would recommend a
           mapping function that loops over an array of buttons, 
           to limit repeating yourself */}
          <ButtonGroup
            variant="contained"
            color="primary"
            className="button-group"
            size="large"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => onButton("1")}>1</Button>
            <Button onClick={() => onButton("2")}>2</Button>
            <Button onClick={() => onButton("3")}>3</Button>
          </ButtonGroup>
          <ButtonGroup
            variant="contained"
            color="primary"
            className="button-group"
            size="large"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => onButton("4")}>4</Button>
            <Button onClick={() => onButton("5")}>5</Button>
            <Button onClick={() => onButton("6")}>6</Button>
          </ButtonGroup>
          <ButtonGroup
            variant="contained"
            color="primary"
            className="button-group"
            size="large"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => onButton("7")}>7</Button>
            <Button onClick={() => onButton("8")}>8</Button>
            <Button onClick={() => onButton("9")}>9</Button>
          </ButtonGroup>
          <ButtonGroup
            variant="contained"
            color="primary"
            className="button-group"
            size="large"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => onButton("0")}>0</Button>
            <Button onClick={() => onButton(".")}>.</Button>
            <Button color="info" onClick={() => onButton("=")}>
              =
            </Button>
          </ButtonGroup>
        </div>
        <ButtonGroup
          variant="contained"
          color="secondary"
          orientation="vertical"
          size="large"
          className="button-group"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => onButton("+")}>+</Button>
          <Button onClick={() => onButton("-")}>-</Button>
          <Button onClick={() => onButton("*")}>*</Button>
          <Button onClick={() => onButton("/")}>/</Button>
        </ButtonGroup>
      </div>
      <div className="calculator-controls">
        {/* on function on button Delete should be removed or add a function */}
        <Button variant="contained" color="warning">
          Delete
        </Button>
        <Button variant="contained" color="error" onClick={onClear}>
          Clear history
        </Button>
      </div>
    </>
  );
}
