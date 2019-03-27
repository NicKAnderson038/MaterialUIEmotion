// comment jss injects styles at the bottom of <head>
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Button from "@material-ui/core/Button";

const root = css`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;

console.log("root!", root);

// We just assign them the Button's className attribute
const CommonButton = () => {
  return (
    <div className="test-btn">
      <Button
        css="foo"
        style={{ color: "white", background: "blue", marginRight: "4px" }}
      >
        Material-UI
      </Button>
      <Button css={root}>Emotion</Button>
    </div>
  );
};

export default CommonButton;
