import React from 'react';
import { spacing } from 'application/theme';
import { View, StyleSheet } from 'react-native';
import { strings } from 'services/localization';
import { TextInput } from 'ui';

interface CreditCardFormProps {
	name: string;
	setName: (name: string) => void;
	lastName: string;
	setLastName: (lastName: string) => void;
	creditCardNumber: string;
	setCreditCardNumber: (creditCardNumber: string) => void;
	extraData: string;
	setExtraData: (extraData: string) => void;
	cvv: string;
	setCvv: (cvv: string) => void;
	onQuestionPress: () => void;
}

const CreditCardForm = ({
	name,
	setName,
	lastName,
	setLastName,
	creditCardNumber,
	setCreditCardNumber,
	extraData,
	setExtraData,
	cvv,
	setCvv,
	onQuestionPress,
}: CreditCardFormProps) => {
	return (
		<View>
			<TextInput
				style={styles.input}
				placeholder={strings.common.name}
				onChangeText={setName}
				value={name}
			/>
			<TextInput
				style={styles.input}
				placeholder={strings.common.lastName}
				onChangeText={setLastName}
				value={lastName}
			/>
			<TextInput
				style={styles.input}
				placeholder={strings.common.cardNumber}
				onChangeText={setCreditCardNumber}
				value={creditCardNumber}
				keyboardType="numeric"
			/>
			<TextInput
				style={styles.input}
				placeholder={strings.common.empty}
				onChangeText={setExtraData}
				value={extraData}
			/>
			<TextInput
				style={styles.input}
				placeholder={strings.common.cvv}
				onChangeText={setCvv}
				value={cvv}
				keyboardType="numeric"
				showQuestionIcon
				onQuestionPress={onQuestionPress}
			/>
		</View>
	);
};

export default CreditCardForm;

const styles = StyleSheet.create({
	input: { marginTop: spacing.m },
});
