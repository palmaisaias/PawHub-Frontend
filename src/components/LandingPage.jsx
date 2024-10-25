import React from 'react';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Button, 
    Container, 
    Grid, 
    Paper, 
    Card, 
    CardMedia, 
    CardContent, 
    CardActions, 
    Avatar, 
    CssBaseline, 
    Box 
} from '@mui/material';
import { styled } from '@mui/system';

// Custom Styled Components
const HeroBox = styled(Box)({
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1625317201684-b5ab0b282552?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center/cover no-repeat`,
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    transition: 'all 0.5s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
    },
    animation: 'fadeIn 2s ease-in-out',
    '@keyframes fadeIn': {
        from: { opacity: 0 },
        to: { opacity: 1 },
    },
});

const HeroText = styled(Typography)({
    fontSize: '3.5rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
    letterSpacing: '2px',
    animation: 'textGlow 3s infinite',
    '@keyframes textGlow': {
        '0%': { textShadow: '2px 2px 8px rgba(255, 255, 255, 0.5)' },
        '50%': { textShadow: '2px 2px 8px rgba(255, 255, 255, 1)' },
        '100%': { textShadow: '2px 2px 8px rgba(255, 255, 255, 0.5)' },
    },
});

const CardMediaStyled = styled(CardMedia)({
    height: 220,
    transition: 'transform 0.4s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
        filter: 'brightness(1.1)',
    },
    borderRadius: '8px',
});

const AvatarStyled = styled(Avatar)({
    width: 100,
    height: 100,
    marginBottom: '16px',
    border: '3px solid #fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
    },
});

const FooterBox = styled(Box)({
    padding: '24px',
    backgroundColor: '#111',
    color: '#fff',
    textAlign: 'center',
    fontSize: '1.2rem',
    boxShadow: '0px -3px 10px rgba(0, 0, 0, 0.3)',
    '& a': {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'color 0.3s',
        '&:hover': {
            color: '#6200ea',
        },
    },
});


// Sample Data
const features = [
    { title: 'Feature 1', description: 'An amazing feature that provides incredible value.', image: 'https://images.unsplash.com/photo-1569144157591-c60f3f82f137?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Feature 2', description: 'A feature that enhances user experience significantly.', image: 'https://images.unsplash.com/photo-1569144157590-5d41c725e9bd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Feature 3', description: 'A powerful feature that ensures high performance.', image: 'https://images.unsplash.com/photo-1569323110185-a92e9e1ad52c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const testimonials = [
    { name: 'John Doe', feedback: 'This service changed my life!', avatar: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png' },
    { name: 'Jane Smith', feedback: 'Highly recommended for anyone looking to improve.', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-female-5-512.png' },
];

const LandingPage = () => {
    return (
        <>
            <CssBaseline />
            {/* Navbar */}
            <AppBar position="static" sx={{ backgroundColor: '#6200ea' }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        My Landing Page
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

            {/* Hero Section */}
            <HeroBox>
                <HeroText>Welcome to Our Service</HeroText>
            </HeroBox>

            {/* Features Section */}
            <Container sx={{ marginTop: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Our Features
                </Typography>
                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <CardMediaStyled
                                    image={feature.image}
                                    title={feature.title}
                                />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        {feature.title}
                                    </Typography>
                                    <Typography>{feature.description}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Testimonials Section */}
            <Container sx={{ marginTop: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    What Our Users Say
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {testimonials.map((testimonial, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Paper sx={{ padding: 2, textAlign: 'center' }}>
                                <AvatarStyled src={testimonial.avatar} />
                                <Typography variant="h6" gutterBottom>
                                    {testimonial.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    "{testimonial.feedback}"
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Footer Section */}
            <FooterBox>
                <Typography variant="body1">
                    © 2024 My Landing Page. All rights reserved.
                </Typography>
            </FooterBox>
        </>
    );
};

export default LandingPage;
