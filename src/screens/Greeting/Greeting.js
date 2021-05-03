import RichManLogo from '../../assets/rich-man.svg';
import LogoScreen from '../../ui/LogoScreen/LogoScreen';

const Title = () => {
	return (
		<>
			Welcome to the ranks
			<br />
			of <span className='text-uppercase'>rich people</span>,<br />
			new millionaire!!!
		</>
	);
};

const Greeting = () => {
	return <LogoScreen logoSRC={RichManLogo} title={<Title />} />;
};

export default Greeting;
