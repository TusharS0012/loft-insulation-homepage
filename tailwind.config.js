/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-inter)',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		colors: {
  			primary: {
  				'50': '#fef7f0',
  				'100': '#fdeee0',
  				'200': '#fad9c1',
  				'300': '#f6c19e',
  				'400': '#f1a578',
  				'500': '#E6781D',
  				'600': '#d16a1a',
  				'700': '#b85c17',
  				'800': '#9f4e14',
  				'900': '#864011',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'50': '#f0f7f4',
  				'100': '#e1efe8',
  				'200': '#c3dfd1',
  				'300': '#a5cfba',
  				'400': '#87bfa3',
  				'500': '#7CA597',
  				'600': '#6f8a87',
  				'700': '#626f77',
  				'800': '#555467',
  				'900': '#483957',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				'50': '#f0fdff',
  				'100': '#e1faff',
  				'200': '#c3f5ff',
  				'300': '#a5f0ff',
  				'400': '#87ebff',
  				'500': '#56C4D8',
  				'600': '#4db0c2',
  				'700': '#449cac',
  				'800': '#3b8896',
  				'900': '#327480',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			neutral: {
  				'50': '#F9F9F9',
  				'100': '#f3f3f3',
  				'200': '#e7e7e7',
  				'300': '#d1d1d1',
  				'400': '#b0b0b0',
  				'500': '#888888',
  				'600': '#6d6d6d',
  				'700': '#5d5d5d',
  				'800': '#4f4f4f',
  				'900': '#454545'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.5s ease-in-out',
  			'slide-up': 'slideUp 0.5s ease-out'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideUp: {
  				'0%': {
  					transform: 'translateY(20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
