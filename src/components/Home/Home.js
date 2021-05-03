import HandLogo from './../../assets/hand.svg';
import LogoScreen from '../../ui/LogoScreen/LogoScreen';
import { GAME_SCREEN } from '../../constants/screens';

const Title = () => {
	return (
		<>
			Who wants to be
			<br /> a millionaire?
		</>
	);
};

const Home = () => {
	return (
		<LogoScreen
			logoSRC={HandLogo}
			title={<Title />}
			redirectURL={GAME_SCREEN}
			buttonText={'Start'}
			hasButton
			hasBg
		/>
	);
};

export default Home;
