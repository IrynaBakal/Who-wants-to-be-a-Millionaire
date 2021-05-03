import { useLocation } from 'react-router-dom';

import HandLogo from './../../assets/hand.svg';
import LogoScreen from '../../ui/LogoScreen/LogoScreen';
import { GAME_SCREEN } from '../../constants/screens';

const Score = () => {
	const location = useLocation();
	return (
		<LogoScreen
			logoSRC={HandLogo}
			title={`${location?.state} earned`}
			subtitle={'Total score:'}
			redirectURL={GAME_SCREEN}
			buttonText={'Try again'}
			hasButton
		/>
	);
};

export default Score;
