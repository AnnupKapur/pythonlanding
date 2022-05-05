type Props = {
	arrClasses:Record<any, any>[],
}

const Classjoin = ({arrClasses}:Props):string => {
	return arrClasses.join(' ');
}

export default Classjoin;