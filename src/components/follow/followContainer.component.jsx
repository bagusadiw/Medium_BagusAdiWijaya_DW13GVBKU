import React, {Component} from 'react';
import Img from 'react-image';
import { makeStyles } from '@material-ui/core/styles';
import {
	Avatar,
	Button,
	Grid,
	Fab,
	Typography} from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import './followContainer.styles.css';
import {Header} from '../header/header.component';



export default class FollowContainer extends Component{
	render(){
		return(
			<Grid className="container">
				<Grid className="tagContainer">
					<Grid className="articleTag" container spacing={2}>		
						<Grid item><Button size="small" color="default" variant="contained" className="tag">Books</Button></Grid>
						<Grid item><Button size="small" color="default" variant="contained" className="tag">Books</Button></Grid>
						<Grid item><Button size="small" color="default" variant="contained" className="tag">Books</Button></Grid>
						<Grid item><Button size="small" color="default" variant="contained" className="tag">Books</Button></Grid>
						<Grid item><Button size="small" color="default" variant="contained" className="tag">Books</Button></Grid>
					</Grid>
					<Grid className="buttonsArticle">
						<Grid className="claps">
							<Fab style={{background: 'white', marginRight:'10px'}}>
								<svg style={{margin: '10px 10px'}}>
									<path fill="rgba(2, 184, 117, 1)" d="M28.86 17.34l-3.64-6.4c-.3-.43-.71-.73-1.16-.8a1.12 1.12 0 0 0-.9.21c-.62.5-.73 1.18-.32 2.06l1.22 2.6 1.4 2.45c2.23 4.09 1.51 8-2.15 11.66a9.6 9.6 0 0 1-.8.71 6.53 6.53 0 0 0 4.3-2.1c3.82-3.82 3.57-7.87 2.05-10.39zm-6.25 11.08c3.35-3.35 4-6.78 1.98-10.47L21.2 12c-.3-.43-.71-.72-1.16-.8a1.12 1.12 0 0 0-.9.22c-.62.49-.74 1.18-.32 2.06l1.72 3.63a.5.5 0 0 1-.81.57l-8.91-8.9a1.33 1.33 0 0 0-1.89 1.88l5.3 5.3a.5.5 0 0 1-.71.7l-5.3-5.3-1.49-1.49c-.5-.5-1.38-.5-1.88 0a1.34 1.34 0 0 0 0 1.89l1.49 1.5 5.3 5.28a.5.5 0 0 1-.36.86.5.5 0 0 1-.36-.15l-5.29-5.29a1.34 1.34 0 0 0-1.88 0 1.34 1.34 0 0 0 0 1.89l2.23 2.23L9.3 21.4a.5.5 0 0 1-.36.85.5.5 0 0 1-.35-.14l-3.32-3.33a1.33 1.33 0 0 0-1.89 0 1.32 1.32 0 0 0-.39.95c0 .35.14.69.4.94l6.39 6.4c3.53 3.53 8.86 5.3 12.82 1.35zM12.73 9.26l5.68 5.68-.49-1.04c-.52-1.1-.43-2.13.22-2.89l-3.3-3.3a1.34 1.34 0 0 0-1.88 0 1.33 1.33 0 0 0-.4.94c0 .22.07.42.17.61zm14.79 19.18a7.46 7.46 0 0 1-6.41 2.31 7.92 7.92 0 0 1-3.67.9c-3.05 0-6.12-1.63-8.36-3.88l-6.4-6.4A2.31 2.31 0 0 1 2 19.72a2.33 2.33 0 0 1 1.92-2.3l-.87-.87a2.34 2.34 0 0 1 0-3.3 2.33 2.33 0 0 1 1.24-.64l-.14-.14a2.34 2.34 0 0 1 0-3.3 2.39 2.39 0 0 1 3.3 0l.14.14a2.33 2.33 0 0 1 3.95-1.24l.09.09c.09-.42.29-.83.62-1.16a2.34 2.34 0 0 1 3.3 0l3.38 3.39a2.17 2.17 0 0 1 1.27-.17c.54.08 1.03.35 1.45.76.1-.55.41-1.03.9-1.42a2.12 2.12 0 0 1 1.67-.4 2.8 2.8 0 0 1 1.85 1.25l3.65 6.43c1.7 2.83 2.03 7.37-2.2 11.6zM13.22.48l-1.92.89 2.37 2.83-.45-3.72zm8.48.88L19.78.5l-.44 3.7 2.36-2.84zM16.5 3.3L15.48 0h2.04L16.5 3.3z"></path>
								</svg>
							</Fab>
							<Grid>
								54K claps
							</Grid>
						</Grid>
						<Grid style={{display:'flex', alignItems:'flex-end'}}>
							<TwitterIcon/>
							<FacebookIcon />
							<BookmarkBorderIcon />
							<MoreHorizIcon/>
						</Grid>
					</Grid>
					{/* ---------------------------------------------------------- */}
					<Grid className="followContainer">
						<Grid className="authorDescContainer">
							<Grid className="authorContainer">
								<Avatar className="avatar" src="https://miro.medium.com/fit/c/96/96/0*oxw8NBp_Td0n3l4_.png" />
								<Grid className="authorName">
									<Typography>written by</Typography>
									<Grid className="author">
										<Typography>ryan holiday</Typography>
										<Button className="buttonFollow" size='small' variant='outlined' color="secondary">Follow</Button>
									</Grid>
								</Grid>
							</Grid>
							<Grid className="desc">
								Bestselling author of ‘Conspiracy,’ ‘Ego is the Enemy’ & ‘The Obstacle Is The Way’ http://amzn.to/24qKRWR
							</Grid>
						</Grid>
						<Grid className="authorDescContainer">
							<Grid className="authorContainer">
								<Avatar className="avatar" src="https://miro.medium.com/fit/c/160/160/1*kFWwYehzjJIhgw8hTygfHw.png" />
								<Grid className="authorName">
									<Grid className="author">
										<Typography>Mission.org</Typography>
										<Button className="buttonFollow" size='small' variant='outlined' color="secondary">Follow</Button>
									</Grid>
								</Grid>
							</Grid>
							<Grid className="desc">
								A network of business & tech podcasts designed to accelerate learning. Selected as “Best of 2018” by Apple. Mission.org
							</Grid>
						</Grid>
					</Grid>
					{/* ---------------------------------------------------------- */}
					<Grid className="response">
						<Button className="buttonResponse" size='large' variant='outlined' color="secondary">See Response (218)</Button>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}