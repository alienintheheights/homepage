import {IMAGE_FULL_PATH, AWS_HOST_THUMBNAIL_BUCKET, AWS_THUMBNAIL_IMG_PREFIX} from './constants' 

const shuffle = function (array) {
  // Fisher-Yates shuffle
  var i = 0,
    j = 0,
    temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

export const buildImageArray = function (size) {
  var imageArray = [];
  for (var i = 0; i < size; i++) {
    imageArray[i] = (i + 1)
  }
  shuffle(imageArray)
  return imageArray
}

export const genImageThumbnailPath = function (imgValue) {
  return AWS_HOST_THUMBNAIL_BUCKET + AWS_THUMBNAIL_IMG_PREFIX + imgValue + ".jpg";
}

export const genImageFullPath = function (imgValue) {
  return IMAGE_FULL_PATH + imgValue + ".jpg";
}

export const genStyleTag = function (imgValue) {
  return {
    backgroundImage: 'url(' + genImageThumbnailPath(imgValue) + ')'
  }
}

