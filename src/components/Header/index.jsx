import React from 'react';
import { FlexBox, Alignment } from '@lumx/react';
import SearchField from '../SearchField';
import { ReactComponent as Logo } from '../../medias/logo.svg';

const Header = () => (
	<header className="lumx-spacing-padding-big header">
		<FlexBox vAlign={Alignment.spaceBetween}>
			<Logo className="logo"/>
			<SearchField />
		</FlexBox>
	</header>
);

export default Header;
