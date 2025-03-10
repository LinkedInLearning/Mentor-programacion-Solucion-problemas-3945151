
import { useSpring, animated } from 'react-spring';

const BotonAnimado = ({ texto }) => {
    const springProps = useSpring({
        from: { opacity: 0, transform: 'translateY(-100px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { tension: 220, friction: 120 }
    });

    return (
        <animated.div className={
            'btn btn-primary btn-lg d-flex align-items-center'
        } style={{ ...springProps, margin: '10px' }}>
            {texto}
        </animated.div>
    );
};


export default BotonAnimado;