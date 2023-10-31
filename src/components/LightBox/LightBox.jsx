import { useState } from 'react';
import PropTypes from 'prop-types';
import product1 from '../../assets/images/image-product-1.jpg';
import product2 from '../../assets/images/image-product-2.jpg';
import product3 from '../../assets/images/image-product-3.jpg';
import product4 from '../../assets/images/image-product-4.jpg';
import product1Thumbnail from '../../assets/images/image-product-1-thumbnail.jpg';
import product2Thumbnail from '../../assets/images/image-product-2-thumbnail.jpg';
import product3Thumbnail from '../../assets/images/image-product-3-thumbnail.jpg';
import product4Thumbnail from '../../assets/images/image-product-4-thumbnail.jpg';

const LightBox = ({ toggleLightbox }) => {
  const bigImages = [ product1, product2, product3, product4 ];
  const thumbnailImages = [ product1Thumbnail, product2Thumbnail, product3Thumbnail, product4Thumbnail ];
  const lightboxBigImageIndex = sessionStorage.getItem('selectedIndex') || 0;
  const [ lightboxSelectedIndex, setLightboxSelectedIndex ] = useState(JSON.parse(lightboxBigImageIndex));

  const handlePrevious = () => {
    if (lightboxSelectedIndex > 0) {
      setLightboxSelectedIndex(lightboxSelectedIndex => lightboxSelectedIndex - 1);
      sessionStorage.setItem('selectedIndex', lightboxSelectedIndex - 1);

    } else {
      setLightboxSelectedIndex(bigImages.length - 1);
      sessionStorage.setItem('selectedIndex', bigImages.length - 1);
    }
  };

  const handleNext = () => {
    if (lightboxSelectedIndex < bigImages.length - 1) {
      setLightboxSelectedIndex(lightboxSelectedIndex => lightboxSelectedIndex + 1);
      sessionStorage.setItem('selectedIndex', lightboxSelectedIndex + 1);
    } else {
      setLightboxSelectedIndex(0);
      sessionStorage.setItem('selectedIndex', 0);
    }
  };

  return (
    <section className='lightbox-container'>
      <div className='product-images-container'>
        <div className='lightbox-close-icon-container' onClick={toggleLightbox}>
          <svg className='lightbox-close-icon' width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="currentColor" fillRule="nonzero" /></svg>
        </div>
        <p className='lightbox-arrow left' onClick={handlePrevious}>
          <svg className='lightbox-arrow-icon' width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="currentColor" strokeWidth="3" fill="none" fillRule="nonzero" /></svg>
        </p>
        <div className='product-images'>
          <div role="region" aria-label="Product big images" className='product-big-images'>
            {
              bigImages.map((bigImage, index) => <img key={index} id={`big-image-${index}`} src={bigImage} alt={`sneaker-${index + 1}`} className={index === lightboxSelectedIndex ? 'product-big-image active' : 'product-big-image'} aria-labelledby={`big-image-landmark-${index}`} />)
            }
          </div>
          <div className='product-img-thumbnails-short'>
            <div role="region" aria-label="Product image thumbnails" className='product-img-thumbnails'>
              {
                thumbnailImages.map((thumbnailImage, index) => {
                  return (
                    <div key={index} onClick={() => { setLightboxSelectedIndex(index); sessionStorage.setItem('selectedIndex', index); }} className={index === lightboxSelectedIndex ? 'product-img-thumbnail-div short active' : 'product-img-thumbnail-div short'} >
                      <img src={thumbnailImage} alt={`sneaker-thumbnail-${index + 1}`} className={index === lightboxSelectedIndex ? 'product-img-thumbnail active' : 'product-img-thumbnail'} />
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
        <p className='lightbox-arrow right' onClick={handleNext}>
          <svg className='lightbox-arrow-icon' width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="currentColor" strokeWidth="3" fill="none" fillRule="nonzero" /></svg>
        </p>
      </div>
    </section>
  );
};

export default LightBox;

LightBox.propTypes = {
  toggleLightbox: PropTypes.func
};