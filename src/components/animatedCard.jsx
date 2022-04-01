import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import PropTypes from 'proptypes';
import React, { useState } from 'react';

const AnimatedCard = (props) => {
  const {img, paragraph} = props;
  const [visibility, setVisibility] = useState(true)
  return (
    <Card elevation={3} sx={{ maxWidth: 500 }} onClick={() => {setVisibility(!visibility)}}>
      <CardMedia
        component="img"
        height="200"
        image={img}
        alt="Bedroom workspace"
      />
      <CardContent hidden={visibility} >
        <Typography variant="body2" >
          {paragraph}
        </Typography>
      </CardContent>
    </Card>
  );
}

AnimatedCard.propTypes = {
  // src for the image.
  img: PropTypes.string,
  // paragraph for the text to put in the card.
  paragraph: PropTypes.string,
};

export default AnimatedCard;