import styled from "styled-components";
import {Hashtag} from 'styled-icons/heroicons-outline';
import {PersonAdd, Settings} from 'styled-icons/material';

export const Container = styled.div`
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
     cursor: pointer;
     padding: 5px 3px;
     border-radius: 5px;
     background-color: transparent;
     transition: background-color 0.2s;

     >div{
         display: flex;
         align-items: center;
     }

     >div span{
         font-size: 15px;
         color: var(--senary);
         margin-left: 5px;
     }

     &:hover, &.active{
         background-color: var(--quinary);
         > div span {
             color: var(--white);
         }

         > .icons svg {
             display: flex;

             &:nth-child(1) {  
                 margin-right: 4px;
             }
         }         
     }

  > .icons svg{
      display: none;
  }
`;

export const HashtagIcon = styled(Hashtag)`
    width: 20px;
    height: 20px;
    color: var(--symbol);
`;

export const SettingsIcon = styled(PersonAdd)`
    width: 15px;
    height: 15px;
    color: var(--symbol);
    cursor: pointer;
    transition: color .2s;

    &:hover{
        color: var(--white);
    }
`;

export const InviteIcon = styled(Settings)`
   width: 15px;
    height: 15px;
    color: var(--symbol);
    cursor: pointer;
    transition: color .2s;

    &:hover{
        color: var(--white);
    }
`;
