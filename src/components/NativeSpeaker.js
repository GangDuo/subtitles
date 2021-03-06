import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { VolumeUpSign } from './app-icons';
import {Grid, Slider, Typography, FormControl, Select, InputLabel, MenuItem,
   OutlinedInput, InputAdornment, IconButton } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: "48px",
    width: "48px",
    borderRadius: "50%",
    color: "#fff",
    backgroundColor: "#1976d2",
    border: 0,
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#1976d2",
    }
  },
  container: {
    margin: "0 auto",
    width: "99%",
  }
});

const NativeSpeaker = React.forwardRef(function(props, ref) {
  const classes = useStyles();
  const {
    onChangedSentence, onChangeVoice, onSpeak,
    sentence, selectedVoice, voices,
    rate, onChangedRate,
    volume, onChangedVolume
  } = props

  const handleSpeak = _ => {
    onSpeak && onSpeak(sentence)
    const uttr = new SpeechSynthesisUtterance(sentence)
    uttr.voice = selectedVoice
    uttr.lang = selectedVoice.lang.replace('_', '-')// for Android
    if(rate && (rate >= 0.1 && rate <= 10)) {
      uttr.rate = rate
    }
    if(volume && (volume >= 0 && volume <= 1)) {
      uttr.volume = volume
    }
    speechSynthesis.speak(uttr)
  }

  return (
    <div>
      <FormControl required fullWidth variant="outlined">
        <InputLabel htmlFor="outlined-adornment-sentence">台詞</InputLabel>
        <OutlinedInput
          inputRef={ref}
          id="outlined-adornment-sentence"
          type='text'
          labelWidth={50}
          value={sentence}
          onChange={onChangedSentence}
          endAdornment={
            <InputAdornment position="end">
              <IconButton focusVisibleClassName={"a"} classes={{root: classes.root}} onClick={handleSpeak} size="small"><VolumeUpSign /></IconButton>
            </InputAdornment>
          }
          
        />
      </FormControl>
      {/*
      <button onClick={_ => speechSynthesis.pause()}>一時停止</button>
      <button onClick={_ => speechSynthesis.resume()}>再開</button>
      */}

      <Grid container spacing={2} alignItems="center" classes={{root: classes.container}}>
        <Grid item>
          <Typography id="input-slider" gutterBottom>速度</Typography>
        </Grid>
        <Grid item xs>
          <Slider min={0.1} max={10.0} step={0.1} value={rate}
                  onChange={onChangedRate}
                  valueLabelDisplay="auto"
                  aria-labelledby="input-slider" />
        </Grid>
        <Grid item><Typography>{rate}</Typography></Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center" classes={{root: classes.container}}>
        <Grid item>
          <Typography id="volume-slider" gutterBottom>音量</Typography>
        </Grid>
        <Grid item xs>
          <Slider min={0} max={1} step={0.1} value={volume}
                  onChange={onChangedVolume}
                  valueLabelDisplay="auto"
                  aria-labelledby="volume-slider" />
        </Grid>
        <Grid item><Typography>{volume}</Typography></Grid>
      </Grid>

      <FormControl>
        <InputLabel shrink id="selectVoicesLabel">
          言語
        </InputLabel>
        <Select
          labelId="selectVoicesLabel"
          value={selectedVoice.name}
          onChange={onChangeVoice}
          displayEmpty
        >
        {
          voices
          .map((voice, i) => {
            return (<MenuItem key={i} value={voice.name}>{`${voice.name} (${voice.lang})`}</MenuItem>)
          })            
        }
        </Select>
      </FormControl>
    </div>
  )
})

export default NativeSpeaker;