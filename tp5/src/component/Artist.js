import React, { Component } from 'react';
import artist from '../img/artist.png';
import fbLogo from '../img/icon/fb.png';
import twitterLogo from '../img/icon/twitter.png';

export default class Artist extends Component {
  render() {
    return (
      <div class="container">
      <main class="col-lg-10 col-12">
      <header>
        <div class="name-photo">
          <aside>
            <img src={artist} alt="artist" />
          </aside>
          <div class="name">
            <h1>Luke Chesser</h1>
            <p>
              Montreal, Quebec, Canada{' '}
              <a href="https://www.facebook.com/" target="_blank">
                <img class="share" src={fbLogo} alt="facebook" />
              </a>
              <a href="https://twitter.com/" target="_blank">
                <img class="share" src={twitterLogo} alt="twitter" />
              </a>
            </p>
          </div>
        </div>
        <div class="row justify-content-between stats-links">
          <section class="row col-12 col-md-9 stats">
            <span>2 Playlists</span>
            <span>4 Reviews</span>
            <span>6 Followers</span>
            <span>13 Following</span>
          </section>
          <div class="row col-12 col-md-3 links">
            <div>
              <a href="#">Collection</a>
              <a href="#">History</a>
            </div>
          </div>
          </div>
      </header>
      </main>
      </div>
    );
  }
}