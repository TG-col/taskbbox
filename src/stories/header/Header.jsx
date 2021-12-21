import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button';
import './header.css';

import imageFile from './logo_colmobil.png';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'img',
};

const image = {
  src: imageFile,
  alt: 'my image',
};

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
    <header>
      <div className="wrapper">
        <div>
          {user ? (
              <Button size="small" onClick={onLogout} label="Log out" />
          ) : (
              <>
                <Button size="small" onClick={onLogin} label="Log in" />
                <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
              </>
          )}
        </div>
        <h1>כלמוביל - עמוד הבית</h1>
        <div>
          <img className={"logo"} src={image.src} alt={image.alt} />
        </div>
      </div>
    </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
