function CheckFilledIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
      viewBox="0 0 15 15"
    >
      <path
        fill="#34D2CC"
        d="M7.567 14.449a6.986 6.986 0 100-13.972 6.986 6.986 0 000 13.972z"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.075"
        d="M4.405 7.914l1.807 1.807 4.516-4.517"
      ></path>
    </svg>
  );
}

export default CheckFilledIcon;
