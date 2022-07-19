
interface ILinkCommon {
  text: string;
  text2?: string;
  href: string;
  disabled?: boolean;
}

export const LinkCommon = ({ text, text2, href}: ILinkCommon) => (
  <a href={href}>
    {text} {text2}
  </a>
);



