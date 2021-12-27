import React from "react";
import PauseButton from '../../assets/icon/pause-button-svgrepo-com.svg';
import PlayButton from '../../assets/icon/play-button-svgrepo-com.svg';
import {action, actions } from '@storybook/addon-actions';

export default function PlayPauseButtons({}) {
  return (
    <div className="play-pause-btns">
        <button onClick={action('pause handler')}><img src={PauseButton} alt={"Pause button"}/></button>
        <button {...actions('onClick', 'onMouseOver')}><img src={PlayButton} alt={"Play button"}/></button>
    </div>
  );
}