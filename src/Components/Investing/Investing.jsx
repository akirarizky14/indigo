import { Box, Grid, Typography, List, ListItem, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import '../../css/Investing/Investing.css'
import invest1 from '../../assets/invest1.jpeg';
import invest2 from '../../assets/invest2.jpeg';
import invest3 from '../../assets/invest3.jpeg';
import mainInvesting from '../../assets/mainInvesting.png';
import mainInvesting1 from '../../assets/mainInvesting1.png';
import mainInvesting2 from '../../assets/mainInvesting2.png';
import {useState, useEffect } from 'react';

const investingImages = [
  {
    id: 1,
    alt: 'Dashboard Allocation',
    imageUrl: invest1,
  },
  {
    id: 2,
    alt: 'Portfolio Overview',
    imageUrl: invest2,
  },
  {
    id: 3,
    alt: 'Performance Chart',
    imageUrl: invest3,
  },
];


const features = [
  {
    title: '1. Strategic Asset Allocation (SAA)',
    details: [
      'Setting target allocation based on asset types (mutual funds and bonds)',
      'Comparison of actual vs. target allocation',
      'Highlight deviations and rebalancing needs',
    ],
  },
  {
    title: '2. Mutual Fund Transaction Recording',
    details: [
      'Input purchase and sale transactions of mutual funds',
      'Record NAV at the time of transaction',
      'History and balance position per product',
    ],
  },
  {
    title: '3. Bond Transaction Recording',
    details: [
      'Input bond purchase, sale, and maturity transactions',
      'Record purchase price, coupon, and yield',
      'Schedule of coupon payments and principal repayments',
    ],
  },
  {
    title: '4. Index Crossing Monitoring',
    details: [
      'Monitor portfolio performance against benchmark index',
      'Alerts when returns reach/exceed upper or lower index limits',
      'Historical chart of crossings vs. benchmark',
    ],
  },
  {
    title: '5. Summary Dashboard',
    details: [
      'Visualization of actual allocation',
      'Table of positions and market values',
      'Daily/weekly transaction summary',
    ],
  },
];


const heroSlides = [
  {
    imageUrl: mainInvesting,
    alt: 'Tampilan utama aplikasi Investing',
  },
  {
    imageUrl: mainInvesting1,
    alt: 'Monitoring Portofolio',
  },
  {
    imageUrl: mainInvesting2,
    alt: 'Grafik Kinerja Investasi',
  },
];



function Investing() {
  const theme = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000); // 4 detik per slide

    return () => clearInterval(interval);
  }, []);
  return (
    <Box
      className="investing-container"
      sx={{
        backgroundColor: theme.palette.background.default1,
        color: theme.palette.text.primary,
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Box
            className="investing-placeholder-box"
            style={{
              backgroundImage: `url(${heroSlides[currentSlide].imageUrl})`,
              transition: 'background-image 1s ease-in-out',
            }}
            aria-label={heroSlides[currentSlide].alt}
          />



          <div className="investing-button-group">
            <a href="https://investing.groupisa.com" target="_blank" rel="noopener noreferrer">
              <button className="investing-button">Demo App</button>
            </a>
            <a
              href="https://wa.me/6289673636263"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="investing-button whatsapp">Contact our Sales</button>
            </a>
          </div>
        </Grid>

        <Grid item xs={12} md={7}>
          <Typography variant="h5" gutterBottom>
            Investment Monitoring Tool
          </Typography>
          <Typography variant="body1" paragraph>
            This Investment Monitoring Tool is designed to support the basic functions of investment portfolio management, with a focus on transaction recording and asset allocation strategy oversight. It is well-suited for financial institutions such as pension funds, insurance companies, or wealth managers who require basic visibility and control over the assets they manage.
          </Typography>


          <Typography variant="h6" gutterBottom>
            Main Feature
          </Typography>
          <List dense>
            {features.map((item, index) => (
              <Box key={index}>
                <ListItem alignItems="flex-start" disableGutters>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                      {item.title}
                    </Typography>
                    <ul className="investing-feature-list">
                      {item.details.map((point, i) => (
                        <li key={i} className="investing-feature-item">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Box>
                </ListItem>
                <Divider />
              </Box>
            ))}
          </List>
        </Grid>
      </Grid>

      <Box mt={6}>
      <Grid container spacing={2}>
        {investingImages.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <Box
              className="investing-thumbnail"
              style={{
                backgroundImage: `url(${item.imageUrl})`,
              }}
              aria-label={item.alt}
            />
          </Grid>
        ))}
      </Grid>
    </Box>

    </Box>
  );
}

export default Investing;
