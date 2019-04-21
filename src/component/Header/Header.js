import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

export default function Header({ title }) {
  return (
    <nav className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{ title }</p>
    </nav>
  )
}
