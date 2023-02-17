/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { FlatList, TextInput, View } from 'react-native';

import ProductListItem from './ProductListItem';

export default function ProductList() {
	const [list, setList] = useState<string[]>([]);
	const [product, setProduct] = useState<string>('');

	return (
		<View>
			<TextInput style={{
				margin: 10,
				borderRadius: 4,
				fontSize: 18,
				padding: 10,
				borderWidth: 1,
				borderColor: '#000000'
			}}
			placeholder="Escreva o produto"
			onChangeText={text => {
				setList(oldList => [...oldList, text]);
			}}
			/>
			<FlatList
				data={list}
				renderItem={({item}) => (
					<ProductListItem product={item} />
				)}
			/>
		</View>
	);
}
