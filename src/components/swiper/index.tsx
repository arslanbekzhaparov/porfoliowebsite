// import React from 'react';
// import styled from 'styled-components';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css'; // Import Swiper's CSS
// import 'swiper/css/navigation'; // Import Swiper's Navigation CSS
// import SwiperCore, {Navigation} from 'swiper';
// import { StyleSheetManager } from 'styled-components';

// import Card1Img from '@images/Card1_image.svg';
// import Card2Img from '@images/Card2_image.svg';
// import Card3Img from '@images/Card3_image.svg';
// import Card4Img from '@images/Card4_image.svg';
// import Card5Img from '@images/Card5_image.svg';

// // Initialize the Navigation module
// SwiperCore.use([Navigation]);

// const StyledSwiper = styled(Swiper)`
//   width: 100%;
//   background: #000;
// `;

// const CenteredText = styled.div`
//   width: 100%;
//   flex-shrink: 0;
//   background: #000;
//   padding-top: 20px;
//   color: #FFF;
//   text-align: center;
//   font-family: Inter, sans-serif;
//   font-size: 48px;
//   font-weight: 600;
//   line-height: normal;
// `;

// const Slide = styled(SwiperSlide)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   max-width: 302px;
//   height: 540px;
//   flex-shrink: 0;
//   border-radius: 30px;
//   background: #161617;
//   color: #fff;
//   font-size: 24px;
//   margin: 24px;

//   img {
//     width: 100%;
//     height: 70%;
//     object-fit: cover;
//   }
// `;

// const SwiperComponent = () => {
//   const handleSlideChange = () => {
//     console.log('Slide change');
//   };

//   const handleSwiper = (swiper: typeof Swiper) => {
//     console.log(swiper);
//   };

//   return (
//     <StyleSheetManager shouldForwardProp={(prop) => !['spaceBetween', 'edgeSwipeDetection'].includes(prop)}>
//       <>
//         <CenteredText>Projects</CenteredText>
//         <StyledSwiper
//           spaceBetween={10}
//           onSlideChange={handleSlideChange}
//           edgeSwipeDetection={false}
//           navigation // Add navigation arrows
//         >
//           <Slide>
//             <img
//               src={Card1Img}
//               alt={`Tennis Robot`}
//               style={{ objectFit: "cover" }}
//             />
//           </Slide>
//           <Slide>
//             <img
//               src={Card2Img}
//               alt={`Tennis Robot`}
//               style={{ objectFit: "cover" }}
//             />
//           </Slide>
//           <Slide>
//             <img
//               src={Card3Img}
//               alt={`Tennis Robot`}
//               style={{ objectFit: "cover" }}
//             />
//           </Slide>
//           {/* Additional slides go here */}
//         </StyledSwiper>
//       </>
//     </StyleSheetManager>
//   );
// };

// export default SwiperComponent;