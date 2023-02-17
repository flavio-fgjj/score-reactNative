import React from 'react';
import { Text, View } from 'react-native';

interface ProductListItemProps {
	product: string;
}

export default function ProductListItem({product}: ProductListItemProps) {
	return (
		<View>
			<Text style={{fontSize: 36}}>
				{product}
			</Text>
		</View>
	);
}
