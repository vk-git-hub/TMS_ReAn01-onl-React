import { ReactNode } from 'react';
import styled from 'styled-components';

import { getFontFamily } from '../../../services';
import { ColorService } from '../../../services/ColorService';

const getTheme = (theme: 'authorized'): IUserStyled => {
  if (theme === 'authorized') {
    return {
      bgDefault: ColorService.PRIMARY,
      bgHover: ColorService.PRIMARY_2,
      colorBorderDefault: ColorService.PRIMARY,
      colorBorderHover: ColorService.PRIMARY_2,
      bgDisabled: ColorService.LIGHT,
      color: ColorService.WHITE,
      colorHover: ColorService.WHITE,
    };
  }

  return {
    bgDefault: ColorService.LIGHT,
    bgHover: ColorService.PRIMARY_2,
    colorBorderDefault: ColorService.LIGHT,
    colorBorderHover: ColorService.PRIMARY_2,
    bgDisabled: ColorService.LIGHT,
    color: ColorService.SECONDARY,
    colorHover: ColorService.WHITE,
  };  


};

interface IUserStyled {
  bgDefault: string;
  bgHover: string;
  colorBorderDefault: string;
  colorBorderHover: string;
  bgDisabled: string;
  color: string;
  colorHover: string;
}

interface IUser {
  username: string;
  isAuthorized: boolean;
  onClick: () => void;
  icon?: ReactNode;
  theme: 'authorized';
}

export const User = ({ username, isAuthorized, onClick, icon, theme }: IUser) => {
  const selectedTheme = getTheme(theme);
  return (
    <UserStyled onClick={onClick} {...selectedTheme}>
      {!isAuthorized ? <p>{icon}</p> : <p>{username}</p>}     
    </UserStyled>
  );
};

const UserStyled = styled.button<IUserStyled>`
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

  :isAuthorized {
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
