
interface IButtonCommon {
  text: string;
  disabled?: boolean;
}

export const ButtonCommon = ({ text, disabled }: IButtonCommon) => (
  <button disabled={disabled}>
    {text}
  </button>
);



