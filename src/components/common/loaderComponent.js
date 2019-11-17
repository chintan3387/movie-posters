import React from 'react';
import _ from 'lodash';
import { RefreshIndicator } from 'material-ui';

const style = {
    refreshStyle: {
        position: 'relative',
        display: 'block',
        margin: '0 auto'
    }
};

const LoaderComponent = ({ isLoading, children }) => {
    if(isLoading) {
        return (
            <RefreshIndicator
                style={style.refreshStyle}
                top={0}
                left={0}
                size={80}
                status={'loading'}
            />
        );
    }

        return children ? children : null;
}

export default LoaderComponent;