import { ReactNode, ChangeEvent, useState, useEffect } from 'react';
import { useSearchParams, useParams, useLocation } from 'react-router-dom';

import styled from 'styled-components';

import { Button } from '../../atoms/Button/Button';
import { ButtonLike } from '../../atoms/ButtonLike/ButtonLike';
import { ReactComponent as ThumbsDownIcon } from '../../../assets/icons/thumbsDownIcon.svg';
import { ReactComponent as ThumbsUpIcon } from '../../../assets/icons/thumbsUpIcon.svg';

import { ColorService } from '../../../services/ColorService';

interface IPost {
  author: number;
  date: string;
  id: number;
  image: string;
  lesson_num: number;
  text: string;
  title: string;
}

export const PostPage = () => {

  const onClick = () => {
    console.log('click');
  };

  // const [sendedUser, setSendedUser] = useState(false);

  const [post, setPost] = useState<IPost>();

  const params = useParams();

  useEffect(() => {
    const id = params?.postID;
    if (id) {
      fetch(`https://studapi.teachmeskills.by/blog/posts/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setPost(data);
        });
    }
  }, [params?.postID]);


  // console.log(posts);
  return (
    // <FormTemplate title="Sign in">
    <>
      Posts
      {/*
      <List>
        <Li>
          {post?.date} - {post?.title}
        </Li>
      </List>
       */} 
      <div className="row">
         <div className="col" key={post?.id}>
           <img src={post?.image} />
           <p>{post?.date} - {post?.title}</p>
           <p>{post?.author} - {post?.text}</p>
         </div>    
       </div>      

      <ButtonLike
          theme={'thumbsDownIcon'}
          text=""
          onClick={onClick}
          icon={<ThumbsDownIconStyled />}
        /> 
 
        <ButtonLike
          theme={'thumbsUpIcon'}
          text=""
          onClick={onClick}
          icon={<ThumbsUpIconStyled />}
        /> 
    </>
    // </FormTemplate>
  );
};

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const List = styled.ul``;

const Li = styled.li``;


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