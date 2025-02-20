import React, { useState, useEffect, useRef } from 'react';
import PlansPriceTab from './Tabs/PlansPriceTab';
import PlansCancelTab from './Tabs/PlansCancelTab';
import PlansDevicesTab from './Tabs/PlansDevicesTab';
import PlansHeader from './components/PlansHeader';
import { colors, spacing } from 'application/theme';
import {
	StyleSheet,
	View,
	Dimensions,
	Animated,
	FlatList,
	ListRenderItem,
} from 'react-native';
import {
	TabView,
	TabBar,
	SceneRendererProps,
	NavigationState,
} from 'react-native-tab-view';

const TAB_BAR_HEIGHT = 48;
const HEADER_HEIGHT = 720;

interface TabSceneProps<T> {
	renderItem: ListRenderItem<T>;
	scrollY: Animated.Value;
	onScrollEndDrag: () => void;
	onMomentumScrollEnd: () => void;
	onMomentumScrollBegin: () => void;
}

type ListItem = { id: string; title: string };

const TabScene = ({
	scrollY,
	renderItem,
	onScrollEndDrag,
	onMomentumScrollEnd,
	onMomentumScrollBegin,
}: TabSceneProps<ListItem>) => {
	const windowHeight = Dimensions.get('window').height;

	return (
		<Animated.FlatList<ListItem>
			pointerEvents="box-none"
			scrollToOverflowEnabled={true}
			scrollEventThrottle={16}
			onScroll={Animated.event(
				[{ nativeEvent: { contentOffset: { y: scrollY } } }],
				{ useNativeDriver: true },
			)}
			onMomentumScrollBegin={onMomentumScrollBegin}
			onScrollEndDrag={onScrollEndDrag}
			onMomentumScrollEnd={onMomentumScrollEnd}
			contentContainerStyle={{
				paddingTop: HEADER_HEIGHT + TAB_BAR_HEIGHT,
				minHeight: windowHeight - TAB_BAR_HEIGHT,
			}}
			showsHorizontalScrollIndicator={false}
			data={[{ id: '1', title: 'content' }]}
			renderItem={renderItem}
			showsVerticalScrollIndicator={false}
			keyExtractor={(_, index) => index.toString()}
		/>
	);
};

type Route = { key: string; title: string };

const routes: Route[] = [
	{ key: 'tab1', title: 'Price' },
	{ key: 'tab2', title: 'Cancel' },
	{ key: 'tab3', title: 'Devices' },
];

const Plans = () => {
	const [tabIndex, setIndex] = useState<number>(0);
	const scrollY = useRef(new Animated.Value(0)).current;
	const listRefArr = useRef<
		{ key: string; value: React.RefObject<FlatList<ListItem>> | null }[]
	>([]);

	const listOffset = useRef<Record<string, number>>({});
	const isListGliding = useRef<boolean>(false);

	useEffect(() => {
		const listener = scrollY.addListener(({ value }) => {
			const curRoute = routes[tabIndex].key;
			listOffset.current[curRoute] = value;
		});

		return () => {
			scrollY.removeListener(listener);
		};
	}, [tabIndex, scrollY]);

	const syncScrollOffset = () => {
		const curRouteKey = routes[tabIndex].key;
		listRefArr.current.forEach((item) => {
			if (item.key !== curRouteKey) {
				const currentScrollY = listOffset.current[curRouteKey] || 0;

				if (currentScrollY < HEADER_HEIGHT && currentScrollY >= 0) {
					if (item.value?.current) {
						item.value.current.scrollToOffset({
							offset: currentScrollY,
							animated: false,
						});
						listOffset.current[item.key] = currentScrollY;
					}
				} else if (currentScrollY >= HEADER_HEIGHT) {
					if (
						listOffset.current[item.key] < HEADER_HEIGHT ||
						listOffset.current[item.key] == null
					) {
						if (item.value?.current) {
							item.value.current.scrollToOffset({
								offset: HEADER_HEIGHT,
								animated: false,
							});
							listOffset.current[item.key] = HEADER_HEIGHT;
						}
					}
				}
			}
		});
	};

	const onMomentumScrollBegin = () => {
		isListGliding.current = true;
	};

	const onMomentumScrollEnd = () => {
		isListGliding.current = false;
		syncScrollOffset();
	};

	const onScrollEndDrag = () => {
		syncScrollOffset();
	};

	const renderHeader = () => {
		const y = scrollY.interpolate({
			inputRange: [0, HEADER_HEIGHT],
			outputRange: [0, -HEADER_HEIGHT],
			extrapolateRight: 'clamp',
		});
		return (
			<Animated.View
				style={[styles.header, { transform: [{ translateY: y }] }]}
				pointerEvents="box-none">
				<PlansHeader />
			</Animated.View>
		);
	};

	const renderScene = ({ route }: { route: Route }) => {
		const renderPriceTab: ListRenderItem<ListItem> = () => (
			<PlansPriceTab style={styles.tabScreenContainer} />
		);
		const renderCancelTab: ListRenderItem<ListItem> = () => (
			<PlansCancelTab style={styles.tabScreenContainer} />
		);
		const renderDevicesTab: ListRenderItem<ListItem> = () => (
			<PlansDevicesTab style={styles.tabScreenContainer} />
		);
		let renderItem: ListRenderItem<ListItem>;
		switch (route.key) {
			case 'tab1':
				renderItem = renderPriceTab;
				break;
			case 'tab2':
				renderItem = renderCancelTab;
				break;
			case 'tab3':
				renderItem = renderDevicesTab;
				break;
			default:
				return null;
		}

		return (
			<TabScene
				renderItem={renderItem}
				scrollY={scrollY}
				onMomentumScrollBegin={onMomentumScrollBegin}
				onScrollEndDrag={onScrollEndDrag}
				onMomentumScrollEnd={onMomentumScrollEnd}
			/>
		);
	};

	const renderTabBar = (
		props: SceneRendererProps & { navigationState: NavigationState<Route> },
	) => {
		const y = scrollY.interpolate({
			inputRange: [0, HEADER_HEIGHT],
			outputRange: [HEADER_HEIGHT, 0],
			extrapolateRight: 'clamp',
		});
		return (
			<Animated.View
				style={[styles.tabContainer, { transform: [{ translateY: y }] }]}>
				<TabBar
					{...props}
					onTabPress={({ preventDefault }) => {
						if (isListGliding.current) {
							preventDefault();
						}
					}}
					style={styles.tab}
					indicatorStyle={styles.indicator}
				/>
			</Animated.View>
		);
	};

	return (
		<View style={styles.container}>
			{renderHeader()}
			<TabView
				onIndexChange={setIndex}
				navigationState={{ index: tabIndex, routes }}
				renderScene={renderScene}
				renderTabBar={renderTabBar}
				initialLayout={{ height: 0, width: Dimensions.get('window').width }}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.darkBackground,
		flex: 1,
	},
	header: {
		alignItems: 'center',
		height: HEADER_HEIGHT,
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		width: '100%',
	},
	indicator: { backgroundColor: colors.blue },
	tab: {
		backgroundColor: colors.tabBackground,
		elevation: 0,
		shadowOpacity: 0,
	},
	tabContainer: { position: 'absolute', width: '100%', zIndex: 1 },
	tabScreenContainer: {
		paddingHorizontal: spacing.xl,
		paddingVertical: spacing.s56,
	},
});

export default Plans;
