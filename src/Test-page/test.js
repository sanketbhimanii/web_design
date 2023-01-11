import React from 'react';
import '../Test-page/test.css';

function test() {
  return (
    <div id="nav">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="#">Menu 1</a>
          <ul>
            <li><a href="#">Link_1</a></li>
            <li><a href="#">Link_2</a></li>
            <li><a href="#">Link_3</a></li>
            <li><a href="#">Submenu</a>
              <ul>
                <li><a href="#">Link1</a></li>
                <li><a href="#">Link2</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="#">Link 1</a></li>
        <li><a  href="#">Menu 2</a>
          <ul>
            <li><a href="#">Link</a></li>
            <li><a href="#">Submenu1</a>
              <ul>
                <li><a href="#">Link1</a></li>
                <li><a href="#">Link2</a></li>
              </ul>
            </li>
            <li><a href="#">Link2</a></li>
          </ul>
        </li>
        <li><a href="#">Link 2</a></li>
      </ul>
    </div>
  )
}

export default test