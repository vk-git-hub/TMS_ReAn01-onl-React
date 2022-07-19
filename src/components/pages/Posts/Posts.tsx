import { render } from '@testing-library/react';
import { ReactNode, ChangeEvent, useState, useEffect } from 'react';

import styled from 'styled-components';

import { LinkCommon } from '../../atoms/LinkCommon/LinkCommon';

interface IPost {
  author: number;
  date: string;
  id: number;
  image: string;
  lesson_num: number;
  text: string;
  title: string;
}

interface IPostsInfo {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPost[];
}

export const PostsPage = () => {
  // const [sendedUser, setSendedUser] = useState(false);

  const [posts, setPosts] = useState<IPostsInfo>();

  useEffect(() => {
    console.log('useEffect');
    fetch('https://studapi.teachmeskills.by/blog/posts/?limit=20')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);



  // console.log(posts);
  return (
  // <FormTemplate title="Sign in">
  <>
    Posts   
      {posts?.results?.map((item, index) => (
       <div className="row">
         <div className="col" key={item.id}>
           <img src={item.image} />
           <p>{item.date} - {item.title}</p>
           <p>{item.author} - {item.text}</p>
      
           <div className="App-Link">
           <LinkCommon href={`/posts/${item.id}`} text={item.date} text2={item.title} /> 
           </div>   
              </div>    
       </div>      
      ))}   
  </>
  // </FormTemplate>
);

/*
  // console.log(posts);
  return (
    // <FormTemplate title="Sign in">
    <>
      Posts
      <List>
        {posts?.results?.map(({ date, title, id }) => (
          <Li key={id}>
            {date} - {title}
          </Li>
        ))}
      </List>
    </>
    // </FormTemplate>
  );
*/
};

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const List = styled.ul``;

const Li = styled.li``;
