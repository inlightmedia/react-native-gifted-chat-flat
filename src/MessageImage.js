import PropTypes from 'prop-types';
import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  ViewStylePropTypes,
  ImageStylePropTypes,
  ViewPropTypes
} from 'react-native';
import Lightbox from 'react-native-lightbox';

export default class MessageImage extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <Lightbox
          activeProps={{
            style: styles.imageActive
          }}
          {...this.props.lightboxProps}
        >
          <Image
            {...this.props.imageProps}
            style={[styles.image, this.props.imageStyle]}
            source={{ uri: this.props.currentMessage.image }}
          />
        </Lightbox>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
    resizeMode: 'cover'
  },
  imageActive: {
    flex: 1,
    resizeMode: 'contain'
  }
});

MessageImage.defaultProps = {
  currentMessage: {
    image: null
  },
  containerStyle: {},
  imageStyle: {},
  imageProps: {},
  lightboxProps: {}
};

MessageImage.propTypes = {
  currentMessage: PropTypes.object,
  containerStyle: ViewStylePropTypes,
  imageStyle: ImageStylePropTypes,
  imageProps: PropTypes.object,
  lightboxProps: PropTypes.object
};
