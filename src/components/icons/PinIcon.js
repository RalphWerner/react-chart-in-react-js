import React from "react";
class PinIcon extends React.Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        {...this.props}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M18 3v2h-1v6l2 3v2h-6v7h-2v-7H5v-2l2-3V5H6V3h12zM9 5v6.606L7.404 14h9.192L15 11.606V5H9z" />
      </svg>
    );
  }
}
export default PinIcon;
