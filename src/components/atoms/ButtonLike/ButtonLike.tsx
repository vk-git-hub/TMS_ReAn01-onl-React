import { ReactNode } from 'react';
import styled from 'styled-components';

import { getFontFamily } from '../../../services';
import { ColorService } from '../../../services/ColorService';
// import { default as logo } from '../../../assets/icons/favorite.svg';
// import { ReactComponent as Logo } from './favoritesIcon.svg';

const getTheme = (theme: | 'thumbsDownIcon' | 'thumbsUpIcon'): IButtonLikeStyled => {
 
  if (theme === 'thumbsDownIcon') {
    return {
      bgDefault: ColorService.LIGHT,
      bgHover: ColorService.RED,
      colorBorderDefault: ColorService.LIGHT,
      colorBorderHover: ColorService.RED,
      bgDisabled: ColorService.LIGHT,
      color: ColorService.SECONDARY,
      colorHover: ColorService.WHITE,   
    };
  }  

  if (theme === 'thumbsUpIcon') {
    return {
      bgDefault: ColorService.LIGHT,
      bgHover: ColorService.PRIMARY_2,
      colorBorderDefault: ColorService.LIGHT,
      colorBorderHover: ColorService.PRIMARY_2,
      bgDisabled: ColorService.LIGHT,
      color: ColorService.SECONDARY,
      colorHover: ColorService.WHITE,   
    };
  }    

  return {
    bgDefault: ColorService.PRIMARY,
    bgHover: ColorService.PRIMARY_2,
    colorBorderDefault: ColorService.PRIMARY,
    colorBorderHover: ColorService.PRIMARY_2,
    bgDisabled: ColorService.LIGHT,
    color: ColorService.WHITE,
    colorHover: ColorService.WHITE,
  };
};

interface IButtonLikeStyled {
  bgDefault: string;
  bgHover: string;
  colorBorderDefault: string;
  colorBorderHover: string;
  bgDisabled: string;
  color: string;
  colorHover: string;
}

interface IButtonLike {
  text: string;
  disabled?: boolean;
  onClick: () => void;
  icon?: ReactNode;
  theme: 'thumbsDownIcon' | 'thumbsUpIcon';
}

export const ButtonLike = ({ text, disabled, onClick, icon, theme }: IButtonLike) => {
  const selectedTheme = getTheme(theme);
  return (
    <ButtonLikeStyled onClick={onClick} disabled={disabled} {...selectedTheme}>
      {icon}
      {text}
    </ButtonLikeStyled>
  );
};

const ButtonLikeStyled = styled.button<IButtonLikeStyled>`
  padding: 16px 32px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  background: ${({ bgDefault }) => bgDefault};
  border: ${({ colorBorderDefault }) => `1px solid  ${colorBorderDefault}`};
  color: ${({ color }) => color};

  font-weight: 500;
  font-size: 25px;
  line-height: 29px;
  letter-spacing: 0.05em;

  font-family: ${getFontFamily()};

  svg {
    margin-right: 10px;
  }

  :disabled {
    background: ${({ bgDisabled }) => bgDisabled};
    border: ${({ bgDisabled }) => `1px solid  ${bgDisabled}`};
    pointer-events: none;
    color: ${ColorService.GRAY};

    svg path {
      fill: ${ColorService.GRAY};
    }
  }

  :hover {
    background: ${({ bgHover }) => bgHover};
    border: ${({ colorBorderHover }) => `1px solid  ${colorBorderHover}`};
    color: ${({ colorHover }) => colorHover};
    cursor: pointer;

    svg path {
      fill: ${({ colorHover }) => colorHover};
    }
  }
`;
