
interface ILinkCommon {
  text: string;
  href: string;
  disabled?: boolean;
}

export const LinkCommon = ({ text, href}: ILinkCommon) => (
  <a href={href}>
    {text}
  </a>
);



