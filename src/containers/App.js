import React from 'react';
import { connect } from 'react-redux';

import MusicBox from './MusicBox';

import { PERIOD_MS } from '../../config/main.config';
import Grid from '../components/Grid';
import { STEP_GRID, START_GAME, STOP_GAME, TOGGLE_CELL, TOGGLE_CREATE_MODE, EXIT_CREATE_MODE } from '../constants';

import styled from 'styled-components';

const AppContainer = styled.div`
  margin: auto;
  max-width: 45vw;
  @media (max-width: 768px) {
    max-width: 90vw;
  }
  button {
    background: white;
    color: #111111;
    &:hover {
      background: #111111;
      color: white;
      cursor: pointer;
    }
  }
`;

const App = ({ grid, currentColumn, start, stop, toggleCell, playing, toggleCreateMode, createMode, exitCreateMode }) => {
  return (
    <AppContainer>
      <h1>Blips of Life</h1>
      <Grid exitCreateMode={exitCreateMode} grid={grid} currentColumn={currentColumn} toggleCell={toggleCell} playing={playing} toggleCreateMode={toggleCreateMode} createMode={createMode} />
      <MusicBox />
    </AppContainer>
  );
};

const mapStateToProps = state => ({
  grid: state.grid,
  playing: state.playing,
  currentColumn: state.currentColumn,
  playing: Boolean(state.interval),
  createMode: state.createMode,
});

const mapDispatchToProps = dispatch => ({
  stepGrid: () => dispatch({ type: STEP_GRID }),
  toggleCell: (x, y) => () => dispatch({ type: TOGGLE_CELL, x, y }),
  toggleCreateMode: () => dispatch({ type: TOGGLE_CREATE_MODE }),
  exitCreateMode: () => dispatch({ type: EXIT_CREATE_MODE }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
