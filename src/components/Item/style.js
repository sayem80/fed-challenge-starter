export const styles = {
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
    fontWeight: "bold",
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
    fontWeight: "bold",
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
    fontWeight: "bold",
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
    fontWeight: "bold",
    fontSize: 14,
    position: "absolute",
    bottom: 16,
    left: 16,
    cursor: "pointer"
  }
}