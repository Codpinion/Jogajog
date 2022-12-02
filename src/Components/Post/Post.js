import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Comments from "../Comments/Comments";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import { nameStyle } from "../Comment/Comment";
export const postStyle = {
  margin: "10px",
  borderRadius: "8px",
  padding: "0 10px",
};
const Post = (props) => {
  const { id, body, title, avatar } = props.post;
  const postUrl = `post/${id}`;
  const navigation = useNavigate();
  const handleNavigate = () => {
    navigation(postUrl);
  };
  return (
    <div className="post" style={postStyle}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Stack direction="row" spacing={2}>
            <Avatar src={avatar} />
            <Typography style={nameStyle} sx={{ fontSize: 18 }} component="div">
              {title}
            </Typography>
          </Stack>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {body}
          </Typography>
          <Divider textAlign="left">
            <h4>Comments</h4>
          </Divider>
          <Comments commentsOfThisPost={props.commentsOfThisPost} />
        </CardContent>
        <CardActions>
          <Button
            onClick={handleNavigate}
            variant="contained"
            color="secondary"
          >
            More Info
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
