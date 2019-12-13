import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Img from 'react-image';
import {
	Avatar,
	Button,
	Container,
	Grid,
	Typography} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import TwitterIcon from '@material-ui/icons/Twitter';

import {Header} from '../header/header.component.jsx';
import NavigationBar from '../navigation-bar/navigation-bar.component.jsx';

const useStyles = makeStyles(theme => ({
	content:{
		clear: 'both',
		display: 'flex',
		justifyContent:'center',
		flexDirection:'column',
		fontSize: '20px',
	},

	categoryBar1:{
		borderTop: '1px solid rgba(0,0,0,.15)',
		display: 'block',
		backgroundColor: 'white',
	},

	categoryBar2:{
		display:'flex',
		justifyContent:'center',
	},
	categoryBar3:{
		margin: '0 auto',
		width: '100%',
		minWidth: 0,
		maxWidth: '1032px',
		height: '54px',
		display:'flex',
		flexDirection:'row',
	},
	categoryBar4:{
		height: '54px',
		marginRight: '40px',
		overflow:'hidden',
		alignItems: 'center',
		display:'flex',
		width: 'auto',
	},

	categoryLogo:{
		height: '36px',
		width: '216px',	
	},

	categoryTextBar:{
		display: 'flex',
		alignItems: 'center',
		fontSize:'11pt',
		color:'grey',
	},

	categoryBorderTextBar:{
		paddingRight:'15px',
		borderRight: '1px solid rgba(0,0,0,.15)',
	},

	contentContainer:{
		margin:'32px auto 0px auto',
		clear: 'both',
		display: 'flex',
		justifyContent:'center',
		flexDirection:'column',
	},

	imgContainer:{
		display:'flex',
		flexDirection:'column',
	},

	imgContent:{
		maxWidth: '1032px',
	},

	captionContainer:{
		display:'flex',
		justifyContent:'center',
		margin: '10px auto 0px auto',
	},

	caption:{
		fontSize:'15px',
		textDecoration: 'underline',
		maxWidth:'728px',
		textAlign:'center',
		color:'grey',
	},

	contentSection:{
		display:'flex',
		justifyContent:'center',
		flexDirection:'column',
	},

	firstContent:{
		display:'flex',
		flexDirection:'column',
		alignItems:'center',
		fontFamily: 'ToledoSerialMedium',
	},

	firstContentStyle:{
		margin:'0.78em 64px 0 64px',
		maxWidth:'680px',
	},

	title:{
		fontSize: '40px',
	},

	authorContainer:{
		display:'flex',
		flexDirection:'row',
		justifyContent:'space-between',
		marginTop:'32px',
	},

	author:{
		display: 'flex',
		flexDirection:'row',
	},

	imgAuthor:{
		height: '48px',
		width: '48px',
	},

	nameFollow:{
		display:'flex',
		flexDirection:'row',
		alignItems:'center',
	},

	buttonFollow:{
		marginLeft: '8px',
		padding: '1px 8px',
		
	},

	iconTFB:{
		display:"flex", 
		alignItems:"flex-end", 
		justifyContent:"flex-end",
	},

	breaker:{
		color: 'grey',
		margin: '30px auto 14px auto',
		fontSize: '30px',
	},

	secondContent:{
		display:'flex',
		flexDirection:'column',
		alignItems:'center',
		fontFamily: 'ToledoSerialMedium',
	},

	secondContentStyle:{
		margin: '0 64px',
		maxWidth:'680px',
		width:'100%',
		display: 'block',
	},

	paragraphStyle:{
		margin: '2em 0 0.46em 0',
	},
}));

export const Article = () =>{
	const classes = useStyles();
	return(
		<Container className={classes.content}>
			<Header />
			<Grid className={classes.categoryBar1}>
				<Grid className={classes.categoryBar2}>
					<Grid className={classes.categoryBar3}>
						<Grid className={classes.categoryBar4}>
							<Img className={classes.categoryLogo} src="https://miro.medium.com/max/432/1*IPEsgX_bZKP_7OubdnI7-Q.png"/>
						</Grid>
						<Grid className={classes.categoryTextBar}>
							<Typography className={classes.categoryBorderTextBar}>MISSION ORIGINALS</Typography>
							<Grid style={{margin:"0 15px"}}>SUBSCRIBE</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			<Grid className={classes.contentContainer}>
				{/* IMAGE SECTION */}
				<Grid className={classes.imgContainer}>
					<Img className={classes.imgContent} src="https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg"/>
					<Grid className={classes.captionContainer}>
						<Grid className={classes.caption}>Books</Grid>
					</Grid>
				</Grid>

				{/* CONTENT SECTION */}
				<Grid className={classes.contentSection}>
					{/* FIRST SECTION */}
					<Grid className={classes.firstContent}>
						<Grid className={classes.firstContentStyle}>
							<Grid className={classes.title}>
								If You Only Read A Few Books In 2018, Read These
							</Grid>
							<Grid className={classes.authorContainer}>
								<Grid className={classes.author}>
									<Img className={classes.imgAuthor} src="https://miro.medium.com/fit/c/96/96/0*oxw8NBp_Td0n3l4_.png"/>
									<Grid style={{marginLeft: '12px'}}>
										<Grid className={classes.nameFollow}>
											<Typography>Ryan Holiday</Typography>
											<Button  size='small' variant='outlined' color="secondary" className={classes.buttonFollow}>Follow</Button>
										</Grid>
										<Grid>
											<Typography>Jun 26, 2018 . 10 min read</Typography>
										</Grid>
									</Grid>
								</Grid>
								<Grid className={classes.iconTFB}>
									<TwitterIcon />
									<FacebookIcon />
									<BookmarkBorderIcon />
								</Grid>
							</Grid>
							<Grid>
								<Typography style={{margin:'42px 0 -10px 0'}}>If you’d liked to be jerked around less, provoked less, and more productive and inwardly focused, where should you start?</Typography>
								<Typography style={{margin:'42px 0 -10px 0'}}>To me, the answer is obvious: by turning to wisdom. Below is a list of 21 books that will help lead you to a better, stronger 2018.</Typography>
							</Grid>
						</Grid>
					</Grid>

					{/* BREAKER*/}
					<Grid className={classes.breaker}>. . .</Grid>

					{/* SECOND SECTION */}
					<Grid className={classes.secondContent}>
						<Grid className={classes.secondContentStyle}>
							<Typography align="justify" className={classes.paragraphStyle}>
								<b><i><u>Deep Work: Rules for Focused Success in a Distracted World</u></i> by Cal Newport</b> Media consumption went way up 
								in 2017. For most of us, that meant happiness and productivity went way down. The world is becoming noisier 
								and will become more so every day. If you can’t cultivate the ability to have quiet, insightful, deeply 
								focused periods of productive work, you’re going to get screwed. This is a book that explains how to cultivate 
								and protect that skill — the ability to do deep work. I strongly urge you to begin this practice in 2018— if you 
								want to get anything done or perform your best.
							</Typography>
						</Grid>
					</Grid>

					<Grid className={classes.secondContent}>
						<Grid className={classes.secondContentStyle}>
							<Typography align="justify" className={classes.paragraphStyle}>
								<b><i><u>The Way to Love: The Last Meditations of Anthony de Mello</u></i> by Anthony de Mello</b> Coach Shaka Smart recommended this little book (and it’s a little book, probably the smallest I’ve ever read. It fits in your palm). But it’s an incredibly wise and helpful read. Written by a Catholic Priest who’d lived in India, the book has this unusual convergence of eastern and western thought. One of my favorite lines: “The question to ask is not ‘What’s wrong with this person?’ but ‘What does this irritation tell me about myself?’ I plan on regularly revisiting it throughout 2018.
							</Typography>
						</Grid>
					</Grid>

					<Grid className={classes.secondContent}>
						<Grid className={classes.secondContentStyle}>
							<Typography align="justify" className={classes.paragraphStyle}>
								<b><i><u>But What If We’re Wrong</u></i> by Chuck Klosterman</b> It’s always good to remind ourselves that almost everything we’re certain about will probably be eventually proven wrong. Klosterman’s subtitle — Thinking About the Present As If It Were the Past — is a brilliant exercise for getting some perspective in 2018. Whether you think it’s going to be a year of radical change for the better or a horrible year of excesses of dangerous precedent, you’re probably wrong. You’re probably not even in the ballpark. This book shows you why, not with lectures about politics, but with a bunch of awesome thought experiments about music, books, movies and science.
							</Typography>
						</Grid>
					</Grid>

					<Grid className={classes.secondContent}>
						<Grid className={classes.secondContentStyle}>
							<Typography align="justify" className={classes.paragraphStyle}>
								<b><i><u>Rules for Radicals: A Practical Primer for Realistic Radicals</u></i> by Saul Alinsky</b> If Hillary Clinton had remembered the lessons of Saul Alinsky (who she wrote her college thesis on), the election may have turned out differently. Why? A notorious strategist and community organizer, Alinsky was a die hard pragmatist, but he also knew how to tell a story and create a collective cause. He could work within the system but knew how to shake it up and generate attention. This book is a classic and woefully underrated. Whatever you set out to do in 2018, this book can provide you with strategic guidance and insight.
							</Typography>
						</Grid>
					</Grid>

					<Grid className={classes.secondContent}>
						<Grid className={classes.secondContentStyle}>
							<Typography align="justify" className={classes.paragraphStyle}>
								<b><i><u>The Filter Bubble by Eli Pariser / Trust Me I’m Lying</u></i> by Ryan Holiday / The Brass Check by Upton Sinclair</b> I strongly recommend that you take the time in 2018 to read these books. In light of this year, you owe it to yourself to study and better understand how our media system works. In The Filter Bubble, Eli Pariser warns of the danger of living in bubbles of personalization that reinforce and insulate our worldview. Though Sinclair’s The Brass Check has been almost entirely forgotten by history, it’s not only fascinating but a timeless perspective. Sinclair deeply understood the economic incentives of early 20th century journalism and thus could predict and analyze the manipulative effect it had on The Truth. I used that book as a model for my expose of the media system, Trust Me, I’m Lying. Today, the incentives and pressures are different but they warp our information in a similar way. In almost every substantial charge Upton leveled against the yellow press, you could, today, sub in blogs and the cable news cycle and be even more correct.
							</Typography>
						</Grid>
					</Grid>

				</Grid>
			</Grid>
		</Container>
	);
}