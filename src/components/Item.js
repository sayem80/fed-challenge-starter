import React from 'react';
import clsx from 'clsx';
import { Box, Typography, Fade, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 4,
    background: "#fff",
    boxShadow: '0 1px 2px rgba(46, 49, 52, 0.4)',
    overflow: "hidden",
    position: "relative",
    transition: "box-shadow 0.3s ease"
  },
  active: {
    boxShadow: '0 7px 12px rgba(46, 49, 52, 0.3)',
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  content: {
    padding: 16,
    minHeight: 100,
  },
  title: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 16,
    color: "#2E3134"
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 4
  },
  icon: {
    width: 12,
    height: 12
  },
  infoText: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 10,
    color: "#2E3134",
    marginLeft: 4
  },
  imgBox: {
    position: "relative",
    overflow: "hidden",
    display: "flex"
  },
  workouts: {
    background: "rgba(0, 12, 40, 0.54)",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 112,
    width: "35%",
    right: 0,
    top: 0,
    height: "100%"
  },
  workoutsNumberText: {
    fontFamily: "'Open Sans', sans-serif",
    color: "#fff",
    fontWeight: 600,
    fontSize: 24
  },
  workoutsText: {
    fontFamily: "'Open Sans', sans-serif",
    color: "#fff",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 10,
    marginTop: 10,
    marginBottom: 10
  },
  workoutDetails: {
    width: 24,
    height: 24,
    cursor: "pointer"
  },
  viewDetails: {
    fontFamily: "'Open Sans', sans-serif",
    color: "#0069D2",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 14,
    position: "absolute",
    bottom: 16,
    left: 16,
    cursor: "pointer"
  }
}));

export default function Item({ item, active, ...props }) {
  const classes = useStyles();

  return (
    <Box className={active ? clsx(classes.root, classes.active) : classes.root} {...props}>
      {item &&
        <>
          <Box className={classes.imgBox}>
            <img src={item.img} alt={item.title} className={classes.img} />
            {item.workoutNumber &&
              <Box className={classes.workouts}>
                <Typography className={classes.workoutsNumberText}>{ item.workoutNumber }</Typography>
                <Typography className={classes.workoutsText}>WORKOUTS</Typography>
                <img src="/icons/workouts.png" alt="workouts Detail" className={classes.workoutDetails} />
              </Box>
            }
          </Box>
          <Box className={classes.content}>
            <Box display="flex" justifyContent="space-between">
              <Typography className={classes.title}>{ item.title }</Typography>
              <img src={item.avatar} alt="trainer" className={classes.avatar} />
            </Box>
            <Box display="flex">
              {item.time &&
                <Box display="flex" alignItems="center" mt={1}>
                  <img src="/icons/timer.png" alt="timer" className={classes.icon} />
                  <Typography className={classes.infoText}>{ item.time }</Typography>
                </Box>
              }
              {item.distance &&
                <Box display="flex" alignItems="center" mt={1} ml={1}>
                  <img src="/icons/distance.png" alt="timer" className={classes.icon} />
                  <Typography className={classes.infoText}>{ item.distance.toLocaleString() } M</Typography>
                </Box>
              }
            </Box>
          </Box>
          <Fade in={active}>
            <Typography className={classes.viewDetails}>VIEW DETAILS</Typography>
          </Fade>
        </>
      }
    </Box>
  )
};