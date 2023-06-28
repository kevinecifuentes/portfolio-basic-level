/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        m790: '790px',
        m820: '820px',
        m850: '850px',
        m880: '880px',
        m910: '910px',
        m940: '940px',
        m970: '970px',
        m1000: '1000px',
        l1060: '1060px',
        l1090: '1090px',
        l1120: '1120px',
        l1150: '1150px',
        l1180: '1180px',
        l1210: '1210px',
        l1220: '1220px',
        l1250: '1250px',
        x1310: '1310px',
        x1340: '1340px',
        x1370: '1370px',
        x1400: '1400px',
        x1430: '1440px',
        x1460: '1460px',
        x1490: '1490px',
        x1520: '1520px',
        x1570: '1570px',
        x1630: '1630px',
        x1660: '1650px',
      },
      fontFamily: {
        PrincipalFont: ['Sen', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
