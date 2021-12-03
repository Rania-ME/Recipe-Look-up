import React, {useState} from 'react'
//import { makeStyles } from '@mui/material/styles';
import { makeStyles } from  "@material-ui/core/styles"
import { styled } from '@mui/material/styles';
//import clsx from 'clsx';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
//import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import { red } from '@mui/material/colors';
//import FavoriteIcon from '@mui/icons-material/Favorite';
//import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 325,
        margin: '15px 0',
    },
    media: {
        height:0,
        paddingTop: '56.25%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    
}));

const Recipe = ({title, calories, image, ingredients}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    return (
        <div>
             <Card sx={{ maxWidth: 345 }}>
      <CardHeader
         
        
        title={title}
        subheader={calories}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={title} 
      />
      
      <CardActions disableSpacing>
        <div>Ingredients</div>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            
            {ingredients.map((ingredient) => (
                <Typography paragraph>{ingredient.text}</Typography>
            ))}
          
          
        </CardContent>
      </Collapse>
    </Card>
            {/*<p>{title}</p>
            <p>{calories}</p>
            <img src={image} alt="" />
            <ol>
                {ingredients.map((ingredient) => (
                    <li>{ingredient.text}</li>
                ))}
          </ol>  */}
        </div>
    )
}

export default Recipe

