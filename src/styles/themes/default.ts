import {
  borders,
  colors,
  fonts,
  grids,
  medias,
  opacities,
  sizes,
  spacings,
  transitions,
  zIndices
} from '../tokens';

export default {
  border: {
    radius: { ...borders.radius },
    styles: { ...borders.styles },
    width: { ...borders.widths }
  },
  color: { ...colors.base },
  font: {
    family: { ...fonts.families },
    letterSpacing: { ...fonts.letterSpacings },
    lineHeight: { ...fonts.lineHeights },
    size: { ...fonts.sizes },
    weight: { ...fonts.weights }
  },
  grid: { ...grids },
  media: { ...medias },
  opacity: { ...opacities },
  shadow: {},
  sizes: { ...sizes },
  space: { ...spacings },
  transition: { ...transitions },
  zIndex: { ...zIndices }
} as const;
