import { Box, Grid } from '@mui/material';
import React from 'react';
import { Item, ProjectImage, ProjectTitle, ProjectDescription } from './project.style';
import ONE_PIECE_IMG from '@assets/one_piece.jpg';
import CRICKET_WEBSITE from '@assets/cricket_website.png';
import PEGASUS_TRADERS from '@assets/pegasus_traders.jpg';
import REMEMBER from '@assets/remember.jpg';
import styled from 'styled-components';

const ProjectContainer = styled(Box)`
  min-height: 75rem;
  padding: 1rem 1.5rem;
  @media only screen and (max-width: 56.25em) {
    min-height: auto;
    padding: 1rem;
  }
`
export const Project: React.FC<{}> = (props) => {
  return (
    <ProjectContainer >
        <Grid container sx={{ height: '100%' }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={6}>
                <Item href="https://pegasus-traders.nicholausamarsden.com/pegasus-traders" target="_blank">
                    <ProjectTitle variant="h5">Pegasus Traders</ProjectTitle>
                    <ProjectImage loading="lazy" src={PEGASUS_TRADERS} alt="pegasus traders"/>
                    <ProjectDescription variant="body1">
                      Full e-commerce platform for a Jamaican renewable-energy retailer, built with React, TypeScript, MobX and Node. Checkout with online, in-office and payment-plan options; an admin dashboard with live order notifications, sales analytics, scheduled sales and coupons; deployed on AWS Fargate with RDS Postgres.
                    </ProjectDescription>
                </Item>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Item href="https://remember-s6cx.onrender.com" target="_blank">
                    <ProjectTitle variant="h5">Remember</ProjectTitle>
                    <ProjectImage loading="lazy" src={REMEMBER} alt="remember"/>
                    <ProjectDescription variant="body1">
                      Flashcard study app for creating, organizing and quizzing on decks of Q&A cards. Features Excel/CSV upload, folder organization, quiz mode, D3.js progress charts and public deck sharing. Built with React, Redux, TypeScript, Express, TypeORM and PostgreSQL.
                    </ProjectDescription>
                </Item>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Item href="https://cricket-mock.surge.sh/" target="_blank">
                    <ProjectTitle variant="h5">Cricket Website Re-create</ProjectTitle>
                    <ProjectImage  loading="lazy" src={CRICKET_WEBSITE} alt="cricket website"/>
                    <ProjectDescription variant="body1">
                      Created an imitation cricket website within three days before joining Cricket Wireless.
                    </ProjectDescription>
                </Item>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Item href="https://closed-eyes.surge.sh/" target="_blank">
                    <ProjectTitle variant="h5">One Piece Website</ProjectTitle>
                    <ProjectImage   loading="lazy"  src={ONE_PIECE_IMG} alt="one piece"/>
                    <ProjectDescription variant="body1">
                       Built to test my skills with HTML, CSS, and JavaScript. Made the website responsive, optimized images with media queries, and checked for cross-browser support.
                    </ProjectDescription>
                </Item>
            </Grid>
        </Grid>
    </ProjectContainer>
  )
}
