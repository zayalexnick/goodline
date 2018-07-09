import React from 'react';
import { RefreshControl } from 'react-native';
import theme from '~/theme'

export default (props) => <RefreshControl progressBackgroundColor={theme.colors.primary} colors={[theme.colors.white]} tintColor={theme.colors.primary} { ...props } />