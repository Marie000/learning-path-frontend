import auth0 from 'auth0-js';
import {browserHistory} from 'react-router';
import {AUTH_CONFIG} from './auth0-variables';
import axios from 'axios';
import Auth0Lock from 'auth0-lock';

const api = 'http://localhost:9000';

export default class Auth {

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);

    this.lock = new Auth0Lock(
      AUTH_CONFIG.clientId,
      'learning-paths.auth0.com'
    );

    this.lock.on('authenticated', this._doAuthentication.bind(this));

  }

  login() {
    this.lock.show();
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    return !!this.getToken();
  }

  setToken(idToken) {
    // Saves user token to local storage
    localStorage.setItem('id_token', idToken);
  }

  getToken() {
    // Retrieves the user token from local storage
    return localStorage.getItem('id_token');
  }

  setProfile(profile) {
    // Saves profile data to local storage
    localStorage.setItem('profile', JSON.stringify(profile));
    browserHistory.replace('/learning');

    // Triggers profile_updated event to update the UI
    //this.emit('profile_updated', profile)
  }

  getProfile() {
    // Retrieves the profile data from local storage
    const profile = localStorage.getItem('profile');
    return profile ? JSON.parse(localStorage.profile) : {};
  }

  logout() {
    // Clear user token and profile data from local storage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }

  _doAuthentication(authResult) {
    // Saves the user token
    this.setToken(authResult.accessToken)
    // navigate to the home route

    this.lock.getProfile(authResult.accessToken, (error, profile) => {
      console.log('get profile function', profile);
      if (error) {
        console.log('Error loading the Profile', error);
      } else {
        this.setProfile(profile);
        axios.post(api + '/users', {user_name:profile.nickname, Auth0Id: profile.sub});
      }
    });
  }

  setSession(authResult) {
    console.log('setSession!')
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    browserHistory.replace('/learning');
  }


  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}
