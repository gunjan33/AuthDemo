import { Dimensions, PixelRatio, Platform } from 'react-native';

// Platform flags
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const versionNumber = Number(Platform.Version);

// Screen dimensions based on iPhone 13 scale
const SCREEN_HEIGHT = 880;
const SCREEN_WIDTH = 447;

// Get current device screen dimensions
const { width, height } = Dimensions.get('window');

/**
 * The base diagonal size of the screen
 */
const guidelineBaseDiagonal = Math.sqrt(SCREEN_WIDTH ** 2 + SCREEN_HEIGHT ** 2);

/**
 * The current diagonal size of the screen
 */
const currentDiagonal = Math.sqrt(width ** 2 + height ** 2);

/**
 * Scales a size based on the screen size
 * @param size - The size to scale
 * @returns The scaled size
 */
export const scale = (size: number) => {
  return Math.ceil((currentDiagonal / guidelineBaseDiagonal) * size);
};
/**
 * Calculates font size proportionally based on screen width
 * @param units - The original font size to scale
 * @returns Scaled font size
 */

/**
 * Gets the screen width
 */
export const ScreenWidth: number = width;

/**
 * Gets the screen height
 */
export const ScreenHeight: number = height;

/**
 * Scales a font size based on the screen size
 * @param size - The font size to scale
 * @returns The scaled font size
 */
const scaleFont = Math.min(width / SCREEN_WIDTH, height / SCREEN_HEIGHT);
/**
 * Normalizes a font size based on the screen size
 * @param size - The font size to normalize
 * @returns The normalized font size
 */
export function normalize(size: number) {
  const baseSize = size * scaleFont;
  return Math.round(PixelRatio.roundToNearestPixel(baseSize));
}
