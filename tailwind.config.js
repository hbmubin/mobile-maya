/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './index.html',
    // './product-details.html', 
    // './forgot-password.html', 
    // './gallery.html', 
    // './specification.html', 
    // './compare-product.html', 
    // './compare.html', 
    // './price-list.html', 
    // './top-ten.html', 
    // './news-and-tips.html', 
    // './reviews.html',
    './src/**/*.js', 
    './script/*.js', 
    './*.html', 
  ],
  theme: {
    screens: {
      'xs': '480px',
      // => @media (min-width: 640px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        bgGray: "#f2f3f5",
        bgText: "#737373",
        bgBlue: "#515ca9",
        blueText: "#344ff6",
        tealColor:"#629fb6",
      },
    },
  },
  plugins: [],
}

