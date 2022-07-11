import React, { ChangeEvent } from 'react';
// import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

import { Button } from './components/atoms/Button/Button';
import { ReactComponent as FavoriteIcon } from './assets/icons/favoritesIcon.svg';
import { ReactComponent as SearchIcon } from './assets/icons/searchIcon.svg';
import { ReactComponent as ThumbsDownIcon } from './assets/icons/thumbsDownIcon.svg';
import { ReactComponent as ThumbsUpIcon } from './assets/icons/thumbsUpIcon.svg';
import { ColorService } from './services/ColorService';
import { Input } from './components/atoms/Input';
import { Tabs } from './components/atoms/Tabs';

import { User } from './components/atoms/User/User';
import { ReactComponent as UserIcon } from './assets/icons/userIcon.svg';

import { TitleCommon } from './components/atoms/TitleCommon/TitleCommon';
import { ButtonCommon } from './components/atoms/ButtonCommon/ButtonCommon';
import { LinkCommon } from './components/atoms/LinkCommon/LinkCommon';

import { Footer } from './components/atoms/Footer/Footer';
// import { Container } from './components/layouts/Container/Container';
import { FormTemplate } from './components/templates/FormTemplate/FormTemplate';

function App() {
  const onClick = () => {
    console.log('click');
  };

  // const users = [
  //   { id: 0, name: 'Lucas' },
  //   { id: 1, name: 'William' },
  // ];

  const tabs = [
    { title: 'All', url: '/all' },
    { title: 'My favorites', url: '/my' },
    { title: 'Popular', url: '/popular' },
  ];

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log({ event });
  };

  const inputValues = {
    value: 'Text',
    type: 'text' as 'text',
    error: '',
    labelText: 'User name',
    placeholder: 'Placeholder',
    disabled: false,
    // onChange,
  };


  return (
    <div>
       <header className="App-header">

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a> */}

        <FormTemplate title="Sign in">
          <p>Hello</p>
          {/* <Container>
            <Footer />
          </Container> */}
        </FormTemplate>
        {/* <Container>
            <Footer />
          </Container> */}

        {/*
        <Tabs list={tabs} activeTabUrl={'/my'} />
        <Input onChange={onChange} {...inputValues} error={'Text error'} />
        <Input onChange={onChange} {...inputValues} disabled />
        <Input onChange={onChange} {...inputValues} value={''} />
        <Input onChange={onChange} {...inputValues} value={'password'} type={'password'} />
        <Button theme={'primary'} text="Button example" onClick={onClick} />
        <Button theme={'secondary'} text="Button example" onClick={onClick} />
        <Button theme={'primary'} text="Button example" onClick={onClick} disabled={true} />
        <Button theme={'delete'} text="Button example" onClick={onClick} />
        <Button
          theme={'icon'}
          text="Button example"
          onClick={onClick}
          icon={<FavoriteIconStyled />}
        />*/}

        {/*
        <p>
        <div className="App-title">
           <TitleCommon text="Sign In"/> 
        </div>        
        </p>
        <p>         
        <ButtonCommon text="menu hamburger" onClick={onClick} /> 
        </p>
        <p>         
        <Button theme={'primary'} text="menu hamburger" onClick={onClick} /> 
        </p>      
        <p>
        <div className="App-Link">
           <LinkCommon href="https://reactjs.org" text="This is Link"/> 
        </div>        
        </p>*/}

        <Button
          theme={'searchIcon'}
          text="Button Search"
          onClick={onClick}
          icon={<SearchIconStyled />}
        />
        <User
          theme={'authorized'}
          username=""
          onClick={onClick}
          isAuthorized={false}
          icon={<UserIconStyled />}
        />     
        <User
          theme={'authorized'}
          username="AM Artem Malkin"
          onClick={onClick}
          isAuthorized={true}
          icon={<UserIconStyled />}
        />                  
        <Button
          theme={'thumbsDownIcon'}
          text=""
          onClick={onClick}
          icon={<ThumbsDownIconStyled />}
        /> 
        <Button
          theme={'thumbsDownIcon'}
          text=""
          onClick={onClick}
          disabled={true}
          icon={<ThumbsDownIconStyled />}
        />     
        <Button
          theme={'thumbsUpIcon'}
          text=""
          onClick={onClick}
          icon={<ThumbsUpIconStyled />}
        /> 
        <Button
          theme={'thumbsUpIcon'}
          text=""
          onClick={onClick}
          disabled={true}
          icon={<ThumbsUpIconStyled />}
        />    



      </header>
    </div>
  )
}

const FavoriteIconStyled = styled(FavoriteIcon)`
  path {
    fill: ${ColorService.SECONDARY};
  }
`;

const SearchIconStyled = styled(SearchIcon)`
  path {
    fill: ${ColorService.PRIMARY};
  }
`;

const UserIconStyled = styled(UserIcon)`
  path {
    fill: ${ColorService.SECONDARY};
  }
`;

const ThumbsDownIconStyled = styled(ThumbsDownIcon)`
  path {
    fill: ${ColorService.SECONDARY};
  }
`;

const ThumbsUpIconStyled = styled(ThumbsUpIcon)`
  path {
    fill: ${ColorService.SECONDARY};
  }
`;


export default App;
