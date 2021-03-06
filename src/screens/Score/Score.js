import { useLocation } from 'react-router-dom';

import HandLogo from '../../assets/hand.svg';
import { GAME_SCREEN } from '../../constants/screens';
import LogoScreen from '../../ui/LogoScreen/LogoScreen';

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
