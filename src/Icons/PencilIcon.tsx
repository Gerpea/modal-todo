import React from 'react';

function PencilIcon(props: React.HTMLAttributes<HTMLOrSVGElement>): React.ReactElement {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
      {...props}
    >
      <title id="title">Pencil Icon</title>
      <path d="M0.0618119 10.9008C-0.0626499 11.1977 0.00471425 11.5403 0.232315 11.7679C0.459916 11.9955 0.802501 12.0628 1.09932 11.9383L4.00028 10.7219L1.2782 7.99989L0.0618119 10.9008Z" />
      <path d="M11.768 2.19383L9.80627 0.232137C9.49674 -0.0773993 8.99486 -0.0773993 8.68529 0.232137L2.00502 6.91253C2.00332 6.91419 2.0019 6.91605 2.00024 6.91774L5.08245 9.99996C5.08415 9.9983 5.086 9.99688 5.08766 9.99522L11.768 3.31486C12.0775 3.00529 12.0775 2.50341 11.768 2.19383Z" />
    </svg>
  );
}

export default PencilIcon;
