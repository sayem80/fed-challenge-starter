import React from 'react';
import clsx from 'clsx';
import { Box, Typography, Fade, withStyles } from '@material-ui/core';
import { styles } from './style';

const Item = withStyles(styles)(({ classes, item, active, ...props }) => {
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
});

export default Item;
