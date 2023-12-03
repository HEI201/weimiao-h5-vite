/* eslint-disable react/prop-types */
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ActionAreaCard({ prefix, desc, img, onClick }) {
  return (
    <Card onClick={onClick}>
      <CardActionArea>
        {img && (
          <CardMedia component="img" height="290" image={img} alt={desc} />
        )}
        <CardContent>
          <Typography variant="body2" fontSize={'1.5rem'} color="text.primary">
            {prefix}
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
