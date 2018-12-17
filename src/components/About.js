import React from 'react';

import Link from './Link';
import Header from './Header';
import { Box } from '../styles';

const About = () => (
  <div>
    <Header url="/" />
    <Box className="pl3 pr3 pt3 pt2-m ba bw3">
      <div className="f5 f4-l lh-copy measure tj center">
        <p>
          Inspired by <a className="link dim blue near-black" target="_blank" href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's Game of Life</a> and powered by Tone.js.
        </p>
        <Link url="/" text=">> Back" />
      </div>
    </Box>
  </div>
);

export default About;
