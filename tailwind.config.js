/** @type {import('tailwindcss').Config} */
module.exports = {


  // по умолчанию системная тема(через медиа запросы)
  darkMode: 'class', // по классу <html>
  // darkMode: ['class', '[data-mode="dark"]'], // кастомный клас/атрибут

  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}



// export default {
//   content: [
//     "./modules/**/*.{js,vue,ts}",
//     "./components/**/*.{js,vue,ts}",
//     "./layouts/**/*.vue",
//     "./pages/**/*.vue",
//     "./plugins/**/*.{js,ts}",
//     "./app.vue",
//     "./error.vue",
//   ],
//   theme: {
//     colors: {
//       black: "#000",
//       white: "#fff",
//       "gray-900": "#101828",
//       "gray-700": "#354153",
//       "gray-500": "#667085",
//       "gray-300": "#D0D5DD",
//       "gray-200": "#EAECF0",
//       "gray-100": "#F9FBFC",
//       "gray-50": "#F9FAFB",
//       "blue-800": "#1849A9",
//       "blue-700": "#1570EF",
//       "blue-200": "#C6DAFD",
//       "reg-200": "#FECDCA",
//       "red-600": "#D92D20",
//       "red-800": "#B42318",
//       "yellow-50": "#FFFAEB",
//       "yellow-100": "#FEF0C7",
//       "yellow-700": "#B54708",
//       "green-700": "#027A48",
//       "green-100": "#D1FADF",
//     },
//     extend: {
//       boxShadow: {
//         blue: "0px 0px 0px 4px rgba(21, 112, 239, 0.12);",
//         red: "0px 0px 0px 4px rgba(255, 0, 0, 0.12);",
//       },
//       borderRadius: {
//         lg: "10px",
//       },
//     },
//   },
//   plugins: [],
// };


// export default {
//   content: [
//     './modules/**/*.{js,vue,ts}',
//     './components/**/*.{js,vue,ts}',
//     './layouts/**/*.vue',
//     './pages/**/*.vue',
//     './plugins/**/*.{js,ts}',
//     './app.vue',
//     './error.vue'
//   ],
//   // safelist: ['top-2', 'text-xs'],
//   safelist: [
//     'text-gray-900',
//     'bg-purple-800',
//     'bg-green-500',
//     'line-through',
//     'text-gray-400',
//     'bg-[#704FE614]'
//   ],
//   theme: {
//     colors: {
//       black: '#000',
//       white: '#fff',
//       'gray-100': '#f7fafc',
//       'gray-200': '#EAECF0',
//       'gray-300': '#D0D5DD',
//       'gray-400': '#98A2B3',
//       'gray-500': '#667085',
//       'gray-900': '#13172B',
//       'purple-300': '#D5CBF8',
//       'purple-800': '#704FE6',
//       'purple-900': '#5934e5',
//       'red-700': '#B42318',
//       'green-500': '#12B76A'
//     },
//     fontFamily: {
//       onest: ['Onest', 'Arial', 'sans-serif'], // до загрузки - Arial, после - Onest
//       soyuz: ['soyuz-grotesk', 'Times New Roman', 'sans-serif'] // до загрузки - Times New Roman, после - soyuz-grotesk
//     },
//     extend: {
//       borderRadius: {
//         '4xl': '32px'
//       },
//       boxShadow: {
//         focus: '0px 0px 0px 5px #704FE652;'
//       },
//       fontSize: {
//         '1.5sm': [
//           '15px',
//           {
//             lineHeight: '18px'
//           }
//         ],
//         '1.5xl': [
//           '22px',
//           {
//             lineHeight: '32px'
//           }
//         ],
//         '3.5xl': [
//           '32px',
//           {
//             lineHeight: '40px'
//           }
//         ]
//       }
//     }
//   },
//   plugins: []
// }

