import React from 'react';
import {IoMdHome} from 'react-icons/io'
import {useHistory} from 'react-router-dom'

import {PageHeader} from './styles';


export default function Header({title}) {
  const history = useHistory();

  return (
    <PageHeader>
        <h1>{title}</h1>
        <div onClick={() => {history.push('/')}}>
            <p>Home</p><IoMdHome size={20} />
        </div>
    </PageHeader>
  );
}
