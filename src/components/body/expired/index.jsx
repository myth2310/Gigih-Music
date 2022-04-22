import React from 'react';
import Header from '../../module/header';

const Expired = () => {
	return (
		<>
			<Header size="title">Mohon Maaf!</Header>
			<Header size="center">token yang kamu gunakan sudah kadaluarsa</Header>
			<div onClick={() => (window.location = '/')} className="button">
				Kembali
			</div>
		</>
	);
};

export default Expired;
