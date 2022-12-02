import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Comments from "../Comments/Comments";
export const postStyle = {
  margin: "10px",
  borderRadius: "8px",
  padding: "0 10px",
};
const Post = (props) => {
  const { body, title } = props.post;
  return (
    <div className="post" style={postStyle}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 18 }} component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {body}
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <Comments commentsOfThisPost = {props.commentsOfThisPost} />
        <CardActions>
          <Button variant="contained" color="secondary">
            More Info
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
