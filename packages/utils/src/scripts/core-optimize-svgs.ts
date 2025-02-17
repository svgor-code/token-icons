// Import the newly defined constants
import * as path from 'path'
import fs from 'fs'
import {
  coreRoot,
  SVG_TOKENS_SRC_DIR,
  SVG_TOKENS_OUT_DIR,
  SVG_NETWORKS_SRC_DIR,
  SVG_NETWORKS_OUT_DIR,
} from '../constants'
import { ensureDirectoryExists, optimizeSvg } from '../utils'

// Ensure necessary directories exist
ensureDirectoryExists(path.resolve(coreRoot, 'dist'))
ensureDirectoryExists(path.resolve(coreRoot, 'dist', 'svgs'))
ensureDirectoryExists(SVG_TOKENS_OUT_DIR)
ensureDirectoryExists(SVG_NETWORKS_OUT_DIR)
ensureDirectoryExists(path.join(SVG_TOKENS_OUT_DIR, 'mono'))
ensureDirectoryExists(path.join(SVG_TOKENS_OUT_DIR, 'branded'))
ensureDirectoryExists(path.join(SVG_NETWORKS_OUT_DIR, 'mono'))
ensureDirectoryExists(path.join(SVG_NETWORKS_OUT_DIR, 'branded'))

type ITokenMetadata = 'branded' | 'mono'

// Function to read SVGs from a directory
const readSVGsFromDir = (dir: string): Record<ITokenMetadata, string[]> => ({
  branded: fs.readdirSync(path.join(dir, 'branded')),
  mono: fs.readdirSync(path.join(dir, 'mono')),
})

// Function to process and optimize SVGs
const processSVGs = (
  sourceDir: string,
  outDir: string,
  variant: ITokenMetadata,
  rawSVGs: string[],
): void => {
  rawSVGs.forEach((rawSVG) => {
    optimizeAndOutput(rawSVG, sourceDir, outDir, variant)
  })
  console.log(
    `→ optimized ${variant} in ${path.basename(sourceDir)}:`,
    rawSVGs.length,
  )
}

const optimizeAndOutput = (
  rawSVG: string,
  sourceDir: string,
  outDir: string,
  variant: ITokenMetadata,
): void => {
  const baseName = path.basename(rawSVG, '.svg')
  const svgFilePath = path.join(sourceDir, variant, rawSVG)
  const optimizedSVG = optimizeSvg(
    fs.readFileSync(svgFilePath, 'utf-8'),
    baseName,
  )
  fs.writeFileSync(path.join(outDir, variant, rawSVG), optimizedSVG)
}

// Process SVGs for tokens
const tokenSVGs = readSVGsFromDir(SVG_TOKENS_SRC_DIR)
Object.entries(tokenSVGs).forEach(([variant, svgList]) => {
  processSVGs(
    SVG_TOKENS_SRC_DIR,
    SVG_TOKENS_OUT_DIR,
    variant as ITokenMetadata,
    svgList,
  )
})

// Process SVGs for networks
const networkSVGs = readSVGsFromDir(SVG_NETWORKS_SRC_DIR)
Object.entries(networkSVGs).forEach(([variant, svgList]) => {
  processSVGs(
    SVG_NETWORKS_SRC_DIR,
    SVG_NETWORKS_OUT_DIR,
    variant as ITokenMetadata,
    svgList,
  )
})
