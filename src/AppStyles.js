import css from 'styled-jsx/css'
const styles = css`
.app {
  text-align: center;
}

#results {
  font-size: 14px;
  font-weight: bold;
  border: 1px solid #ddd;
  padding: 15px;
  text-align: left;
  min-height: 100px;
}

.recognition {position: relative;}

.tools {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
}

.footer a {
  cursor: pointer;
  color: black;
  text-decoration: none;
}

.training-mode {
  margin: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.training-mode .button { cursor: "pointer"; }
`

export default styles