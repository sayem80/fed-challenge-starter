import React from 'react';
// import PropTypes from 'prop-types';
import { Box, Grid, makeStyles } from '@material-ui/core';
import Item from './components/Item';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(6),
  }
}))

export default function App({ items }) {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = React.useState(undefined);

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        {items && items.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Item item={item} active={index === activeIndex} onClick={() => setActiveIndex(index)} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

App.defaultProps = {
  items: [
    {
      title: "Lake Inniscarra, Ireland—Pyramid",
      time: "30:53",
      distance: 6248,
      img: "/assets/lake-inniscarra-thumb.jpg",
      avatar: "/assets/lake-inniscarra-trainer.jpg"
    },
    {
      title: "Performance Series",
      workoutNumber: 9,
      img: "/assets/performance-series-thumb.jpg",
      avatar: "/assets/performance-series-trainer.jpg"
    },
    {
      title: "Slow Pulls and Fast Intervals",
      time: "44:13",
      distance: 9948,
      img: "/assets/slow-pulls-thumb.jpg",
      avatar: "/assets/slow-pulls-trainer.jpg"
    },
    {
      title: "20 Minutes to Toned",
      workoutNumber: 12,
      img: "/assets/20-minutes-to-toned-thumb.jpg",
      avatar: "/assets/20-minutes-to-toned-trainer.jpg"
    },
    {
      title: "Charles Race, Boston, Massachusetts",
      time: "36:22",
      distance: 8648,
      img: "/assets/charles-race-thumb.jpg",
      avatar: "/assets/charles-race-trainer.jpg"
    },
    {
      title: "Full-Body HIIT Series",
      workoutNumber: 12,
      img: "/assets/full-body-hiit-thumb.jpg",
      avatar: "/assets/full-body-hiit-trainer.jpg"
    },
    {
      title: "Kafue River, Zambia—Power Stroke Pyramid",
      time: "36:22",
      distance: 8648,
      img: "/assets/charles-race-thumb.jpg",
      avatar: "/assets/charles-race-trainer.jpg"
    },
    {
      title: "Shred & Burn Series",
      workoutNumber: 16,
      img: "/assets/shred-and-burn-thumb.jpg",
      avatar: "/assets/shred-and-burn-trainer.jpg"
    },
  ]
}
