"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.standardColors = exports.getCssText = exports.config = exports.theme = exports.globalCss = exports.css = exports.styled = exports.createTheme = exports.baseTheme = void 0;
const react_1 = require("@stitches/react");
const polished_1 = require("polished");
exports.baseTheme = {
    theme: {
        colors: {
            text: '$black',
            // generated with createPalette function
            primary: '#228BE6',
            'primary-darken-1': '#187dd4',
            'primary-darken-2': '#1673c4',
            'primary-darken-3': '#146ab4',
            'primary-darken-4': '#0e4778',
            'primary-lighten-1': 'rgba(34, 139, 230, 0.85)',
            'primary-lighten-2': 'rgba(34, 139, 230, 0.75)',
            'primary-lighten-3': 'rgba(34, 139, 230, 0.50)',
            'primary-lighten-4': 'rgba(34, 139, 230, 0.35)',
            'primary-lighten-5': 'rgba(34, 139, 230, 0.22)',
            'primary-lighten-6': 'rgba(34, 139, 230, 0.15)',
            'primary-lighten-7': 'rgba(34, 139, 230, 0.1)',
            'primary-lighten-8': 'rgba(34, 139, 230, 0.01)',
            'primary-readable': '#fff',
            secondary: '#F06595',
            'secondary-darken-1': '#ee4b83',
            'secondary-darken-2': '#ec3b78',
            'secondary-darken-3': '#ea2b6d',
            'secondary-darken-4': '#c0134e',
            'secondary-lighten-1': 'rgba(240, 101, 149, 0.85)',
            'secondary-lighten-2': 'rgba(240, 101, 149, 0.75)',
            'secondary-lighten-3': 'rgba(240, 101, 149, 0.50)',
            'secondary-lighten-4': 'rgba(240, 101, 149, 0.35)',
            'secondary-lighten-5': 'rgba(240, 101, 149, 0.22)',
            'secondary-lighten-6': 'rgba(240, 101, 149, 0.15)',
            'secondary-lighten-7': 'rgba(240, 101, 149, 0.1)',
            'secondary-lighten-8': 'rgba(240, 101, 149, 0.01)',
            'secondary-readable': '#fff',
            success: '#37B24D',
            'success-darken-1': '#309d44',
            'success-darken-2': '#2c8f3e',
            'success-darken-3': '#288138',
            'success-darken-4': '#184e22',
            'success-lighten-1': 'rgba(55, 178, 77, 0.85)',
            'success-lighten-2': 'rgba(55, 178, 77, 0.75)',
            'success-lighten-3': 'rgba(55, 178, 77, 0.50)',
            'success-lighten-4': 'rgba(55, 178, 77, 0.35)',
            'success-lighten-5': 'rgba(55, 178, 77, 0.22)',
            'success-lighten-6': 'rgba(55, 178, 77, 0.15)',
            'success-lighten-7': 'rgba(55, 178, 77, 0.1)',
            'success-lighten-8': 'rgba(55, 178, 77, 0.01)',
            'success-readable': '#fff',
            warning: '#FFA000',
            'warning-darken-1': '#e38e00',
            'warning-darken-2': '#d18300',
            'warning-darken-3': '#bf7800',
            'warning-darken-4': '#7c4e00',
            'warning-lighten-1': 'rgba(255, 160, 0, 0.85)',
            'warning-lighten-2': 'rgba(255, 160, 0, 0.75)',
            'warning-lighten-3': 'rgba(255, 160, 0, 0.50)',
            'warning-lighten-4': 'rgba(255, 160, 0, 0.35)',
            'warning-lighten-5': 'rgba(255, 160, 0, 0.22)',
            'warning-lighten-6': 'rgba(255, 160, 0, 0.15)',
            'warning-lighten-7': 'rgba(255, 160, 0, 0.1)',
            'warning-lighten-8': 'rgba(255, 160, 0, 0.01)',
            'warning-readable': '#fff',
            error: '#F03E3E',
            'error-darken-1': '#ee2424',
            'error-darken-2': '#ed1313',
            'error-darken-3': '#d11',
            'error-darken-4': '#9f0c0c',
            'error-lighten-1': 'rgba(240, 62, 62, 0.85)',
            'error-lighten-2': 'rgba(240, 62, 62, 0.75)',
            'error-lighten-3': 'rgba(240, 62, 62, 0.50)',
            'error-lighten-4': 'rgba(240, 62, 62, 0.35)',
            'error-lighten-5': 'rgba(240, 62, 62, 0.22)',
            'error-lighten-6': 'rgba(240, 62, 62, 0.15)',
            'error-lighten-7': 'rgba(240, 62, 62, 0.1)',
            'error-lighten-8': 'rgba(240, 62, 62, 0.01)',
            'error-readable': '#fff',
            neutral: '#868E96',
            black: '#000000',
            white: '#FFFFFF',
            // reserved colors for popover and modal component
            popperDarkBg: '#131415',
            popperLightBg: '$white',
            transparent: '#FFFFFF00',
            brown900: '#3E2723',
            brown800: '#4E342E',
            brown700: '#5D4037',
            brown600: '#6D4C41',
            brown500: '#795548',
            brown400: '#8D6E63',
            brown300: '#A1887F',
            brown200: '#BCAAA4',
            brown100: '#D7CCC8',
            brown50: '#EFEBE9',
            blueGray900: '#263238',
            blueGray800: '#37474F',
            blueGray700: '#455A64',
            blueGray600: '#546E7A',
            blueGray500: '#607D8B',
            blueGray400: '#78909C',
            blueGray300: '#90A4AE',
            blueGray200: '#B0BEC5',
            blueGray100: '#CFD8DC',
            blueGray50: '#ECEFF1',
            gray900: '#1F2123',
            gray800: '#2C2E31',
            gray700: '#4B535B',
            gray600: '#868E96',
            gray500: '#ADB5BD',
            gray400: '#CED4DA',
            gray300: '#E0E4E8',
            gray200: '#E9ECEF',
            gray100: '#F1F3F5',
            gray50: '#F8F9FA',
            deepOrange900: '#BF360C',
            deepOrange800: '#D84315',
            deepOrange700: '#E64A19',
            deepOrange600: '#F4511E',
            deepOrange500: '#FF5722',
            deepOrange400: '#FF7043',
            deepOrange300: '#FF8A65',
            deepOrange200: '#FFAB91',
            deepOrange100: '#FFCCBC',
            deepOrange50: '#FBE9E7',
            orange900: '#D9480F',
            orange800: '#E8590C',
            orange700: '#F76707',
            orange600: '#FD7E14',
            orange500: '#FF922B',
            orange400: '#FFA94D',
            orange300: '#FFC078',
            orange200: '#FFD8A8',
            orange100: '#FFE8CC',
            orange50: '#FFF4E6',
            amber900: '#FF6F00',
            amber800: '#FF8F00',
            amber700: '#FFA000',
            amber600: '#FFB300',
            amber500: '#FFC107',
            amber400: '#FFCA28',
            amber300: '#FFD54F',
            amber200: '#FFE082',
            amber100: '#FFECB3',
            amber50: '#FFF8E1',
            yellow900: '#F57F17',
            yellow800: '#F9A825',
            yellow700: '#FBC02D',
            yellow600: '#FDD835',
            yellow500: '#FFEB3B',
            yellow400: '#FFEE58',
            yellow300: '#FFF176',
            yellow200: '#FFF59D',
            yellow100: '#FFF9C4',
            yellow50: '#FFFDE7',
            lime900: '#5C940D',
            lime800: '#66A80F',
            lime700: '#74B816',
            lime600: '#82C91E',
            lime500: '#94D82D',
            lime400: '#A9E34B',
            lime300: '#C0EB75',
            lime200: '#D8F5A2',
            lime100: '#E9FAC8',
            lime50: '#F4FCE3',
            lightGreen900: '#2B8A3E',
            lightGreen800: '#2F9E44',
            lightGreen700: '#37B24D',
            lightGreen600: '#40C057',
            lightGreen500: '#51CF66',
            lightGreen400: '#69DB7C',
            lightGreen300: '#8CE99A',
            lightGreen200: '#B2F2BB',
            lightGreen100: '#D3F9D8',
            lightGreen50: '#EBFBEE',
            green900: '#1B5E20',
            green800: '#2E7D32',
            green700: '#388E3C',
            green600: '#43A047',
            green500: '#4CAF50',
            green400: '#66BB6A',
            green300: '#81C784',
            green200: '#A5D6A7',
            green100: '#C8E6C9',
            green50: '#E8F5E9',
            teal900: '#087F5B',
            teal800: '#099268',
            teal700: '#0CA678',
            teal600: '#12B886',
            teal500: '#20C997',
            teal400: '#38D9A9',
            teal300: '#63E6BE',
            teal200: '#96F2D7',
            teal100: '#C3FAE8',
            teal50: '#E6FCF5',
            cyan900: '#0B7285',
            cyan800: '#0C8599',
            cyan700: '#1098AD',
            cyan600: '#15AABF',
            cyan500: '#22B8CF',
            cyan400: '#3BC9DB',
            cyan300: '#66D9E8',
            cyan200: '#99E9F2',
            cyan100: '#C5F6FA',
            cyan50: '#E3FAFC',
            blue900: '#1864AB',
            blue800: '#1971C2',
            blue700: '#1C7ED6',
            blue600: '#228BE6',
            blue500: '#339AF0',
            blue400: '#4DABF7',
            blue300: '#74C0FC',
            blue200: '#A5D8FF',
            blue100: '#D0EBFF',
            blue50: '#E7F5FF',
            indigo900: '#364FC7',
            indigo800: '#3B5BDB',
            indigo700: '#4263EB',
            indigo600: '#4C6EF5',
            indigo500: '#5C7CFA',
            indigo400: '#748FFC',
            indigo300: '#91A7FF',
            indigo200: '#BAC8FF',
            indigo100: '#DBE4FF',
            indigo50: '#EDF2FF',
            purple900: '#4C1D95',
            purple800: '#5B21B6',
            purple700: '#6D28D9',
            purple600: '#7C3AED',
            purple500: '#8B5CF6',
            purple400: '#A78BFA',
            purple300: '#C4B5FD',
            purple200: '#DDD6FE',
            purple100: '#EDE9FE',
            purple50: '#F5F3FF',
            violet900: '#5F3DC4',
            violet800: '#6741D9',
            violet700: '#7048E8',
            violet600: '#7950F2',
            violet500: '#845EF7',
            violet400: '#9775FA',
            violet300: '#B197FC',
            violet200: '#D0BFFF',
            violet100: '#E5DBFF',
            violet50: '#F3F0FF',
            grape900: '#862E9C',
            grape800: '#9C36B5',
            grape700: '#AE3EC9',
            grape600: '#BE4BDB',
            grape500: '#CC5DE8',
            grape400: '#DA77F2',
            grape300: '#E599F7',
            grape200: '#EEBEFA',
            grape100: '#F3D9FA',
            grape50: '#F8F0FC',
            pink900: '#A61E4D',
            pink800: '#C2255C',
            pink700: '#D6336C',
            pink600: '#E64980',
            pink500: '#F06595',
            pink400: '#F783AC',
            pink300: '#FAA2C1',
            pink200: '#FCC2D7',
            pink100: '#FFDEEB',
            pink50: '#FFF0F6',
            red900: '#C92A2A',
            red800: '#E03131',
            red700: '#F03E3E',
            red600: '#FA5252',
            red500: '#FF6B6B',
            red400: '#FF8787',
            red300: '#FFA8A8',
            red200: '#FFC9C9',
            red100: '#FFE3E3',
            red50: '#FFF5F5',
        },
        space: {
            n: (0, polished_1.rem)(0),
            0: (0, polished_1.rem)(2),
            1: (0, polished_1.rem)(4),
            2: (0, polished_1.rem)(8),
            3: (0, polished_1.rem)(16),
            4: (0, polished_1.rem)(32),
            5: (0, polished_1.rem)(64),
            6: (0, polished_1.rem)(128),
            7: (0, polished_1.rem)(192),
            8: (0, polished_1.rem)(256),
            9: (0, polished_1.rem)(320),
        },
        sizes: {
            n: (0, polished_1.rem)(0),
            0: (0, polished_1.rem)(4),
            1: (0, polished_1.rem)(8),
            2: (0, polished_1.rem)(12),
            3: (0, polished_1.rem)(16),
            4: (0, polished_1.rem)(20),
            5: (0, polished_1.rem)(24),
            6: (0, polished_1.rem)(28),
            7: (0, polished_1.rem)(32),
            8: (0, polished_1.rem)(36),
            9: (0, polished_1.rem)(40),
            10: (0, polished_1.rem)(44),
            11: (0, polished_1.rem)(48),
            12: (0, polished_1.rem)(52),
            13: (0, polished_1.rem)(56),
            14: (0, polished_1.rem)(60),
            15: (0, polished_1.rem)(64),
            16: (0, polished_1.rem)(68),
            17: (0, polished_1.rem)(72),
            18: (0, polished_1.rem)(76),
            19: (0, polished_1.rem)(80),
            20: (0, polished_1.rem)(84),
            21: (0, polished_1.rem)(88),
            22: (0, polished_1.rem)(92),
            23: (0, polished_1.rem)(96),
            24: (0, polished_1.rem)(100),
            25: (0, polished_1.rem)(104),
            26: (0, polished_1.rem)(108),
            27: (0, polished_1.rem)(112),
            28: (0, polished_1.rem)(116),
            29: (0, polished_1.rem)(120),
            30: (0, polished_1.rem)(124),
            31: (0, polished_1.rem)(152),
            32: (0, polished_1.rem)(184),
            33: (0, polished_1.rem)(200),
            34: (0, polished_1.rem)(224),
            35: (0, polished_1.rem)(256),
            36: (0, polished_1.rem)(320),
        },
        fontSizes: {
            h1: (0, polished_1.rem)(48),
            h2: (0, polished_1.rem)(40),
            h3: (0, polished_1.rem)(32),
            h4: (0, polished_1.rem)(28),
            h5: (0, polished_1.rem)(23),
            h6: (0, polished_1.rem)(19),
            body: (0, polished_1.rem)(16),
            bodySm: (0, polished_1.rem)(14),
            caption: (0, polished_1.rem)(13),
            footnote: (0, polished_1.rem)(11),
        },
        fonts: {
            normal: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;',
            mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono','Courier New', monospace;",
        },
        fontWeights: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
        },
        lineHeights: {
            n: (0, polished_1.rem)(0),
            0: (0, polished_1.rem)(16),
            1: (0, polished_1.rem)(24),
            2: (0, polished_1.rem)(32),
            3: (0, polished_1.rem)(40),
            4: (0, polished_1.rem)(48),
            5: (0, polished_1.rem)(56),
            6: (0, polished_1.rem)(64),
        },
        letterSpacings: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
        },
        borderWidths: {
            light: '1px',
            normal: '2px',
            bold: '3px',
            extrabold: '4px',
            black: '5px',
        },
        radii: {
            xs: '5px',
            sm: '7px',
            md: '12px',
            base: '14px',
            lg: '14px',
            xl: '45px',
            squared: '33%',
            rounded: '50%',
            pill: '9999px',
        },
        shadows: {
            default: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
            a11y: '0 0 0 3px rgba(66,153,225,0.6)',
        },
        zIndices: {
            1: '100',
            2: '200',
            3: '300',
            4: '400',
            5: '500',
            10: '1000',
            max: '9999',
        },
        transitions: {
            default: 'all 250ms ease',
        },
        breakpoints: {
            n: '0px',
            xs: '650px',
            sm: '960px',
            md: '1280px',
            lg: '1400px',
            xl: '1920px',
        },
    },
    media: {
        n: '(min-width: 0px)',
        xs: '(min-width: 650px)',
        sm: '(min-width: 960px)',
        md: '(min-width: 1280px)',
        lg: '(min-width: 1400px)',
        xl: '(min-width: 1920px)',
        xsMax: '(max-width: 650px)',
        smMax: '(max-width: 960px)',
        mdMax: '(max-width: 1280px)',
        lgMax: '(max-width: 1400px)',
        xlMax: '(max-width: 1920px)',
        dark: '(prefers-color-scheme: dark)',
    },
    utils: {
        // Abbreviated margin properties
        m: (value) => ({
            margin: value,
        }),
        mt: (value) => ({
            marginTop: value,
        }),
        mr: (value) => ({
            marginRight: value,
        }),
        mb: (value) => ({
            marginBottom: value,
        }),
        ml: (value) => ({
            marginLeft: value,
        }),
        mx: (value) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value) => ({
            marginTop: value,
            marginBottom: value,
        }),
        // Abbreviated padding properties
        p: (value) => ({
            padding: value,
        }),
        pt: (value) => ({
            paddingTop: value,
        }),
        pr: (value) => ({
            paddingRight: value,
        }),
        pb: (value) => ({
            paddingBottom: value,
        }),
        pl: (value) => ({
            paddingLeft: value,
        }),
        px: (value) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
        // color
        bg: (value) => ({
            backgroundColor: value,
        }),
        // A property for applying width/height together
        size: (value) => ({
            width: value,
            height: value,
        }),
        // A property to apply linear gradient
        linearGradient: (value) => ({
            backgroundImage: `linear-gradient(${value})`,
        }),
        // An abbreviated property for border-radius
        br: (value) => ({
            borderRadius: value,
        }),
        // property for flexbox
        dflex: (value) => ({
            display: 'flex',
            justifyContent: value,
            alignItems: value,
        }),
    },
};
const stitches = (0, react_1.createStitches)(exports.baseTheme);
exports.createTheme = stitches.createTheme;
exports.styled = stitches.styled;
exports.css = stitches.css;
exports.globalCss = stitches.globalCss;
exports.theme = stitches.theme;
exports.config = stitches.config;
exports.getCssText = stitches.getCssText;
exports.standardColors = [
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpdGNoZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9UaGVtZS9zdGl0Y2hlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQWlEO0FBRWpELHVDQUErQjtBQUVsQixRQUFBLFNBQVMsR0FBRztJQUN2QixLQUFLLEVBQUU7UUFDTCxNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsUUFBUTtZQUNkLHdDQUF3QztZQUN4QyxPQUFPLEVBQUUsU0FBUztZQUNsQixrQkFBa0IsRUFBRSxTQUFTO1lBQzdCLGtCQUFrQixFQUFFLFNBQVM7WUFDN0Isa0JBQWtCLEVBQUUsU0FBUztZQUM3QixrQkFBa0IsRUFBRSxTQUFTO1lBQzdCLG1CQUFtQixFQUFFLDBCQUEwQjtZQUMvQyxtQkFBbUIsRUFBRSwwQkFBMEI7WUFDL0MsbUJBQW1CLEVBQUUsMEJBQTBCO1lBQy9DLG1CQUFtQixFQUFFLDBCQUEwQjtZQUMvQyxtQkFBbUIsRUFBRSwwQkFBMEI7WUFDL0MsbUJBQW1CLEVBQUUsMEJBQTBCO1lBQy9DLG1CQUFtQixFQUFFLHlCQUF5QjtZQUM5QyxtQkFBbUIsRUFBRSwwQkFBMEI7WUFDL0Msa0JBQWtCLEVBQUUsTUFBTTtZQUMxQixTQUFTLEVBQUUsU0FBUztZQUNwQixvQkFBb0IsRUFBRSxTQUFTO1lBQy9CLG9CQUFvQixFQUFFLFNBQVM7WUFDL0Isb0JBQW9CLEVBQUUsU0FBUztZQUMvQixvQkFBb0IsRUFBRSxTQUFTO1lBQy9CLHFCQUFxQixFQUFFLDJCQUEyQjtZQUNsRCxxQkFBcUIsRUFBRSwyQkFBMkI7WUFDbEQscUJBQXFCLEVBQUUsMkJBQTJCO1lBQ2xELHFCQUFxQixFQUFFLDJCQUEyQjtZQUNsRCxxQkFBcUIsRUFBRSwyQkFBMkI7WUFDbEQscUJBQXFCLEVBQUUsMkJBQTJCO1lBQ2xELHFCQUFxQixFQUFFLDBCQUEwQjtZQUNqRCxxQkFBcUIsRUFBRSwyQkFBMkI7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WUFDakIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsWUFBWSxFQUFFLFNBQVM7WUFDdkIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsTUFBTSxFQUFFLFNBQVM7WUFDakIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsWUFBWSxFQUFFLFNBQVM7WUFDdkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsTUFBTSxFQUFFLFNBQVM7WUFDakIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsTUFBTSxFQUFFLFNBQVM7WUFDakIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsTUFBTSxFQUFFLFNBQVM7WUFDakIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsTUFBTSxFQUFFLFNBQVM7WUFDakIsTUFBTSxFQUFFLFNBQVM7WUFDakIsTUFBTSxFQUFFLFNBQVM7WUFDakIsTUFBTSxFQUFFLFNBQVM7WUFDakIsTUFBTSxFQUFFLFNBQVM7WUFDakIsTUFBTSxFQUFFLFNBQVM7WUFDakIsTUFBTSxFQUFFLFNBQVM7WUFDakIsTUFBTSxFQUFFLFNBQVM7WUFDakIsTUFBTSxFQUFFLFNBQVM7WUFDakIsTUFBTSxFQUFFLFNBQVM7WUFDakIsS0FBSyxFQUFFLFNBQVM7U0FDakI7UUFDRCxLQUFLLEVBQUU7WUFDTCxDQUFDLEVBQUUsSUFBQSxjQUFHLEVBQUMsQ0FBQyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLElBQUEsY0FBRyxFQUFDLENBQUMsQ0FBQztZQUNULENBQUMsRUFBRSxJQUFBLGNBQUcsRUFBQyxDQUFDLENBQUM7WUFDVCxDQUFDLEVBQUUsSUFBQSxjQUFHLEVBQUMsQ0FBQyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLElBQUEsY0FBRyxFQUFDLEVBQUUsQ0FBQztZQUNWLENBQUMsRUFBRSxJQUFBLGNBQUcsRUFBQyxFQUFFLENBQUM7WUFDVixDQUFDLEVBQUUsSUFBQSxjQUFHLEVBQUMsRUFBRSxDQUFDO1lBQ1YsQ0FBQyxFQUFFLElBQUEsY0FBRyxFQUFDLEdBQUcsQ0FBQztZQUNYLENBQUMsRUFBRSxJQUFBLGNBQUcsRUFBQyxHQUFHLENBQUM7WUFDWCxDQUFDLEVBQUUsSUFBQSxjQUFHLEVBQUMsR0FBRyxDQUFDO1lBQ1gsQ0FBQyxFQUFFLElBQUEsY0FBRyxFQUFDLEdBQUcsQ0FBQztTQUNaO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsQ0FBQyxFQUFFLElBQUEsY0FBRyxFQUFDLENBQUMsQ0FBQztZQUNULENBQUMsRUFBRSxJQUFBLGNBQUcsRUFBQyxDQUFDLENBQUM7WUFDVCxDQUFDLEVBQUUsSUFBQSxjQUFHLEVBQUMsQ0FBQyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLElBQUEsY0FBRyxFQUFDLEVBQUUsQ0FBQztZQUNWLENBQUMsRUFBRSxJQUFBLGNBQUcsRUFBQyxFQUFFLENBQUM7WUFDVixDQUFDLEVBQUUsSUFBQSxjQUFHLEVBQUMsRUFBRSxDQUFDO1lBQ1YsQ0FBQyxFQUFFLElBQUEsY0FBRyxFQUFDLEVBQUUsQ0FBQztZQUNWLENBQUMsRUFBRSxJQUFBLGNBQUcsRUFBQyxFQUFFLENBQUM7WUFDVixDQUFDLEVBQUUsSUFBQSxjQUFHLEVBQUMsRUFBRSxDQUFDO1lBQ1YsQ0FBQyxFQUFFLElBQUEsY0FBRyxFQUFDLEVBQUUsQ0FBQztZQUNWLENBQUMsRUFBRSxJQUFBLGNBQUcsRUFBQyxFQUFFLENBQUM7WUFDVixFQUFFLEVBQUUsSUFBQSxjQUFHLEVBQUMsRUFBRSxDQUFDO1lBQ1gsRUFBRSxFQUFFLElBQUEsY0FBRyxFQUFDLEVBQUUsQ0FBQztZQUNYLEVBQUUsRUFBRSxJQUFBLGNBQUcsRUFBQyxFQUFFLENBQUM7WUFDWCxFQUFFLEVBQUUsSUFBQSxjQUFHLEVBQUMsRUFBRSxDQUFDO1lBQ1gsRUFBRSxFQUFFLElBQUEsY0FBRyxFQUFDLEVBQUUsQ0FBQztZQUNYLEVBQUUsRUFBRSxJQUFBLGNBQUcsRUFBQyxFQUFFLENBQUM7WUFDWCxFQUFFLEVBQUUsSUFBQSxjQUFHLEVBQUMsRUFBRSxDQUFDO1lBQ1gsRUFBRSxFQUFFLElBQUEsY0FBRyxFQUFDLEVBQUUsQ0FBQztZQUNYLEVBQUUsRUFBRSxJQUFBLGNBQUcsRUFBQyxFQUFFLENBQUM7WUFDWCxFQUFFLEVBQUUsSUFBQSxjQUFHLEVBQUMsRUFBRSxDQUFDO1lBQ1gsRUFBRSxFQUFFLElBQUEsY0FBRyxFQUFDLEVBQUUsQ0FBQztZQUNYLEVBQUUsRUFBRSxJQUFBLGNBQUcsRUFBQyxFQUFFLENBQUM7WUFDWCxFQUFFLEVBQUUsSUFBQSxjQUFHLEVBQUMsRUFBRSxDQUFDO1lBQ1gsRUFBRSxFQUFFLElBQUEsY0FBRyxFQUFDLEVBQUUsQ0FBQztZQUNYLEVBQUUsRUFBRSxJQUFBLGNBQUcsRUFBQyxHQUFHLENBQUM7WUFDWixFQUFFLEVBQUUsSUFBQSxjQUFHLEVBQUMsR0FBRyxDQUFDO1lBQ1osRUFBRSxFQUFFLElBQUEsY0FBRyxFQUFDLEdBQUcsQ0FBQztZQUNaLEVBQUUsRUFBRSxJQUFBLGNBQUcsRUFBQyxHQUFHLENBQUM7WUFDWixFQUFFLEVBQUUsSUFBQSxjQUFHLEVBQUMsR0FBRyxDQUFDO1lBQ1osRUFBRSxFQUFFLElBQUEsY0FBRyxFQUFDLEdBQUcsQ0FBQztZQUNaLEVBQUUsRUFBRSxJQUFBLGNBQUcsRUFBQyxHQUFHLENBQUM7WUFDWixFQUFFLEVBQUUsSUFBQSxjQUFHLEVBQUMsR0FBRyxDQUFDO1lBQ1osRUFBRSxFQUFFLElBQUEsY0FBRyxFQUFDLEdBQUcsQ0FBQztZQUNaLEVBQUUsRUFBRSxJQUFBLGNBQUcsRUFBQyxHQUFHLENBQUM7WUFDWixFQUFFLEVBQUUsSUFBQSxjQUFHLEVBQUMsR0FBRyxDQUFDO1lBQ1osRUFBRSxFQUFFLElBQUEsY0FBRyxFQUFDLEdBQUcsQ0FBQztZQUNaLEVBQUUsRUFBRSxJQUFBLGNBQUcsRUFBQyxHQUFHLENBQUM7U0FDYjtRQUNELFNBQVMsRUFBRTtZQUNULEVBQUUsRUFBRSxJQUFB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