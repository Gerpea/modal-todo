import React from 'react';

function InfoIcon(props: React.HTMLAttributes<HTMLOrSVGElement>): React.ReactElement {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
      {...props}
    >
      <title id="title">Info Icon</title>
      <path d="M7 0C3.15 0 0 3.15 0 7C0 10.85 3.15 14 7 14C10.85 14 14 10.85 14 7C14 3.15 10.85 0 7 0ZM7.7 10.5H6.3V6.3H7.7V10.5ZM7.7 4.9H6.3V3.5H7.7V4.9Z" />
    </svg>
  );
}

export default InfoIcon;
