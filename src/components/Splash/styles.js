import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = {
    Login: {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        animation: {
            position: 'absolute',
            top: 0,
            left: 0,
            width,
            height,
        },
        btnLogin: {
            backgroundColor: '#4267b2',
            width: 100,
            height: 100,
            borderRadius: 50,
            marginTop: 25,
            justifyContent: 'center',
            alignItems: 'center'
        },
        iconLogin: { fontSize: 60, color: '#ffffff' }
    },
    LoginSuccess: {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff'
        },
        animation: {
            position: 'absolute',
            top: 0,
            left: 0,
            width,
            height
        }
    },
    Loading: {
        container: {
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: 0,
            top: 0,
            width,
            height,
            zIndex: 99998
        },
        animation: {
            width: 80,
            height: 80
        }
    }
};

export default styles;
