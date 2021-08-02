import styled from 'styled-components';

const StyledThemeSwitcher = styled.div`

  label {
    pointer-events: none;
  }
  label .input {
    display: none;
  }
  label .input:checked + .toggle-wrapper > .selector {
    left: 50%;
    background-color: #424242;
  }
  label .toggle-wrapper {
    position: relative;
    width: 70px;
    height: 30px;
    background-color: #eaeaea;
    border-radius: 999px;
    margin: auto;
    cursor: pointer;
    pointer-events: all;
    box-shadow: 0 8px 14px 0 rgba(215, 60, 18, 0.12);
  }
  label .toggle-wrapper .selector {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    background-color: #9E9E9E;
    transition: left 0.25s ease;
    border-radius: 50%;
  }
  label .notification {
    font-size: 20px;
    width: 100%;
  }
  label .notification .selected:before {
    content: "No";
    font-size: 20px;
    border-bottom: 2px solid;
  }
`;

export default StyledThemeSwitcher;
