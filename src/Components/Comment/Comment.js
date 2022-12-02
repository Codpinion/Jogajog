import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";
const Comment = ({ commentsOfThisPost }) => {
  const { name, body } = commentsOfThisPost;
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (
    <div className="single-comment">
      <Stack direction="row" spacing={2}>
        <Avatar {...stringAvatar(name.toUpperCase())} />
          <p style={{fontSize: '18px', fontWeight: '600'}}>{name}</p>
      </Stack>
      <Divider textAlign="left">
        Comment
      </Divider>
      <p>{body}</p>
    </div>
  );
};

export default Comment;
