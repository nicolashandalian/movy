import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Screen } from 'ui';
import { PlansScreenProps } from 'application/navigation/types';
import { SRoundedButton } from 'ui/button';
import { strings } from 'services/localization';
import { Title, XsBody } from 'ui/text';
import { spacing } from 'application/theme';

const Plans: React.FC<PlansScreenProps> = () => {
	const onTryNow = () => {
		//TODO: Navigate to try now
	};
	return (
		<Screen noPadding floatingHeader headerStyle="login-dark">
			<ScrollView>
				<View>
					<Image
						source={require('../../../../assets/icons/plansBackground.png')}
					/>
					<View style={styles.bannerContainer}>
						<Title>{strings.plans.bannerTitle}</Title>
						<XsBody style={styles.bannerSubtitle}>
							{strings.plans.bannerSubtitle}
						</XsBody>
						<SRoundedButton
							style={styles.bannerButton}
							text={strings.plans.bannerButton}
							onPress={onTryNow}
						/>
					</View>
				</View>
			</ScrollView>
		</Screen>
	);
};

const styles = StyleSheet.create({
	bannerButton: { marginTop: spacing.xxl },
	bannerContainer: {
		alignItems: 'center',
		paddingHorizontal: spacing.xxl,
		position: 'absolute',
		top: spacing.s320,
		width: '100%',
	},
	bannerSubtitle: {
		textTransform: 'uppercase',
	},
});

export default Plans;
