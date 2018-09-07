import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './HeaderMenu.scss';

export default class HeaderMenu extends Component {

  render() {
    return (
      <nav className="head">
        <div className="head__caption">ToDoList:</div>
        <ul className="head__menu">
          <li className="menu-item"><Link to='/'>О приложении</Link></li>
          <li className="menu-item"><Link to='/list'>Список ToDo</Link></li>
          <li className="menu-item"><Link to='/add'>Добавить задачу</Link></li>
        </ul>
      </nav>
    );
  }
}
